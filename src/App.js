import React, { Component } from 'react'
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap';
import alertify from 'alertifyjs';
import { Routes, Route } from 'react-router-dom'; // Switch decleration artik Routes olarak geciyor 
import NotFound from './NotFound';
import CartList from './CartList';
import FormDemo2 from './FormDemo2';
import FormDemo1 from './FormDemo1';
import Login from './Login';
import Register from './Register';
import Home from './Home';
export default class App extends Component { // Class component yaptık
  
  state = { currentCategory: "",products:[], cart:[] };

  componentDidMount() { // component yerlesti
    this.getProducts(); // getProducts ile kategorileri doldurdum
  }  

  changeCategory = category => { // ()=> Arrow function bu bir fonksiyondur diyoruz, this ifadesi kullanırken sıkıntı olmaz  
    this.setState({currentCategory: category.categoryName}); // this.setState ile tıklayınca currenti category name yaptı 
    // console.log(category); // f12 ile konsoldan category bilgisi geliyor mu diye kontrol ettim, categoryId ile degil id ile geldigini gordum 
    this.getProducts(category.id); // kategoride de getProductu calistirmam lazim, bu nedenle bunu yazdim
  }; // changeCategoryi app.js e tasidim cunku componentler arasi aktarim yapmamiz lazim
  
  getProducts = categoryId => { // seoUrl --> kategorilerdeki yonlendirme icin kullaniyorum
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId; // localhost:3000/products?categoryId=1 mesela bu categoryIdsi 1 olanlari gösterir 
    }
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({products: data}));
  };

  addToCart = (product) => { // Karta ekleme App.js uzerinden yapiliyor, CartSummarye propslar araciligi ile gonderiyoruz
    let newCart = this.state.cart; // buradaki cart i newCart a attim
    var addedItem = newCart.find(c=>c.product.id === product.id); // Urun daha once eklenmis mi diye kontrol ediyoruz find fonksiyonu ile 
    if(addedItem){
      addedItem.quantity+=1; // Eleman varsa sayiyi 1 artiriyoruz
    }
    else{
      newCart.push({product:product,quantity:1}); // eger eleman yoksa Push ile arraye eleman ekliyorum    
    }

    this.setState({cart:newCart}); // Sepetimizi, yeni sepet olarak guncelliyoruz, Bir urunu birden fazla eklersek ayri ayri eklemek yerine mevcut sayiyi artiracak

    alertify.success(product.productName + " added to cart", 2); // Urun eklenince yesil bir bildirim geliyor, parametre olarak 2 saniye verdim
  }

  removeFromCart = (product) => { // Bunu App.js uzerinden naviye yolluyoruz degeri ile birlikte, oradan da Navi.jsdeki CartSummarye yolluyoruz, ve boylece CartSummary.js den islemleri yapabiliyoruz, Ustten 2 alta yolladık DRILLING  
    let newCart = this.state.cart.filter(c=>c.product.id!==product.id) // Arraylerdeki filter fonksiyonu arraydaki elemanlari verdigimiz sarta gore filtreliyor
    this.setState({cart:newCart}) // Sepeti guncelliyoruz
    alertify.error(product.productName + " removed from cart", 2);
  } // sepetteki her bir eleman icin cartitem --> c --> her bir elemanin product idsi ile karsilastiriyorum 

  render() {
    let productInfo = {title: "Products"}; // Yeni bir sey ekledigimizde tek tek her yere eklemek yerine, mesela somethingElse:"something" gibi
    let categoryInfo = { title: " Categories" };// Virgul koyar yanina yazarim sonra digeri gibi islemini yaparim, Burada Encapsulation yapmıs oldum
    return ( 
      <div>
        <Container>
            <Navi removeFromCart = {this.removeFromCart} cart={this.state.cart}></Navi> {/* Row icerisinde oldugundan sol tarafta cikiyordu, Rowu sildim ama duzelmedi, style={{ position: 'absolute', right: '5px'}} */} 
          <Row>
            <Col xs="3">
              <CategoryList 
              currentCategory={this.state.currentCategory} 
              changeCategory={this.changeCategory} 
              info={categoryInfo}>
              </CategoryList>
            </Col>
            <Col xs="9">
              <Routes> {/* Switch artik Routes oldu, boyle kullanmamiz gerekli, sirasiyla rootlari gezmeyi saglar */}
               <Route exact path="/products" element = { // render artik kullanilmiyor update geldi
                  <ProductList // Ana sayfada ProductList olsun istiyorum ama ProductListte gondermem gereken cok fazla sey var bu nedenle RENDER kullaniyorum 
                    // {...props} veya {...this.props} proplarin bir tane kopyasini al onu gonder demek
                    products={this.state.products}
                    addToCart={this.addToCart} 
                    currentCategory={this.state.currentCategory} 
                    info={productInfo}>
                  </ProductList>      
                }></Route>  {/* / bos hali ana sayfa, Switch Routes degisim oncesi <Route exact path="/" component={<NotFound}/> */}
                <Route exact path='/cart' element = { 
                  <CartList 
                    // {...this.props}
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart}>
                  </CartList>}>  
                </Route>  
                {/* <Route path='/form1' Component={FormDemo1}></Route> */}
                <Route path='/form2' Component={FormDemo2}></Route>
                <Route path='/' Component={Home}></Route>
                <Route path='/login' Component={Login}></Route>
                <Route path='/register' Component={Register}></Route>
                <Route path="*" element={<NotFound />} /> {/* <Route element={<NotFound/>}></Route> */}  
              </Routes> 
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
// <Route path='form1' Component={FormDemo1}></Route>
// <Route path='form1' element={<FormDemo1 />} />

// Comment --> CTRL K + CTRL C 
// Uncomment --> CTRL K + CTRL U

// <Button color="info">
// <Button style={{ backgroundColor: '#17a2b8', color: '#fff' }}>