import React from "react";
import { MDBCol } from "mdbreact";

const Searchbar = () => {
  return (
    <MDBCol md="6" size="5" >
      <div className="mb-1">
        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
      </div>
    </MDBCol>
  );
}

export default Searchbar;