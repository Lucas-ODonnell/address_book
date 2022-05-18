import React, { useState } from "react";
import { useGlobalContext } from "../context/AddressContext";
import { AddressInfo } from "../types/CustomTypes";
import { v4 as uuidv4 } from "uuid";

const CreateUpdate: React.FC = () => {
  const { addresses, setAddresses, id, setId, toggleForm, buttonName } =
    useGlobalContext();
  const [addressForm, setAddressForm] = useState<AddressInfo>({
    id: "",
    name: "",
    address: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAddressForm({
      ...addressForm,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id === "") {
      addressForm.id = uuidv4();
      setAddresses([...addresses, addressForm]);
      setAddressForm({
        id: "",
        name: "",
        address: "",
        email: "",
        phone: "",
        notes: "",
      });
    } else {
      let updatedAddresses = addresses.map((address: AddressInfo) => {
        if (address.id === id) {
          address.name =
            addressForm.name === "" ? address.name : addressForm.name;
          address.address =
            addressForm.address === "" ? address.address : addressForm.address;
          address.email =
            addressForm.email === "" ? address.email : addressForm.email;
          address.phone =
            addressForm.phone === "" ? address.phone : addressForm.phone;
          address.notes =
            addressForm.notes === "" ? address.notes : addressForm.notes;
        }
        return address;
      });
      setAddresses(updatedAddresses);
      setId("");
      setAddressForm({
        id: "",
        name: "",
        address: "",
        email: "",
        phone: "",
        notes: "",
      });
    }
  };

  return (
    <section>
      <div className="address-form-container">
        <div className="address-form-content">
          <div className="form-header">
            <div onClick={() => toggleForm(false)}>&times;</div>
          </div>
          <form
            className="address-form"
            onSubmit={(e) => {
              toggleForm(false);
              handleSubmit(e);
            }}
          >
            <div className="field">
              <label>Name </label>
              <input
                name="name"
                value={addressForm.name}
                onChange={handleChange}
                type="text"
              />
            </div>
            <div className="field">
              <label>Address </label>
              <input
                name="address"
                value={addressForm.address}
                onChange={handleChange}
                type="text"
              />
            </div>
            <div className="contact-row">
              <div className="field">
                <label>Email </label>
                <input
                  name="email"
                  value={addressForm.email}
                  onChange={handleChange}
                  type="email"
                />
              </div>
              <div className="field">
                <label>Phone </label>
                <input
                  name="phone"
                  value={addressForm.phone}
                  onChange={handleChange}
                  type="text"
                />
              </div>
            </div>
            <div className="field">
              <label>Notes </label>
              <input
                name="notes"
                value={addressForm.notes}
                onChange={handleChange}
                type="text"
              />
            </div>
            <div className="form-submit">
              <button>{buttonName}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateUpdate;
