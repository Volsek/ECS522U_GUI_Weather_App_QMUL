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
              <div id="searchBar">
                <Searchbar/>
              </div>
              <MDBCollapse
                id='navbarCollapse1'
                isOpen={this.state.collapseID}
                style={{position:"relative", right:"20vw", marginLeft:"0px"}} 

                navbar
              >
                <MDBNavbarNav left navbar-dark >
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
