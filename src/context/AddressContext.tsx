import { useState, useContext, useEffect } from "react";
import defaultAddress from "../defaultAddress";
import { AddressInfo } from "../types/CustomTypes";
import { createContext } from "react";

const AppContext = createContext<any>(null);

export const AppProvider = ({ children }) => {
  const [addresses, setAddresses] = useState<AddressInfo[]>(() => {
    const data = localStorage.getItem("addresses");
    return data ? JSON.parse(data) : defaultAddress;
  });
  const [id, setId] = useState<string | number>("");
  const [showForm, setShowForm] = useState<boolean>(false);
  const [buttonName, setButtonName] = useState<string>("");

  const toggleForm = (choice: boolean) => {
    setShowForm(choice);
  };

  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  return (
    <AppContext.Provider
      value={{
        addresses,
        setAddresses,
        id,
        setId,
        showForm,
        toggleForm,
        buttonName,
        setButtonName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
