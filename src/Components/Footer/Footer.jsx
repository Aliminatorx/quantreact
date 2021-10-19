import React from "react";
import "./footstyles.css"
const Footer = () => {
    return ( 
        <div class="d-flex flex-column h-100">
    <section class="hero text-white py-5 flex-grow-1">

    </section>
    <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                    <h5 id="foothead" class="h1 text-white">QUANTUM DISPATCH</h5>
                    <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary" href="/">Quantdispatch.com</a></p>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Quick links</h5>
                    <ul id="footerlinks" class="list-unstyled text-muted">
                        <li><a href="/">Home</a></li>
                        <li><a href="/customersupport">Customer Support</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/aboutus">About Us</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3">Newsletter</h5>
                    <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

                </div>
            </div>
        </div>
    </footer>
</div>
     );
}
 
export default Footer;