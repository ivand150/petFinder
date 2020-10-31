import React from 'react';

function Details({animal}) {

    return (
        <>
        <section className="tags">
        {animal?.tags.length > 0 &&  <>
                <span>Tags:</span>
                <div className="tag__names">
                    {animal?.tags.map((tag) => {
                        return <span className="tag__name">{tag}</span>;
                    })}
                </div>
            </>
                }
            </section>
            
            <section className="details">
                <div className="details__specie">
                    <span className="specie__label">Specie: </span>
                <span className="specie__pet-specie">{`${animal?.species}`}</span>
                </div>
                <div className="details__name">
                    <span className="name__label">Name: </span>
                    <span className="name__pet-name">{`${animal?.name}`}</span>
                </div>
                <div className="details__age">
                    <span className="age__label">Age: </span>
                    <span className="age__pet-age">{`${animal?.age}`}</span>
                </div>
                <div className="details__breed">
                    <span className="breed__label">Breed: </span>
                    <span className="breed__pet-breed">{`${animal?.breeds.primary}`}</span>
                </div>
                <div className="details__size">
                    <span className="size__label">Size: </span>
                    <span className="size__pet-size">{`${animal?.size}`}</span>
                </div>
                <div className="details__description">
                    <span className="description__label">Description: </span>
                    <span className="description__pet-description"> 
                    {animal?.description && `${animal?.description}`}
                    </span>
                </div>
            </section>
        </>
    );
}

export default Details;
