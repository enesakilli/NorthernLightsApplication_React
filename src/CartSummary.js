import React from 'react';
import { Link } from 'react-router-dom';
import './cartSummary.css';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";

const CartSummary = ({ cart, removeFromCart }) => {

  const renderSummary = () => {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret id='dropDownToggle'>
          Cart
        </DropdownToggle> {/* Sepette hangi urunden kacar adet oldugunu gosterir, yanina sayi yazmak icin Your Cart - {this.props.cart.length} */}
        <DropdownMenu right>
          {
            cart.map(cartItem => (
              <DropdownItem id='cartSummaryItem' key={cartItem.product.id}>
                <Badge id='cartSummarySmallButton' onClick={() => removeFromCart(cartItem.product)}>X</Badge> {/* Eklenen urunleri silmemizi saglar */}
                {cartItem.product.productName}
                <span id='cartSummarySpan'>- Quantity: {cartItem.quantity}</span> {/* Eklenen urunlerin kac adet oldugunu gosteriyor */}
              </DropdownItem>    
            )) // Sepete eklenen urunlerin isimlerini gosteriyor
          }
          <DropdownItem divider />
          <DropdownItem>
            <Link to="cart"> {/* react-router-domdan gelir, cart routesine git demek */}
              <button id='cartSummaryButton' type="button"> {/* className="btn btn-info" */}
                Go to Cart
              </button>
            </Link> 
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };

  const renderEmptyCart = () => {
    return( // Bir sey dondurmek icin return ile yazdim, JSX formatinda
      <NavItem>
        <NavLink id='cartSummaryEmpty'>Cart is Empty</NavLink>
      </NavItem>  
    );
  };

  return <div> {cart.length > 0 ? renderSummary() : renderEmptyCart()} </div>; 
  // Sepet bossa cart gozukmuyor, sepete urun ekleyince cart gozukiyor
};

export default CartSummary;


/*
<Link to="cart">
    <button type="button" className="btn btn-primary">
        Go to Cart
    </button>
</Link>

<Link to = "cart">Go to Cart</Link>

<Badge color="success">{cartItem.quantity}</Badge> // Eklenen urunlerin kac adet oldugunu gosteriyor 

*/