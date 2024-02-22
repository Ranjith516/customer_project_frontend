// ImageComponent.js

import React from 'react';
import ImageComponent from './ImageComponent';
import LoginComponent from './LoginComponent';
// import SignUpComponent from './SignupComponent';
import {Link} from 'react-router-dom'

const ButtonComponent = () => {
  return (

    <div style={{  padding:'40px', textAlign: 'center', backgroundColor:'black',height:650,width:550 }}>
          <Link to="/SignUp">
            <button style={{ marginTop: '100px',paddingRight:'190px',paddingLeft:'190px', backgroundColor:'blue' ,color:'white',borderRadius:'25px', height:'70px',width:'90px'}}>SignUp</button>
          </Link>
        <br></br>
          <Link to="/Login">
            <button style={{ width:'50px',margin: '10px',paddingRight:'190px',paddingLeft:'190px',backgroundColor:'blue' ,color:'white',borderRadius:'25px' ,height:'70px',width:'70px' }}>Login</button>
          </Link>
          </div>
  );
};

export default ButtonComponent;
