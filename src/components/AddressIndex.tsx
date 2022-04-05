import React from 'react';
import { AddressInfo } from '../CustomTypes';

interface Props {
	addresses: AddressInfo[];
}
const AddressIndex: React.FC<Props> = ({addresses}) => {
	const addressList = addresses.map((thisAddress, index)=> {
		const { name, address, email, phone, notes } = thisAddress
		return (
			<div className="each-address" key={index}>
				<div>
					<h3>{name}</h3>
				</div>
				<div>
					<p>{address}</p>
				</div>
				<div>
					<p>{email}</p>
				</div>
				<div>
					<p>{phone}</p>
				</div>
				{notes}
			</div>
		)
	})
	return (
		<section>
					<div className="address-grid">
						{addressList}	
					</div>
		</section>
	)
}

export default AddressIndex;
