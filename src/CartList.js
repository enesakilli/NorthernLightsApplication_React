import React from 'react';
import { Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './CartList.css';

const CartList = ({ cart, removeFromCart }) => {

  const renderCart = () => {
    return (
      <Table striped>
        <thead>
          <tr>
            {/* <th>#</th> */}
            {/* <th>Category Id</th> */}
            <th className='thCart'>Product Name</th>
            <th className='thCart'>Unit Price (₺)</th>
            <th className='thCart'>Units in Stock</th>
            <th className='thCart'>Quantity</th>
          </tr>
        </thead>
        <tbody>
          { // Sepet buraya gelecek map uyguluyorum
            cart.map(cartItem => (
              <tr key={cartItem.product.id}>
                {/* <td>{cartItem.product.id}</td> */}
                {/* <td>{cartItem.product.categoryId}</td> */}
                <td className='tdCart'>{cartItem.product.productName}</td>
                <td className='tdCart'>{cartItem.product.unitPrice}</td>
                <td className='tdCart'>{cartItem.product.unitsInStock}</td>
                <td className='tdCart'>{cartItem.quantity}</td>
                <td>
                  <Button id='cartListButton' onClick={() => removeFromCart(cartItem.product)}>
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

  return (
    <div className='cartContainer'>
      <div className='buttonToRight'> {/* Butonu sola hizalamak için marginRight'ı kaldırdık */}
        <Button id='cartToProductsButton'>
          <Link to="/products" id='cartLink'>
            <FaArrowLeft id='arrow' /> Products
          </Link>
        </Button>
      </div>
      {renderCart()} {/* renderCarti burada cagirmamiz gerek, Bunu asagida cagirarak urunler kismina donmemizi saglayan oku yukari tasidim */}
    </div>
  );
}

export default CartList;


/*
Go to Home Page yerine ok isareti koydum
<Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Go to Home Page</Link>

<Link to="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
  <FaArrowLeft style={{ marginRight: '8px' }} /> Go to Home Page
</Link>

*/