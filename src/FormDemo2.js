import React, { Component } from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import alertify from 'alertifyjs';

export default class FormDemo2 extends Component {
  
  state = {email:'', password:'', gender:'', city:'', description:''}

  handleChange = event => { // event parantez icine alinmasa da olur
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]: value}); 
  }

  handleSubmit = event => {
    event.preventDefault(); // Sayfa yenileme engelleme
    alertify.success(this.state.email + " added to database", 3);
    alertify.success(this.state.password + " added to database", 3);
    alertify.success(this.state.gender + " added to database", 3);
    alertify.success(this.state.city + " added to database", 3);
    alertify.success(this.state.description + " added to database", 3);
  }

    render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label for="email">Email</Label> {/* label htmlden gelir, Label reactstrapten gelir */}
                <Input 
                    type="email" 
                    name="email" 
                    id="name" 
                    placeholder="Enter email" 
                    onChange={this.handleChange}>
                </Input> {/* Buradaki name e statede ne isim verdiysen onu vermek zorundasin */}  
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label> 
                <Input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Enter password" 
                    onChange={this.handleChange}>
                </Input> 
            </FormGroup>
            <FormGroup>
                <Label for="gender">Gender</Label> 
                <Input type="select" name="gender" id="gender" onChange={this.handleChange}>
                  <option>Male</option>
                  <option>Female</option>
                </Input>
              </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label> 
                <Input 
                    type="textarea" // Daha buyuk bir alan verdik 
                    name="description" 
                    id="description" 
                    placeholder="Enter description" 
                    onChange={this.handleChange}>
                </Input> 
            </FormGroup>
            <FormGroup>
                <Label for="city">City</Label> 
                <Input type="select" name="city" id="city" onChange={this.handleChange}>
                  <option>Adana</option>
                  <option>Adiyaman</option>
                  <option>Afyonkarahisar</option>
                  <option>Agri</option>
                  <option>Aksaray</option>
                  <option>Amasya</option>
                  <option>Ankara</option>
                  <option>Antalya</option>
                  <option>Ardahan</option>
                  <option>Artvin</option>
                  <option>Aydin</option>
                  <option>Balikesir</option>
                  <option>Bartin</option>
                  <option>Batman</option>
                  <option>Bayburt</option>
                  <option>Bilecik</option>
                  <option>Bingol</option>
                  <option>Bitlis</option>
                  <option>Bolu</option>
                  <option>Burdur</option>
                  <option>Bursa</option>
                  <option>Canakkale</option>
                  <option>Cankiri</option>
                  <option>Corum</option>
                  <option>Denizli</option>
                  <option>Diyarbakir</option>
                  <option>Duzce</option>
                  <option>Edirne</option>
                  <option>Elazig</option>
                  <option>Erzincan</option>
                  <option>Erzurum</option>
                  <option>Eskisehir</option>
                  <option>Gaziantep</option>
                  <option>Giresun</option>
                  <option>Gumushane</option>
                  <option>Hakkari</option>
                  <option>Hatay</option>
                  <option>Igdir</option>
                  <option>Isparta</option>
                  <option>Istanbul</option>
                  <option>Izmir</option>
                  <option>Kahramanmaras</option>
                  <option>Karabuk</option>
                  <option>Karaman</option>
                  <option>Kars</option>
                  <option>Kastamonu</option>
                  <option>Kayseri</option>
                  <option>Kirikkale</option>
                  <option>Kirklareli</option>
                  <option>Kirsehir</option>
                  <option>Kilis</option>
                  <option>Kocaeli</option>
                  <option>Konya</option>
                  <option>Kutahya</option>
                  <option>Malatya</option>
                  <option>Manisa</option>
                  <option>Mardin</option>
                  <option>Mersin</option>
                  <option>Mugla</option>
                  <option>Mus</option>
                  <option>Nevsehir</option>
                  <option>Nigde</option>
                  <option>Ordu</option>
                  <option>Osmaniye</option>
                  <option>Rize</option>
                  <option>Sakarya</option>
                  <option>Samsun</option>
                  <option>Sanliurfa</option>
                  <option>Siirt</option>
                  <option>Sinop</option>
                  <option>Sivas</option>
                  <option>Sirnak</option>
                  <option>Tekirdag</option>
                  <option>Tokat</option>
                  <option>Trabzon</option>
                  <option>Tunceli</option>
                  <option>Usak</option>
                  <option>Van</option>
                  <option>Yalova</option>
                  <option>Yozgat</option>
                  <option>Zonguldak</option>
                </Input>
            </FormGroup>
            <Button type="submit" color="info">Save</Button>
        </Form>
      </div>
    )
  }
}