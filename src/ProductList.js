import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import "./ProductList.css";
export default class ProductList extends Component {

  render() {
    return (
      <div className="productContainer">
        <h4 id="h4">
          {this.props.info.title} - {this.props.currentCategory} {/* Products-Category, Kategori secinde belirtiyor */}
        </h4>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price (₺)</th>
              <th>Units in Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => ( // ListGroup u eleman sayisi kadar calistiracagiz  
                // Array old icin Map kullandık, map bir dongudur, eleman sayisi kadar tek tek doner, burada category eleman sayisidir
                // this.state.categories.map is not a function --> map bir array degilse bu hata alinir
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitsInStock}</td>
                   <td><Button onClick = {()=> this.props.addToCart(product)} style={{ backgroundColor: '#667BC6', color: '#fff', border: '1px solid #667BC6', borderRadius: '5px' }}>Add to Cart</Button></td> {/* Her bir urun icin ekleme butonu koydum, reactstrapten aldigim icin import ettim */}
                </tr> // Her elemani digerinden ayiracak key(id) olusturduk
                )
              )
            }
          </tbody>
        </Table>
      </div>
    );
  }
}
