import React from 'react';
import Card from 'react-bootstrap/Card';
import './List.css';

function List({ animals }) {
	return (
		<>
			<section className="main-list-container">
				<ul className="list-pets d-flex flex-sm-column align-items-center flex-md-row flex-md-wrap">
					{' '}
					{animals?.map((animal, index) => {
						return (
							<li
								key={index}
								className="animal-card d-flex justify-content-center"
							>
								<Card className="m-3" style={{ width: '100%' }}>
									<Card.Body>
										<div className="d-flex flex-column align-items-center">
											<Card.Img
												variant="top"
												src={
													!animal.photos[0]
														? 'https://trello-attachments.s3.amazonaws.com/5f9c013b390a4735863ccb17/450x450/e6580d415bd4c35ae516c6555b294afb/112815953-stock-vector-no-image-available-icon-flat-vector.jpg'
														: animal.photos[0].medium
												}
											/>
											<Card.Title>{animal.name}</Card.Title>
										</div>
										<div className="d-flex justify-content-around">
											<div className="d-flex flex-column attributes">
												<Card.Text>{animal.type}</Card.Text>
												<Card.Text>{animal.breeds.primary}</Card.Text>
											</div>
											<div className="d-flex flex-column attributes">
												<Card.Text>{animal.gender}</Card.Text>
												<Card.Text>{animal.age}</Card.Text>
											</div>
										</div>
									</Card.Body>
								</Card>
							</li>
						);
					})}
				</ul>
			</section>
		</>
	);
}

export default List;
