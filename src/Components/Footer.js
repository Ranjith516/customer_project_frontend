import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
      
      <div style={para}>
        <p >
        {/* <footer className="footer"> */}
      <p>&copy; VerizonTelecommunication. All rights reserved.
      <br></br>Perungudi Main Street,Chennai Tamilnadu, India
      <br></br>Phone: 9878909878 | Email: VerizonTelecommunication@gmail.com</p>
    {/* </footer> */}
        
        
          For more information, visit <a href="https://www.verizon.com/">Verizon's website</a>.
        </p>
        </div>
      </div>
    </footer>
  );
}

// Styles
const footerStyle = {
    backgroundColor: 'black',

    color: '#333',
    padding: '0px 0',
    textAlign: 'center',
    // position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
};

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
};
 const para={
  color: 'white',
 }

export default Footer;
