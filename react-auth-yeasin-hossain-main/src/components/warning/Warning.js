import React from 'react';

function Warning({ warning }) {
	// Simple Warning Components, get Props and Show Top
	return (
		<div className="warning">
			<p className="text-danger text-center font-weight-bold">{warning}</p>
		</div>
	);
}

export default Warning;
