import React from "react";
import { Table, Button } from "reactstrap";
import "./ProductList.css";

const ProductList = (props) => {
  return (
    <div className="productContainer">
      <h4 id="h4">
        {props.info.title} - {props.currentCategory} {/* Products-Category, Kategori secinde belirtiyor */}
      </h4>
      <Table>
        <thead>
          <tr>
            <th className='thProducts'>#</th>
            <th className='thProducts'>Product Name</th>
            <th className='thProducts'>Unit Price (₺)</th>
            <th className='thProducts'>Units in Stock</th>
            <th className='thProducts'></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map(product => ( // ListGroup u eleman sayisi kadar calistiracagiz  
              // Array old icin Map kullandık, map bir dongudur, eleman sayisi kadar tek tek doner, burada category eleman sayisidir
              // this.state.categories.map is not a function --> map bir array degilse bu hata alinir
              <tr key={product.id}> {/* React/JS zorunlu tutuyor keyi */}
                <th className='tdProducts' scope="row">{product.id}</th>
                <td className='tdProducts'>{product.productName}</td>
                <td className='tdProducts'>{product.unitPrice}</td>
                <td className='tdProducts'>{product.unitsInStock}</td>
                <td><Button id="productListButton" onClick={() => props.addToCart(product)}>Add to Cart</Button></td> {/* Her bir urun icin ekleme butonu koydum, reactstrapten aldigim icin import ettim */}
              </tr> // Her elemani digerinden ayiracak key(id) olusturduk
            )
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default ProductList;
