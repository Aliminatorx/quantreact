import React from 'react';
import emailjs from "emailjs-com";
import './Contact.css';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_uif0c88', 'template_7urz8n9', e.target, 'user_1d1KlCRa2GYL5HO1i8KAN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (  
        <div className="formcs">
        <div>
        <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input id="input" type="text" className="form-control" placeholder="Name" name="name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input id="input" type="email" className="form-control" placeholder="Email" name="email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input id="input" type="text" className="form-control" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input id="input" type="tel" className="form-control" placeholder="Contact No" name="contact"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea id="input" className="form-control" cols="30" rows="8" placeholder="Type Message" name="message"></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <input  id="sendbtn" type="submit" className="btn btn-outline-light" value="Make Appointment"></input>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
}

export default Contact;