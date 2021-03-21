import React from "react";
import { MDBCol } from "mdbreact";

const Searchbar = () => {
  return (
    <MDBCol md="2" size="4" >
      <div className="mb-1">
        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
      </div>
    </MDBCol>
  );
}

export default Searchbar;