import React, { useState } from "react";
import { useGlobalContext } from "../context/AddressContext";
import { AddressInfo } from "../types/CustomTypes";
import CreateUpdate from "./CreateUpdate";
import Dropdown from "./Dropdown";
import Filter from "./Filter";
import AddressComponent from "./AddressComponent";

const AddressIndex: React.FC = () => {
  const { addresses, setAddresses, showForm } = useGlobalContext();
  const [sortBy, setSortBy] = useState<string>("name");
  const [filter, setFilter] = useState<string>("");
  const handleFilterChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilter(e.currentTarget.value);
  };

  const handleDelete = (id: string | number) => {
    setAddresses(addresses.filter((item: AddressInfo) => item.id !== id));
  };

  const sortList = () => {
    if (sortBy.toLowerCase() === "name") {
      return addresses.sort((a: AddressInfo, b: AddressInfo) =>
        a.name.localeCompare(b.name)
      );
    }
    return addresses.sort((a: AddressInfo, b: AddressInfo) =>
      a.email.localeCompare(b.email)
    );
  };
  return (
    <main>
      <Filter {...{ handleFilterChange, filter }} />
      <Dropdown {...{ setSortBy }} />
      <div className="address-grid">
        {sortList()
          .filter((item: AddressInfo) => {
            if (filter === "") {
              return item;
            } else if (
              item.name.toLowerCase().includes(filter.toLowerCase()) ||
              item.email.toLowerCase().includes(filter.toLowerCase()) ||
              item.phone.toLowerCase().includes(filter.toLowerCase())
            ) {
              return item;
            }
          })
          .map((thisAddress: AddressInfo) => {
            return (
              <AddressComponent
                key={thisAddress.id}
                {...thisAddress}
                handleDelete={handleDelete}
              />
            );
          })}
        ;
      </div>
      {showForm && <CreateUpdate />}
    </main>
  );
};

export default AddressIndex;
