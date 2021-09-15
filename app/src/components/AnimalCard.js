import React from "react";

const AnimalCard = ({ selectedIndividual, individualDetails }) => {
  return (
    <section>
      {selectedIndividual ? (
        <div>
          <h1>Animal Details</h1>
          <p>Nickname: {individualDetails.nickname}</p>
          <img
            src={individualDetails.img_url}
            alt={individualDetails.species}
          />
          <br />
          <a href={individualDetails.wiki_url} target="_blank" rel="noreferrer">
            Wikipedia Page
          </a>
        </div>
      ) : null}
    </section>
  );
};

export default AnimalCard;
