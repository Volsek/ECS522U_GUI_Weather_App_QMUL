import React from "react";
import { MDBCol } from "mdbreact";

/* MDB Search Bar
imports into the nav bar */

/*Form search that allows the user to input*/
const Searchbar = () => {
  return (
    <div class="searchBar">
      <MDBCol md="5" size="10" >
        <div className="md-form my-0">
          <input className="form-control mr-sm-1 " type="text" placeholder="Search" aria-label="Search" />
        </div>
      </MDBCol>
    </div>

  );
}

export default Searchbar;