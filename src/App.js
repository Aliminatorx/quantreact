import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Home from "./Home";
import Customersupport from "./Customersupport";
import Services from "./Services";
import Blog from "./Blog";
import Aboutus from "./Aboutus";
import './Components/Footer/Footer';
import {Nav,Navbar,Container,Form,FormControl} from "react-bootstrap";
import {BrowserRouter as Router,Switch,Route,NavLink,useHistory} from "react-router-dom";
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar expand="lg">
        <Container fluid>
        <Navbar.Brand expand="lg" href="/">
       <img id="quantlogo" src="./images/quantimg.jpeg" alt="quantlogo"/>
    </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
            id="navscroll" 
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
            > 
              <div style={{marginRight:'260px'}}></div>
              <NavLink  className="webpage" activeClassName="active_class" exact to="/">Home</NavLink>
              <NavLink className="webpage" activeClassName="active_class" exact to="/customersupport">Customer Support</NavLink>
              <NavLink className="webpage" activeClassName="active_class" exact to="/services">Services</NavLink>
              <NavLink className="webpage" activeClassName="active_class" exact to="/blog">Blog</NavLink>
              <NavLink className="webpage"activeClassName="active_class" exact to="/aboutus">About Us</NavLink>
              </Nav>
          
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <button id="btn2" className="btn btn-primary">Search</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </ Navbar>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/customersupport" component={Customersupport}/>
      <Route exact path="/services" component={Services}/>
      <Route exact path="/blog" component={Blog}/>
      <Route exact path="/aboutus" component={Aboutus}/>
      </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
