import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavItem,
    NavLink,
  } from "reactstrap";

export default class CartSummary extends Component {

    renderSummary(){
        
    return(<UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ fontWeight: 'bold', color: 'black' }}>
                    Cart
                </DropdownToggle> {/* Sepette hangi urunden kacar adet oldugunu gosterir, yanina sayi yazmak icin Your Cart - {this.props.cart.length} */}
                <DropdownMenu right>
                {
                    this.props.cart.map(cartItem => (
                    <DropdownItem key = {cartItem.product.id}>
                        <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>X</Badge> {/* Eklenen urunleri silmemizi saglar */}
                        {cartItem.product.productName}
                        <span style={{ marginLeft: '10px', color: 'grey' }}>- Quantity: {cartItem.quantity}</span> {/* Eklenen urunlerin kac adet oldugunu gosteriyor */} 
                    </DropdownItem>    
                    )) // Sepete eklenen urunlerin isimlerini gosteriyor
                }
                <DropdownItem divider />
                <DropdownItem>
                <Link to="cart"> {/* react-router-domdan gelir, cart routesine git demek */}
                    <button type="button" style={{ width: '100%', color: '#fff', backgroundColor: '#667BC6', border: '1px solid #667BC6', borderRadius: '5px'}}> {/* className="btn btn-info" */}
                        Go to Cart
                    </button>
                </Link> 
                </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>)
    }

    renderEmptyCart(){
        return( // Bir sey dondurmek icin return ile yazdim, JSX formatinda
            <NavItem>
                <NavLink style={{ fontWeight: 'bold', color: 'black' }}>Cart is Empty</NavLink>
            </NavItem>  
        )
    }
    
    render() {
        return <div> {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()} </div>; 
    } // Sepet bossa cart gozukmuyor, sepete urun ekleyince gozukuyor
}
/*
<Link to="cart">
    <button type="button" className="btn btn-primary">
        Go to Cart
    </button>
</Link>

<Link to = "cart">Go to Cart</Link>

<Badge color="success">{cartItem.quantity}</Badge> // Eklenen urunlerin kac adet oldugunu gosteriyor 

*/