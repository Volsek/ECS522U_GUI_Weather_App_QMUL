import React, {Component} from "react";
import "./Sidebar.css"
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBFormInline
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Searchbar from "../Searchbar/Searchbar";

class SideBar extends Component{
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  };

  render(){
    return(

      <Router>
        <MDBContainer
        style={{padding: 0, margin:0, maxWidth:"100%"}} 
        >
          <MDBNavbar
          color='elegant-color-dark'
          expand="md"
          dark
          >
            
            <MDBContainer>
              <MDBNavbarToggler left 
              onClick={this.toggleCollapse('navbarCollapse1')}
              dark
              
              />
                 <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBFormInline waves>
                        <Searchbar/>
                      </MDBFormInline>
                    </MDBNavItem>
                </MDBNavbarNav>
              <MDBCollapse
                id='navbarCollapse1'
                isOpen={this.state.collapseID}
                navbar
              >
                <MDBNavbarNav left navbar-dark >
                  <MDBNavItem active>
                    <MDBNavLink to='#!'>Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='#!'>Golf Courses</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='#!'>Settings</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>

               </MDBCollapse>
 
             </MDBContainer>
           </MDBNavbar>
        </MDBContainer>
      </Router>

    )
  }
}

export default SideBar;
