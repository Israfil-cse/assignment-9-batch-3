import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function TransportOption({ transportType, transportImg }) {
	return (
		<div className="m-3 mainCard rounded shadow">
			{/* Route name come from props and transport name */}
			<Link to={`/destination/${transportType}`}>
				<Card style={{ width: '15rem' }} className="h-100">
					<Card.Img variant="top" src={transportImg} className="mb-5" />
					<Card.Body>
						<Card.Title className="transportName">
							{transportType.toUpperCase()}
						</Card.Title>
					</Card.Body>
				</Card>
			</Link>
		</div>
	);
}

export default TransportOption;
