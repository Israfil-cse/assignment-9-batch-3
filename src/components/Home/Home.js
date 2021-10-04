import React, { useEffect, useState } from 'react';
import TransportOption from './TransportOption';
import './Home.css';
import bgImg from '../../images/BG.svg';
import TitleBar from '../Header/TitleBar';
import transportData from '../fakeData/transportData.json';

function Home() {
	// Background Image
	const setBGImg = {
		backgroundImage: `url(${bgImg})`,
		height: '90vh',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	};
	const [transportInfo, setTransportInfo] = useState([]);
	useEffect(() => setTransportInfo(transportData), []);

	return (
		<div className="container main-home" style={setBGImg}>
			<TitleBar title="City Tour Track" />
			<div
				style={{ height: 'inherit' }}
				className="d-flex align-items-center flex-wrap justify-content-center"
			>
				{/* Call All Transport by their name */}
				{transportInfo?.map((transport, index) => (
					<TransportOption
						key={index}
						transportType={transport.transportType}
						transportImg={transport.image}
					/>
				))}
				{/* <TransportOption transportType="car" transportImg={car} />
				<TransportOption transportType="train" transportImg={train} />
				<TransportOption transportType="bus" transportImg={bus} />
				<TransportOption transportType="bike" transportImg={bike} /> */}
			</div>
		</div>
	);
}

export default Home;
