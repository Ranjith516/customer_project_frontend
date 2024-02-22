// ImageComponent.js

import React from 'react';

const ImageComponent = () => {
  return (

    <div style={{backgroundColor:'black'}}>
      <h1 style={{color:'white',fontSize:'bold',textAlign:'center',marginLeft:'40px',marginTop:'10px'}}>Verizon Telecommunication Customer Support</h1>
      <h4 style={{color:'red',fontSize:'light',textAlign:'center',marginLeft:'40px'}}>"we are here to help and solve your issues!"</h4>
    <img
      src="https://th.bing.com/th/id/OIP.Vh7xg3kcPmJv8JOd538jNAAAAA?w=238&h=180&c=7&r=0&o=5&pid=1.7"
      alt="Telecommunication page Image" width={400} height={700}
      // style={{ maxWidth: '100%', maxHeight: '100%' }}
    />
    </div>
  );
};

export default ImageComponent;
