import React, { Component } from 'react'
import {Button, Table} from 'reactstrap'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import './CartList.css'
export default class CartList extends Component {
  renderCart(){
    return (
      <Table striped>
        <thead>
          <tr>
            {/* <th>#</th> */}
            {/* <th>Category Id</th> */}
            <th className='th'>Product Name</th>
            <th className='th'>Unit Price (₺)</th>
            <th className='th'>Units in Stock</th>
            <th className='th'>Quantity</th>
          </tr>
        </thead>
        <tbody>
          { // Sepet buraya gelecek map uyguluyorum
            this.props.cart.map(cartItem => (
              <tr key={cartItem.product.id}>
                {/* <td>{cartItem.product.id}</td> */}
                {/* <td>{cartItem.product.categoryId}</td> */}
                <td className='td'>{cartItem.product.productName}</td>
                <td className='td'>{cartItem.product.unitPrice}</td>
                <td className='td'>{cartItem.product.unitsInStock}</td>
                <td className='td'>{cartItem.quantity}</td>
                <td>
                  <Button color="danger" onClick={() => this.props.removeFromCart(cartItem.product)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    )
  }
  
  render() {
    return (
        <div className='cartList'>
          <div style={{ textAlign: 'right', marginTop: '20px' }}> {/* Butonu sola hizalamak için marginRight'ı kaldırdık */}
            <Button style={{ color: '#fff', backgroundColor: '#667BC6', alignItems: 'center', justifyContent: 'flex-start', marginRight: '5%', border: '1px solid #667BC6', borderRadius: '5px' }}>
              <Link to="/products" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <FaArrowLeft style={{ marginRight: '12px', fontSize: '20px' }}/> Products
              </Link>
            </Button>
          </div>
          {this.renderCart()} {/* renderCarti burada cagirmamiz gerek, Bunu asagida cagirarak urunler kismina donmemizi saglayan oku yukari tasidim */}
        </div>
    )
  }
}
/*
Go to Home Page yerine ok isareti koydum
<Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Go to Home Page</Link>

<Link to="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
  <FaArrowLeft style={{ marginRight: '8px' }} /> Go to Home Page
</Link>

*/