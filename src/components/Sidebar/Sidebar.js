import React, {Component} from "react";
import "./Sidebar.css"
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';


class SideBar extends Component{
  constructor(props) {
      super(props);
      this.state ={
          menu_open : false,
      }
  }

  menuToggle(){
    this.setState({menu_open:!this.state.menu_open});
  }

  render(){
    const menu = ["Settings", "Placeholder", "Placeholder"]
    return(
      <Navbar id="nav" bg = "dark" variant= "dark">
        <Navbar.Brand href="#home">
          <img
          src="./hamburger.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
           />
        </Navbar.Brand>
        <Form inline>
        <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    )

  }

}

export default SideBar;
