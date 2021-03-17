import React, {Component} from "react";
import "./Sidebar.css"
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

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
        style={{padding: 0}} 
        >
          <MDBNavbar
          color='grey'
          light
          >
            <MDBContainer>
              <MDBNavbarToggler left 
              onClick={this.toggleCollapse('navbarCollapse1')}
              style={{backgroundColor: '#FFFFFF'}} 

              />
              <MDBCollapse
                id='navbarCollapse1'
                isOpen={this.state.collapseID}
                navbar
                color='white'
              >
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to='#!'>Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='#!'>Link</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='#!'>Profile</MDBNavLink>
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
