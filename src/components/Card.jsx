import React from 'react';
import './App.css'; // Adjust the path as necessary

const Card = ({ imageSrc, altText, cardText }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={imageSrc} className="card-img-top" alt={altText} />
      <div className="card-body">
        <p className="card-text">{cardText}</p>
      </div>
    </div>
  );
};

export default Card;

