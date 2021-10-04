import React from 'react';
import { Button, Form } from 'react-bootstrap';

// input data sent to SearchDestination page by props
function SearchForm({ searchLocation, setData }) {
	return (
		<Form onSubmit={searchLocation}>
			<Form.Group controlId="formBasicFrom">
				<Form.Label className="font-weight-bold">Pick From</Form.Label>
				<Form.Control
					type="text"
					placeholder="Mirpur-1"
					name="locationFrom"
					onChange={setData}
				/>
			</Form.Group>

			<Form.Group controlId="formBasicTo">
				<Form.Label className="font-weight-bold">Pick To</Form.Label>
				<Form.Control
					type="text"
					placeholder="Dhanmondi"
					name="locationTo"
					onChange={setData}
				/>
			</Form.Group>

			<Form.Group>
				<Form.Label className="font-weight-bold">Date</Form.Label>
				<Form.Control
					type="date"
					placeholder="Dhanmondi"
					name="date"
					onChange={setData}
				/>
			</Form.Group>

			<Button variant="warning" type="submit">
				Search
			</Button>
		</Form>
	);
}

export default SearchForm;
