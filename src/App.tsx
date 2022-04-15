import React, { useState, useEffect, useMemo } from 'react';
import { AddressInfo } from './CustomTypes';
import Address from './components/Address';
import AddressContext from './context/AddressContext';
import './App.css';

const App: React.FC = () => {
	const [addresses, setAddresses] = useState<AddressInfo[]>(()=>{
		const data = localStorage.getItem("addresses");
		return data ? JSON.parse(data) : [];
	})
	const [id, setId] = useState<string>("");

	useEffect(()=> {
		localStorage.setItem('addresses', JSON.stringify(addresses));
	},[addresses])

	const providerValue = useMemo(() => ({addresses, setAddresses, id, setId}), [addresses, setAddresses, id, setId]);

	return (
		<AddressContext.Provider value={providerValue}>
		<div className="app">
			<Address />
		</div>
		</AddressContext.Provider>
	)
}

export default App;
