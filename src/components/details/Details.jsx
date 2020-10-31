import React from 'react';

function Details() {
    const tags = ['Cute', 'Intelligent', 'Playful', 'Affectionate'];
    return (
        <>
            <section className="tags">
                <span>Tags:</span>
                {tags.map((tag) => {
                    return <span>{tag}</span>;
                })}
            </section>
            <section className="details">
                <div className="details__specie">
                    <span className="specie__label">Specie: </span>
                    <span className="specie__pet-specie">Cat</span>
                </div>
                <div className="details__name">
                    <span className="name__label">Name: </span>
                    <span className="name__pet-name">Limón</span>
                </div>
                <div className="details__age">
                    <span className="age__label">Age: </span>
                    <span className="age__pet-age">{`4 years`}</span>
                </div>
                <div className="details__breed">
                    <span className="breed__label">Breed: </span>
                    <span className="breed__pet-breed">European cat</span>
                </div>
                <div className="details__size">
                    <span className="size__label">Size: </span>
                    <span className="size__pet-size">Big</span>
                </div>
                <div className="details__description">
                    <span className="description__label">Size: </span>
                    <span className="description__pet-description">Big</span>
                </div>
            </section>
        </>
    );
}

export default Details;
