import React, { Component } from 'react' // import React from "react";
import CartSummary from "./CartSummary";
import {Link} from 'react-router-dom';
import './Navi.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default class Navi extends Component { // Component --> React.Component
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" style={{ height: '70px' }}> {/* style={{ height: '60px' }} Bu kod ile navbar boyutu ayarladim*/}
          <NavbarBrand className='Navbar'>
            <Link to="/" style={{ fontSize: '28px', fontWeight: 'bold', marginLeft: '10px', textDecoration: 'none', color: 'inherit' }}>NorthernLights</Link>
          </NavbarBrand>
           <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
          <div style={{  display: 'flex', width: '70%', justifyContent: 'space-between', flexWrap: 'nowrap', overflow: 'hidden', margin: '0 auto'}}></div> {/* Bunu yazica saga kaydirdi */}
            <Nav className="me-auto" navbar> 
              {/* <NavItem>
                <NavLink id='Form1'>
                  <Link to="form1" style={{ textDecoration:'none', fontWeight: 'bold', color: 'black'}}>Form 1</Link> 
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink id='Products'> {/* style={{ textDecoration: 'none', color: 'inherit' }} Formun alti cizili ve rengi maviydi onları kaldırmak icin bunları ekledim */}
                  <Link to="products" style={{ textDecoration:'none', fontWeight: 'bold', color: 'black'}}>Products</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id='Form2'> {/* style={{ textDecoration: 'none', color: 'inherit' }} Formun alti cizili ve rengi maviydi onları kaldırmak icin bunları ekledim */}
                  <Link to="form2" style={{ textDecoration:'none', fontWeight: 'bold', color: 'black'}}>Profile</Link>
                </NavLink>
              </NavItem>
               <CartSummary removeFromCart = {this.props.removeFromCart} cart={this.props.cart}></CartSummary> {/* // Carti CartSummarye ekledim */}
            </Nav> {/* Appde propssuz burada props ile yaptik cunku burada removeFromCart diye bir sey yok {this.props.removeFromCart} */}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

/*
<div className="d-flex w-100 justify-content-between"> --> Bunu yazica saga kaydirdi

<div style={{  display: 'flex', width: '75%', justifyContent: 'space-between', flexWrap: 'nowrap', overflow: 'hidden', margin: '0 auto'}}></div> --> Tek satirda saga kaydirdi

style={{ height: '60px' }} -->  Bu kod ile navbar boyutu ayarlanabilir 

<NavbarBrand href="/" style={{ fontSize: '28px', fontWeight: 'bold', marginLeft: '10px' }}>NorthernLights</NavbarBrand>

Ustteki kod yerine bunu Nav olarak kullandim sayfa yenilemesinin onune gecmek icin 
<NavbarBrand><Link to="/" style={{ fontSize: '28px', fontWeight: 'bold', marginLeft: '10px', textDecoration: 'none', color: 'inherit' }}>NorthernLights</Link></NavbarBrand>
*/
