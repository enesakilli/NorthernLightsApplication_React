// import React, { Component } from 'react'

// export default class FormDemo1 extends Component {
  
//     state = {userName:'', city:''}
    
//     onChangeHandler = (event) => { // onChange metin degisikligini kontrol eder
//         // this.setState({userName:event.target.value}) // setStateyi set ediyorum
//         let name = event.target.name;
//         let value = event.target.value;

//         this.setState({[name]:value}) // name event e sebep olan nesnedir, inputlara ekledim --> userName ve city icin ayri ayri yoksa cityi yazinca userName degisiyor 
//     }

//     onSubmitHandler = (event) => {
//         event.preventDefault(); // Sayfa yenileme engelleme
//         alert(this.state.userName);
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.onSubmitHandler}> 
//                     <h3>User Name</h3> {/* Ekledigin username ve city gibi seyleri stateye eklemeyi unutma */} 
//                     <input // Statedeki userNameyi inputa bagliyorum 
//                     name="userName" // Buradaki name e statede ne isim verdiysen onu vermek zorundasin
//                     onChange={this.onChangeHandler} 
//                     type="text"></input> 
//                     <h3>User Name is {this.state.userName}</h3>
                    
//                     <h3>City</h3>
//                     <input name="city" onChange={this.onChangeHandler} type="text"></input> {/* Statedeki userNameyi inputa bagliyorum */} 
//                     <h3>City is {this.state.city}</h3>
                    
//                     <input type="submit" value="Save"></input>
//                 </form>                    
//             </div>
//         )
//     }
// }
