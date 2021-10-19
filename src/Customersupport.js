import React from "react";
import './Customersupport.css';

function Customersupport(){
    return (
       <div className="container-fluid">
         <div className="headdiv">
          <h1 className="customerhead">Customer Support</h1>
         </div>
  <div class="float-container">
  <div class="float-child">
   <h1 className="helpcus">How can we help?</h1>
  <p className="helpdes">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Fusce lacinia ornare eros, nec ornare neque. Aliquam a erat tellus. 
    Praesent in quam sed purus rhoncus scelerisque. Sed ac nunc lorem. 
    Sed fermentum pretium scelerisque. In bibendum hendrerit sem, id fermentum 
    turpis semper eget. Etiam ut nisl sed sem luctus dignissim. Ut consequat 
    odio consequat, vulputate libero in, tempor nisl. Phasellus fermentum venenatis
     est, nec mollis mauris aliquet quis. Proin hendrerit interdum urna, finibus 
     scelerisque sapien rhoncus et. Maecenas ut rhoncus turpis. Phasellus ac pretium purus.
  </p>
  </div>
  <div class="float-child">
    <div>
      <img class="customersuppimg" src="/images/customerimg.jpg"></img>
    </div>
  </div>
  
</div>
       </div>
      );
};
 
export default Customersupport;