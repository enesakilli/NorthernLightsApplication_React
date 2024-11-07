import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './CategoryList.css';

const CategoryList = ({ info, currentCategory, changeCategory }) => {
  const [categories, setCategories] = useState([]); // state'i useState ile tanımladık

  useEffect(() => { 
    getCategories(); // componentDidMount fonksiyonu yerine useEffect kullanıyoruz
  }, []); // boş array vererek componentDidMount gibi sadece bir kez çalıştırılmasını sağlıyoruz

  const getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => setCategories(data)); // categories'i güncelledik
  };

  return (
    <div className="categoryContainer">
      <h4>{info.title}</h4> {/* app.js de title(veya verdigimiz isim) ne isim verirsek h3 seklinde o gozukur */}
      <ListGroup>
        { // ListGroup u eleman sayisi kadar calistiracagiz
          categories.map(category => ( // Array old icin Map kullandık, map bir dongudur, eleman sayisi kadar tek tek doner, burada category eleman sayisidir
            // this.state.categories.map is not a function --> map bir array degilse bu hata alinir
            <ListGroupItem 
              style={{
                backgroundColor: category.categoryName === currentCategory ? '#921A40' : 'transparent', 
                color: category.categoryName === currentCategory ? '#fff' : 'inherit', 
                fontWeight: 'bold'
              }} // active sectigimiz kategorinin mavi olmasını saglar, === hem deger hem tip karsilastirmasi sart koyuyoruz
              onClick={() => changeCategory(category)} // esitse ?true : degilse false donecek, active = {true} default olarak true
              key={category.id}> 
              {category.categoryName}
            </ListGroupItem> // Her elemani digerinden ayiracak key(id) olusturduk
          ))}
      </ListGroup>
      {/* <h4>{this.props.currentCategory}</h4> kategoride altta secilen kategoriyi gosteriyor, yoruma alma --> ctrl k + elini cek sonra ctrl c */} 
    </div>
  );
};

export default CategoryList;


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