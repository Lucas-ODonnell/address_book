import React from 'react';
import Address from './components/Address';
import './App.css';

const App: React.FC = () => {
	return (
		<div className="app">
			<h1>Address Book</h1>
			<Address />
		</div>
	)
}

export default App;
