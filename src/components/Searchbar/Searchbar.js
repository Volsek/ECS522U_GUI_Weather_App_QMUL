import React from "react";
import { MDBCol } from "mdbreact";

const Searchbar = () => {
  return (
    <MDBCol md="3" size="4" >
      <div className="mb-4">
        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
      </div>
    </MDBCol>
  );
}

export default Searchbar;