import React, { Component } from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'

export default class CategoryList extends Component {
    /*constructor(props){ // Zorunlu degil direkt this.props.title diyerek kullanabilirim
      super(props);  // extends edilen component
      this.state = { */  
      
      state = {
        categories: []
        // {categoryID:1, categoryName:"Phones"},
        // {categoryID:2, categoryName:"Headphones"}, datayi dbden alacagim icin kaldirdim
      
      }

      componentDidMount() { // component yerlesti
        this.getCategories(); // getCategories ile kategorileri doldurdum
      }  
      
      getCategories = ()=> {
        fetch("http://localhost:3000/categories")
        .then(response => response.json())
        .then(data => this.setState({categories:data}))
      }

  render() {
    return (
      <div>
        <h4>{this.props.info.title}</h4> {/* app.js de title(veya verdigimiz isim) ne isim verirsek h3 seklinde o gozukur */}
        <ListGroup>
          { // ListGroup u eleman sayisi kadar calistiracagiz
              this.state.categories.map(category => ( // Array old icin Map kullandık, map bir dongudur, eleman sayisi kadar tek tek doner, burada category eleman sayisidir
                // this.state.categories.map is not a function --> map bir array degilse bu hata alinir
                <ListGroupItem style={{ backgroundColor: category.categoryName === this.props.currentCategory ? '#17a2b8' : 'transparent', color: category.categoryName === this.props.currentCategory ? '#fff' : 'inherit' }} // active sectigimiz kategorinin mavi olmasını saglar, === hem deger hem tip karsilastirmasi sart koyuyoruz
                onClick={()=>this.props.changeCategory(category)} // esitse ?true : degilse false donecek, active = {true} default olarak true
                key={category.id}> 
                  {category.categoryName}
                </ListGroupItem> // Her elemani digerinden ayiracak key(id) olusturduk
          ))}
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> kategoride altta secilen kategoriyi gosteriyor, yoruma alma --> ctrl k + elini cek sonra ctrl c */} 
      </div>
    )
  }
}
/*
  <ListGroup>
    { // ListGroup u eleman sayisi kadar calistiracagiz
        this.state.categories.map(category => ( // Array old icin Map kullandık, map bir dongudur, eleman sayisi kadar tek tek doner, burada category eleman sayisidir
          // this.state.categories.map is not a function --> map bir array degilse bu hata alinir
          <ListGroupItem active = {category.categoryName === this.props.currentCategory?true:false} // active sectigimiz kategorinin mavi olmasını saglar, === hem deger hem tip karsilastirmasi sart koyuyoruz
          onClick={()=>this.props.changeCategory(category)} // esitse ?true : degilse false donecek, active = {true} default olarak true
          key={category.id}> 
            {category.categoryName}
          </ListGroupItem> // Her elemani digerinden ayiracak key(id) olusturduk
    ))}
  </ListGroup>
  
active = {category.categoryName === this.props.currentCategory?true:false} 
Active yerine bu kodu kullaninca tiklandigindaki rengini degistirebiliyorum
style={{ backgroundColor: category.categoryName === this.props.currentCategory ? '#17a2b8' : 'transparent', color: category.categoryName === this.props.currentCategory ? '#fff' : 'inherit' }}
*/