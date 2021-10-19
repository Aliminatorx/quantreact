import React from "react";
import './Aboutus.css';
import Cardscroll from "./Components/Card Scroll/Cardscroll";

function Aboutus(){
    return (
       <div className="container-fluid">
           <div className="headdiv">
           <h1 className="aboutushead">About Us</h1>
           </div> 
        <div className="float-container3">
        
        <div className="float-child3">
        <img className="aboutusimg" src="./images/peterbilt.png"></img>
        <img className="aboutusimg2" src="./images/peterbilt2.png"></img>
        </div>

        <div className="float-about">
        <p className="aboutdes"><b>Quantum Dispatch</b> is a <b>“Full Service”</b> truck dispatching company that handles all of the back-office work so you can compete with the large fleets. Typically, a large carrier would hire somebody to handle all of these tasks, 
            but it is unaffordable for a small carrier, that’s where Quantum Dispatch comes in to help! Our process is simple, your dedicated truck dispatcher will work with you by your rules. We develop the best lanes that suit your desired schedule, 
            whether you want to be home every night, every other night, or once every 2 weeks, our freight dispatchers work with you to develop a lane that will achieve your target goals.<br/><b>•	We Negotiate Hard For Best Paying Rates<br/>
•	We Talk To Brokers<br/>
•	We Handle All Your Broker Setup Packets<br/>
•	We Handle Lumper/Detention<br/>
•	Dedicated Dispatcher<br/>
•	You Pick The Areas You Want To Drive<br/>
•	Best Truck Dispatch Company On Your Side</b></p>
        </div>
        </div>
       <div>
           <Cardscroll />
       </div>
        
       </div>
      );
};
 
export default Aboutus;