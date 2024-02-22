import React, { Component } from 'react';
import ImageComponent from './ImageComponent';

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/globe-technology-business-with-gradient-wallpaper_53876-97642.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=ais")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',height:'600px' }}>
        {/* <ImageComponent/> */}
        <div className="row">
          <div className="col-md-8 offset-md-2 mt-5 pt-5">
            <h2 className="text-center">Welcome to Verizon Telecommunication</h2>
            <p>Verizon Communications Inc. is a multinational telecommunications conglomerate based in the United States.</p>
            <p>It is one of the largest telecommunications companies in the world, providing a wide range of products and services including wireless communications, wireline communications, broadband, digital television, and more.</p>
          </div>
        </div>
      </div>
    );
  }
}
