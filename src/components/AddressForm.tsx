import React from "react";
import CreateUpdate from "./CreateUpdate";
import { useGlobalContext } from "../context/AddressContext";

const AddressForm: React.FC = () => {
  const { showForm, toggleForm, setButtonName } = useGlobalContext();
  return (
    <section>
      <div className="new-address">
        <button
          onClick={() => {
            toggleForm(true);
            setButtonName("Submit");
          }}
        >
          New Address
        </button>
      </div>
      {showForm ? <CreateUpdate /> : <div></div>}
    </section>
  );
};

export default AddressForm;
