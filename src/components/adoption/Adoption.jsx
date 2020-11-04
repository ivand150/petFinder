import React from 'react';
import { Form, Button, Col } from 'react-bootstrap/';
import './Adoption.css';

function Adoption() {
	return (
		<>
			<main>
				<section className="adoption__section">
					<Form>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Name</Form.Label>
							<Form.Control type="name" placeholder="Name" />
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Surname</Form.Label>
							<Form.Control type="surname" placeholder="Surname" />
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>
						<Form.Group controlId="formGridAddress1">
							<Form.Label>Address</Form.Label>
							<Form.Control placeholder="1234 Main St" />
						</Form.Group>
						<Form.Row>
							<Form.Group as={Col} controlId="formGridCity">
								<Form.Label>City</Form.Label>
								<Form.Control />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridState">
								<Form.Label>State</Form.Label>
								<Form.Control as="select" defaultValue="Choose...">
									<option>Choose...</option>
									<option>...</option>
								</Form.Control>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridZip">
								<Form.Label>Zip</Form.Label>
								<Form.Control />
							</Form.Group>
						</Form.Row>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Tell us about you:</Form.Label>
							<Form.Control as="textarea" rows={3} className="text-area" />
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</section>
			</main>
		</>
	);
}

export default Adoption;
