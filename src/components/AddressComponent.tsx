import React from "react";
import { useGlobalContext } from "../context/AddressContext";

interface Props {
  id: string | number;
  name: string;
  address: string;
  email: string;
  phone: string;
  notes: string;
  handleDelete: (id: string | number) => void;
}

const AddressComponent: React.FC<Props> = ({
  id,
  name,
  address,
  email,
  phone,
  notes,
  handleDelete,
}) => {
  const { toggleForm, setId, setButtonName } = useGlobalContext();
  return (
    <section className="each-address">
      <div className="header">
        <button
          onClick={() => {
            toggleForm(true);
            setId(id);
            setButtonName("Update");
          }}
        >
          Edit
        </button>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
      <div className="address-info">
        <span>Name:</span>
        <h3 className="name">{name}</h3>
        <span>Address:</span>
        <p className="addressd">{address}</p>
        <span>Email:</span>
        <p className="email">{email}</p>
        <span>Phone:</span>
        <p className="phone">{phone}</p>
        <span>Notes:</span>
        <p className="notes">{notes}</p>
      </div>
    </section>
  );
};

export default AddressComponent;
