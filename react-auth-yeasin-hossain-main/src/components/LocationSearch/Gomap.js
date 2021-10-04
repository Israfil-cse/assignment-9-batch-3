import React from 'react';
import GoogleMapReact from 'google-map-react';

const defaultProps = {
	center: {
		lat: 59.95,
		lng: 30.33,
	},
	zoom: 11,
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Gomap = () => (
	<div style={{ height: '100vh', width: '100%' }}>
		<GoogleMapReact
			// bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
			bootstrapURLKeys={{ key: 'AIzaSyAy0FJEs-GpsnPQ5DRpKEMa_HZeVMTfRzQ' }}
			defaultCenter={defaultProps.center}
			defaultZoom={defaultProps.zoom}
		>
			<AnyReactComponent
				lat={59.955413}
				lng={30.337844}
				text={'Kreyser Avrora'}
			/>
		</GoogleMapReact>
	</div>
);

export default Gomap;
