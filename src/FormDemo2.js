import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import alertify from 'alertifyjs';
import './FormDemo2.css';

const FormDemo2 = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    gender: '',
    city: '',
    address: ''
  });

  const handleChange = event => { // event parantez icine alinmasa da olur
    let name = event.target.name;
    let value = event.target.value;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault(); // Sayfa yenileme engelleme
    alertify.success(formData.email + " added to database", 3);
    alertify.success(formData.password + " added to database", 3);
    alertify.success(formData.gender + " added to database", 3);
    alertify.success(formData.city + " added to database", 3);
    alertify.success(formData.address + " added to database", 3);
  };

  return (
    <div className='profileContainer1'>
      <div className='profileContainer2'>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label className='profileLabel' for="email">E-mail</Label> {/* label htmlden gelir, Label reactstrapten gelir */}
            <Input 
                type="email" 
                name="email" 
                id="name" 
                placeholder="Enter email" 
                onChange={handleChange}>
            </Input> {/* Buradaki name e statede ne isim verdiysen onu vermek zorundasin */}  
          </FormGroup>
          <FormGroup>
            <Label className='profileLabel' for="password">Password</Label> 
            <Input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Enter password" 
                onChange={handleChange}>
            </Input> 
          </FormGroup>
          <FormGroup>
            <Label className='profileLabel' for="gender">Gender</Label> 
            <Input type="select" name="gender" id="gender" onChange={handleChange}>
              <option>Male</option>
              <option>Female</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label className='profileLabel' for="city">City</Label> 
            <Input type="select" name="city" id="city" onChange={handleChange}>
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
          <FormGroup>
            <Label className='profileLabel' for="address">Address</Label> 
            <Input 
                type="textarea" // Daha buyuk bir alan verdim
                name="address" 
                id="address" 
                placeholder="Enter your full address" 
                onChange={handleChange}>
            </Input> 
          </FormGroup>
          <Button id='profileButton' type="submit">Save</Button>
        </Form>
      </div>
    </div>
  );
};

export default FormDemo2;
