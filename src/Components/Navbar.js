import React, { Component } from 'react';
import './customer.css';



let Navbar=()=>{
  return(
    <div >
      <nav className='navbar'>
        <ul style={{paddingTop:'10px'}}>
          <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEUAAADtAAD4AADyAAD1AADzAADsAACEAADkAADdAACcAACtAAC7AADaAADmAAC0AADSAABlAABKAACjAAAhAAA7AAC/AACKAADLAABaAACPAAApAABgAAB3AAA0AACVAABHAAAvAAB7AAAUAABBAAAcAABwAABSAAElAADNAAAMAABqAAAZAAFQAABV3VyfAAADZElEQVR4nO3d2VLbQBCFYSR5AcwWIGwOmJ0Ekvd/vVwkRWjPkSxNGreOfL5LKKpaNWDNL8lma0tERERERERERERERERERERERERERETkU02ryZKi/Bo9lKuDYll1Fj2Tq+tRcoTlcfRQrvbTJTyKnsnVtzJdwi/RQ7n6USVHuBM9k6vjdAlH19FDuTpLl/AgeiZXN2AJz6OHcnWYLmERPZOrp/RcOF5ED+XqJF3CKnomX+AAT6JncrUYp68zT9FDuZqkS3gYPZOrKdhzDyubttMlHFY2PYMl/BU9lCtlEz1lEz1lE73BZ9MDyKbd6KFcgWwaR8/kC2TTLHomVwuwYTuNHsoVyKa96JlcbWQ2XUTP5ErZRE/ZRO8W7Lnvo4dyNfhsulM2sduAbAK3KqJn8qVsoqdsoreR2fQSPZSrwWfTJdiwDSubLpRN7JRN9JRN9JRN9K7Ahu179FCulE30lE39cFpWy8qWZ7Q0m4peZtMs97lzkE3l2ycPmwXtLK/a/CDP3abMOnjkyabMUfeIsimr0qmyCV1pWfmSAV6gepxNGVfLXrmyKePUjbLpdT3TZum+/WLLps5baJRN83VNm6VrBvFlE7oD2JCyaM0f1zdtlm5/V4zZBB5grr+khF57L9c4bJZOlwVZssnqsEehySarwz6T9W5T64giyiYL3SaDb8oC2TRZ97B5Wjb7PPeaQLyWT/lmX9fpgVYRRZZNVquI2iXLJqvNZowtm6wWEcWXTdbqKOLLJgt9aId5jPKeMJusVX9lO+n3e59N1op3gb4xZpP1s/lsd5R8t9iPGzZP4/MxLzmXjvum8R31IJu2I4fN0xBRKJumocNmafhkC95ssmojijibrNqIYs4mqyaiqLPJqnnLMnc2WfjTupIvUmWThSJqfk6eTRZIpBlYWKpsskBEgc0cWTZZ4HjSYybLJgtEVLqEZNlkgYhK0GWThSLKGj1Hz/h/QEQtIcwmC0SUXUKKu01NQEQZlNlkgYj6uISU2WSBiPqANJss8DjCu/EgPr0aRNS/X9KH6OlcpP8p5v13lDabLBBRf5V30bM5qV3CwXx6NYioP0t4Gz2ZG3xK5M4mC0cUdzZZOKLIs8lCEcWeTdZNmertG2NEREREREREREREREREREREREREREQG5Dc76yo7Vm+gKwAAAABJRU5ErkJggg==" width="40px" height={40}></img></li>
            <li><a href="/">Home</a></li>
           
            <li><a href="/About">About us</a></li>
            <li><a href="/RaiseAticket">RaiseATicket</a></li>
            <li><a href="/ServiceRequest">ServiceRequest</a></li>
            <li><a href="/FAQ">FAQ's</a></li>
            <li><a href="/Login">Login</a></li>
            <li><a href="/Signup">Sign Up</a></li>
            <li></li>
            <form>
              <input type='text' placeholder="search .."/>
              <button type='submit'>
              <img src="https://th.bing.com/th?id=OIP._G-GbsPXR9nc96Nvy5NpqwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" width="30px" height={30}/>
              </button></form>
            <h3 style={{marginLeft:'180px',color:"red"}}>Welcome!  <img src="https://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png" width="35px" height="35px"/></h3>
           
        </ul>

      </nav>
    </div>
  )
}

export default Navbar;


// export default class Navbar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchText: ''
//     };
//   }

//   handleSearchChange = (event) => {
//     this.setState({ searchText: event.target.value });
//   }

//   handleSearchSubmit = (event) => {
//     event.preventDefault();

//     console.log('Searching for:', this.state.searchText);
//   }

//   render() {
//     return (
//       <div>
        
//         <nav className="home-nav bg-secondary">
//         <nav style={{ display: 'flex', flexDirection: 'row',}}>
//           <ul id="home-link" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', padding: 0 }}>
//             <li style={{ marginRight: '10px'}}>
//               <a href="/" onClick={this.handleAboutClick}><b>Home</b></a>
//             </li>
//             <li style={{ marginRight: '10px' }}>
//               <a className='btn-btn-primary' href="/about"><b>Aboutus</b></a>
//             </li>
//             <li style={{ marginRight: '10px' }}>
//               <a href="/raiseaticket"><b>RaiseATicket</b></a>
//             </li>
//             <li style={{ marginRight: '10px' }}>
//               <a href="/ServiceRequest"><b>ServiceRequest</b></a>
//             </li>
//             <li style={{ marginRight: '10px' }}>
//               <a href="/faq"><b>FAQ</b></a>
//             </li>
//             <li>
//             <form onSubmit={this.handleSearchSubmit} style={{ display: 'flex', alignItems: 'center' }}>
//                 <input type="text" placeholder="Search" value={this.state.searchText} onChange={this.handleSearchChange} />
//                 <button type="submit">Search</button>
//               </form>
//             </li>
//           </ul>
//           </nav>
//         </nav>
        
//       </div>
      
//     )
//   }
// }
