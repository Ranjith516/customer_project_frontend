// import React from 'react';
// import './App.css';
// import AboutUs from './Components/AboutUs'; 
// import { Routes, Route,BrowserRouter as Router, Link } from 'react-router-dom';
// import Home from './Components/Home';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
// import RaiseAticket from './Components/RaiseAticket';

// import FAQ from './Components/FAQ';
// import ServiceRequest from './Components/ServiceRequest';

// import ImageComponent from './Components/ImageComponent';
// import SignupComponent from './Components/SignUpComponent';
// import LoginComponent from './Components/LoginComponent';
// import ButtonComponent from './Components/ButtonComponent';
// import ForgotPassword from './Components/ForgotPassword';
// function App () {
//   return (
//     <div className="App">
//       {/* <Router> */}
//      <div style={{ display: 'flex', alignItems: 'center', height: '900px', backgroundColor:'black' }}>
//         <div className='container'> 
//         <div className='row'>
//           <div className='col-md-6'>
//           <div>
           
//           {/* <ImageComponent /> */}
//         </div>
//           </div>
//           <div className='col-md-6'>
        
        


//           {/* <Routes>
//             <Route path="/" element={<ButtonComponent/>}/>
            
//           <Route path="/SignupComponent" element={<SignupComponent/>} />
//           <Route path="/LoginComponent" element={<LoginComponent/>} />
//           <Route path="/ForgotPassword" element={<ForgotPassword/>} />
//           </Routes> */}
//         </div>
//         </div>
//         </div></div>
        
//         <ImageComponent />
//       <Navbar />
     
//       <Routes>
//       <Route path="/" element={<ButtonComponent/>}/>
            
//             <Route path="/Signup" element={<SignupComponent/>} />
//             <Route path="/Login" element={<LoginComponent/>} />
//             <Route path="/ForgotPassword" element={<ForgotPassword/>} />
//         <Route path='/home' element={<Home />} />
//         <Route path='/about' element={<AboutUs />} />
//         {/* <Route path='/home' element={<Home />} /> */}
//         <Route path='/raiseaticket' element={<RaiseAticket />} />
//         <Route path='/servicerequest' element={<ServiceRequest />} />
//         <Route path='/faq' element={<FAQ />} />    
//       </Routes>
//       {/* </Router> */}
//       <Footer />
//     </div>





    
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ImageComponent from './Components/ImageComponent';
import ButtonComponent from './Components/ButtonComponent';
import LoginComponent from './Components/LoginComponent';
import AboutUs from './Components/AboutUs'; 
import RaiseAticket from './Components/RaiseAticket';
import FAQ from './Components/FAQ';
import ServiceRequest from './Components/ServiceRequest';
import SignupComponent from './Components/SignUpComponent';
import ForgotPassword from './Components/ForgotPassword';

function App() {
  return (
    <div className="App" style={{backgroundColor:'black'}}>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <ImageComponent />
          </div>
          <div className="col-md-6">
            <Routes>
              <Route path="/" element={<ButtonComponent />} />
              <Route path="/Signup" element={<SignupComponent />} />
              <Route path="/Login" element={<LoginComponent />} />
              <Route path="/ForgotPassword" element={<ForgotPassword />} />
              <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/raiseaticket" element={<RaiseAticket />} />
        <Route path="/servicerequest" element={<ServiceRequest />} />
        <Route path="/faq" element={<FAQ />} />
            </Routes>
          </div>
        </div>
        
      </div>
      {/* <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/raiseaticket" element={<RaiseAticket />} />
        <Route path="/servicerequest" element={<ServiceRequest />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      
      </div> */}
      <Footer />
    </div>
   
  );
}

export default App;
