import React from 'react';

const GoodsCard = ({ photo, name, price }) => {
  return (
    <div className="goods-card">
      <img className="goods-photo" src={photo} alt={name} />
      <h3>{`█ ${name}`}</h3>
      <p className="price">{`Ціна: ${price} грн`}</p>
    </div>
  );
};

export default GoodsCard;