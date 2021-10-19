import React from "react";
import ReactPlayer from 'react-player';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Contact from "./Components/Contact/Contact";
import telephone from "./icons/telephone.png";
import {useHistory} from "react-router-dom";

function Home(){
  let history = useHistory();

  const talkwithus = () => {
    history.push('/customersupport')
  }
  const highlights = () =>{
    history.push('/aboutus')
  }

    return (  
<div>
  <div className="container1">
   <img id="truckbg" src="./images/truck.jpg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="truckbackground"/>
   <h1 className="qhead">Quantum Dispatch Services</h1>
   <button id="qbtn" className="btn btn-primary" onClick={talkwithus}><i className="fa fa-phone"></i> Talk with us</button>
  </div>
  
  <div className="float-container1">
<div className="float-child1">
  <h1 className="highhead">Independent Truck Dispatch Services For Owner Operators</h1>
  <p className="highdes"><b>Quantum Dispatch</b> is a <b>truck dispatch company</b> that provides top-notch <b>dispatch services</b> for owner-operators
    and small trucking companies. We help find the best freight load possible with the highest prices 
    and focus on keeping you loaded on a weekly basis. Our team of 40+ <b>truck dispatchers</b> have been in businesses 
    for over 9 years and know the roads in and out.
  </p>
  <button id="highbtn" className="btn btn-primary" onClick={highlights}>Learn More</button>
</div>
<div className="videohigh">
  <ReactPlayer className="video1" controls = {true} url= 'images/quantvideo.mp4'/>
</div>
</div>

<div className="service">
<h1 className="servicehead">When you hire us, you hire EXPERT NEGOTIATORS!</h1>
</div>
<div class="servicesrow">
  <div class="cards">
  <div class="card">
  <div class="card-body">
  <h5 class="card-title">Service</h5>
  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel purus augue. Aliquam metus nibh.</p>
  <a href="./services" id="cardbtn" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>

  <div class="cards" >
  <div class="card">
  <div class="card-body">
  <h5 class="card-title">Service</h5>
  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel purus augue. Aliquam metus nibh.</p>
  <a href="./services" id="cardbtn" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>
  
  <div class="cards" >
  <div class="card">
  <div class="card-body">
  <h5 class="card-title">Service</h5>
  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel purus augue. Aliquam metus nibh.</p>
  <a href="./services" id="cardbtn" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

  </div>

  <div class="cards" >
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">Service</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel purus augue. Aliquam metus nibh.</p>
    <a href="./services" id="cardbtn" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>

  <div class="cards" >
  <div class="card" >
  <div class="card-body">
  <h5 class="card-title">Service</h5>
  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel purus augue. Aliquam metus nibh.</p>
  <a href="./services" id="cardbtn" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>
  
  <div class="cards" >
  <div class="card">
  <div class="card-body">
  <h5 class="card-title">Service</h5>
  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel purus augue. Aliquam metus nibh.</p>
  <a href="./services" id="cardbtn" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>
</div>

<div className="float-container2">
  <div className="float-child2">
  <h1 className="hirehead">Why Hire Us?</h1>
  <p className="hiredes"> We offer professional virtual Truck Dispatching services.
        In our crew, we have <br/> qualified staff and managers who can
        provide you full dedicated services remotely.</p>

  <a className="subhead" href="/services"><i id="ic" className="fa fa-rocket"></i> Quick Services</a>
  <p className="subdes">Our service turnaround time is quick.
    We make sure that we meet<br/> the deadlines.</p>

  <a className="subhead" href="/blog"><i id="ic" className="fa fa-users"></i> Dedicated Team</a>
  <p className="subdes">In our crew, we have dedicated team comprised of professional<br/>
      qualified dispatchers and customer services.</p>

  <a className="subhead" href="/customersupport"><i id="ic" className="fa fa-phone"></i> Instant Support</a>
  <p className="subdes">We do not leave our valued clients in space. 
    We provide instant<br/> technical and professional virtual bookkeeping 
    service support to<br/> ensure long-term business relationships. </p>

  </div>

  <div className="float-form">
    <div className="contactform">
    <h1 className="formhead">Let's Talk</h1>
    <p className="formdes">Thank you for reaching out and considering our virtual dispatching services.
     Kindly, fill the following form. We’ll contact you asap.</p>
      <Contact />
    </div>
  </div>

</div>

<div className="lastcall">
  <img className="lastic" src={telephone}/>
  <h1 className="lasthead">We are ready to take your call 24/7</h1>
  <a className="lastno" href="#">Call Now: +X XXX-XXX-XXXX</a>

</div>
  </div>
      );
}
 
export default Home;