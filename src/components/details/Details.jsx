import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Details({ animal }) {
  return (
    <>
      <section className="tags">
        {animal?.tags.length > 0 && (
          <>
            <span>Tags:</span>
            <div className="tag__names">
              {animal?.tags.map((tag) => {
                return <span className="tag__name">{tag}</span>;
              })}
            </div>
          </>
        )}
      </section>
      <div className="details-donating">
        <section id="details">
          <Card className="mb-4" style={{ width: '95vw' }}>
            <Card.Body>
              <Card.Title>{animal?.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Description
              </Card.Subtitle>
              <Card.Text>{animal?.description}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">Specie</Card.Subtitle>
              <Card.Text>{animal?.species}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">Age</Card.Subtitle>
              <Card.Text>{animal?.age}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">Breed</Card.Subtitle>
              <Card.Text>{animal?.breeds.primary}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">Size</Card.Subtitle>
              <Card.Text>{animal?.size}</Card.Text>
              <Button variant="primary">Adopt me!</Button>
            </Card.Body>
          </Card>
        </section>
        <section id="donating">
          <Card
            id="donating__card"
            className="mb-4 p-4"
            style={{ width: '95vw' }}
          >
            <Card.Body>
              <Button
                id="donate-button"
                className="mb-3"
                variant="primary"
                size="lg"
                block
              >
                Donate!
              </Button>
              <Card.Img variant="top" src="holder.js/100px180" />
            </Card.Body>
          </Card>
        </section>
      </div>
    </>
  );
}

export default Details;
