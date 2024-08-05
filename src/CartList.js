import React, { Component } from 'react'
import {Button, Table} from 'reactstrap'
import { Link } from 'react-router-dom'

export default class CartList extends Component {
  renderCart(){
    return (
      <Table striped>
        <thead>
          <tr>
            {/* <th>#</th> */}
            {/* <th>Category Id</th> */}
            <th>Product Name</th>
            <th>Unit Price (₺)</th>
            <th>Units in Stock</th>
            <th>Quantity</th>
            <th></th> 
          </tr>
        </thead>
        <tbody>
          { // Sepet buraya gelecek map uyguluyorum
            this.props.cart.map(cartItem => (
              <tr key={cartItem.product.id}>
                {/* <td>{cartItem.product.id}</td> */}
                {/* <td>{cartItem.product.categoryId}</td> */}
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.product.unitsInStock}</td>
                <td>{cartItem.quantity}</td>
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
        <div>
          {this.renderCart()} {/* renderCarti burada cagirmamiz gerek */}
            <div style={{ textAlign: 'right', marginTop: '20px'}}> {/* marginRight: '30px' */}
              <Button color="info"> {/* Sepetteyken ana sayfaya dönmek, style={{ backgroundColor: '#3498db', color: '#fff' }}*/}
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Go to Home Page</Link>
              </Button>
            </div>
        </div>
    )
  }
}
