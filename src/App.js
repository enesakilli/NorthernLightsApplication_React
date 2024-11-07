import React, { useState, useEffect } from 'react';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap';
import alertify from 'alertifyjs';
import { Routes, Route } from 'react-router-dom'; // Switch decleration artik Routes olarak geciyor 
import NotFound from './NotFound';
import CartList from './CartList';
import FormDemo2 from './FormDemo2';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import './App.css';

const App = () => { // Function component yaptık
  const [currentCategory, setCurrentCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => { // componentDidMount fonksiyonunu useEffect ile değiştirdik
    getProducts(); // getProducts ile kategorileri doldurdum
  }, []); // empty array => componentDidMount gibi çalışır

  const changeCategory = category => { // changeCategory fonksiyonu ile bir kategori secildiginde, bu kategoriye ait urunlerin cekilmesi saglanıyor 
    setCurrentCategory(category.categoryName); // setState yerine useState kullanıyoruz
    // console.log(category); // f12 ile konsoldan category bilgisi geliyor mu diye kontrol ettim, categoryId ile degil id ile geldigini gordum 
    getProducts(category.id); // getProducts(category.id) fonksiyonu cagirildiginda, secilen kategoriye ait urunler
  }; // changeCategoryi app.js e tasidim cunku componentler arasi aktarim yapmamiz lazim
  
  const getProducts = categoryId => { // seoUrl --> kategorilerdeki yonlendirme icin kullaniyorum
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId; // localhost:3000/products?categoryId=1 mesela bu categoryIdsi 1 olanlari gösterir 
    }
    fetch(url)
    .then(response => response.json())
    .then(data => setProducts(data));
  };

  const addToCart = (product) => { // Karta ekleme App.js uzerinden yapiliyor, CartSummarye propslar araciligi ile gonderiyoruz
    let newCart = [...cart]; // buradaki cart'i newCart'a attım
    var addedItem = newCart.find(c => c.product.id === product.id); // Urun daha once eklenmis mi diye kontrol ediyoruz find fonksiyonu ile 
    if (addedItem) {
      addedItem.quantity += 1; // Eleman varsa sayıyı 1 artırıyoruz
    }
    else {
      newCart.push({ product: product, quantity: 1 }); // eğer eleman yoksa Push ile arraye eleman ekliyorum    
    }

    setCart(newCart); // Sepetimizi, yeni sepet olarak güncelliyoruz, Bir ürünü birden fazla eklersek ayrı ayrı eklemek yerine mevcut sayıyı arttıracak

    alertify.success(product.productName + " added to cart", 2); // Urun eklenince yeşil bir bildirim geliyor, parametre olarak 2 saniye verdim
  };

  const removeFromCart = (product) => { // Bunu App.js üzerinden naviye yolluyoruz değeri ile birlikte, oradan da Navi.js'deki CartSummary'e yolluyoruz, ve böylece CartSummary.js'den işlemleri yapabiliyoruz, Üstten 2 alta yolladık DRILLING  
    let newCart = cart.filter(c => c.product.id !== product.id); // Arraylerdeki filter fonksiyonu arraydaki elemanları verdiğimiz sartla filtreliyor
    setCart(newCart); // Sepeti güncelliyoruz
    alertify.error(product.productName + " removed from cart", 2);
  }; // sepetteki her bir eleman için cartitem --> c --> her bir elemanın product id'si ile karşılaştırıyorum 

  let productInfo = { title: "Products" }; // Yeni bir şey eklediğimizde tek tek her yere eklemek yerine, mesela somethingElse:"something" gibi
  let categoryInfo = { title: "" };// Virgul koyar yanına yazarım sonra diğeri gibi işlemini yaparım, Burada Encapsulation yapmış oldum

  return (
    <div className='App'>
      <Container>
        <Navi removeFromCart={removeFromCart} cart={cart}></Navi> {/* Row içerisinde olduğundan sol tarafta çıkıyordu, Row'u sildim ama düzelmedi, style={{ position: 'absolute', right: '5px'}} */}
        <Row>
          <Col> {/* xs='3' */}
            <Routes>
              <Route exact path="/products" element={
                <CategoryList
                  currentCategory={currentCategory}
                  changeCategory={changeCategory}
                  info={categoryInfo}>
                </CategoryList>}>
              </Route>
            </Routes>
          </Col>
          <Col> {/* xs='9' */}
            <Routes> {/* Switch artık Routes oldu, böyle kullanmamız gerekli, sırasıyla rootları gezmeyi sağlar */}
              <Route exact path="/products" element={ // render artık kullanılmıyor update geldiği için
                <ProductList // products sayfasında ProductList olsun istiyorum ama ProductList'te göndermem gereken çok fazla şey var bu nedenle RENDER kullanıyorum 
                  // {...props} veya {...this.props} prop'ların bir tane kopyasını al onu gönder demek
                  products={products}
                  addToCart={addToCart}
                  currentCategory={currentCategory}
                  info={productInfo}>
                </ProductList>
              }></Route>  {/* / boş hali ana sayfa, Switch Routes değişimi öncesi <Route exact path="/" component={<NotFound}/> */}
              <Route exact path='/cart' element={
                <CartList
                  cart={cart}
                  removeFromCart={removeFromCart}>
                </CartList>}>
              </Route>
              {/* <Route path='/form1' Component={FormDemo1}></Route> */}
              <Route path='/form2' Component={FormDemo2}></Route>
              <Route path='/' Component={Home}></Route>
              <Route path='/login' Component={Login}></Route> {/* Home.js icerisine /login e giden tiklanacak link koyduk, burada da /login URL'sini {Login} sayfasiyla eslestirdik */}
              <Route path='/register' Component={Register}></Route>
              <Route path="*" element={<NotFound />} /> {/* <Route element={<NotFound/>}></Route> */}
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;


// <Route path='form1' Component={FormDemo1}></Route>
// <Route path='form1' element={<FormDemo1 />} />

// Comment --> CTRL K + CTRL C 
// Uncomment --> CTRL K + CTRL U

// <Button color="info">
// <Button style={{ backgroundColor: '#17a2b8', color: '#fff' }}>