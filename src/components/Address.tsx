import React, { useState } from "react";
import AddressForm from "./AddressForm";
import AddressIndex from "./AddressIndex";
import "./Address.css";

const Address: React.FC = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="title-header">
          <h1>Address Book</h1>
        </div>
        <AddressForm />
        <AddressIndex />
      </div>
    </div>
  );
};

export default Address;
