import React from 'react';
import { Form, Button } from 'react-bootstrap/';
import './Contact.css';

function Contact() {
	return (
		<>
			<main>
				<section className="contact__section">
					<h1>Contact us!</h1>
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

export default Contact;
