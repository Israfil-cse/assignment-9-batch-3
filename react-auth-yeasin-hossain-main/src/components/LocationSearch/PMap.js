import React from 'react';
import { Map, Marker } from 'pigeon-maps';

function PMap() {
	return (
		<div className="d-flex justify-content-center rounded shadow">
			{/* I use Pigeon Map Simple and Solid  */}
			<Map
				defaultCenter={[23.777176, 90.399452]}
				defaultZoom={12}
				width={600}
				height={400}
			>
				<Marker anchor={[23.777176, 90.399452]} payload={1} />
			</Map>
		</div>
	);
}

export default PMap;
