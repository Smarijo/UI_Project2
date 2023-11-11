import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import './pages/Shop.css';

const Item = ({ item, purchaseItem, statName, isPurchased }) => {
  const stars = Array.from({ length: 3 }, (_, index) => (
    <span key={index} className={index < item.stats ? 'star' : 'star-inactive'}>★</span>
  ));

  
  const imageStyle = {
    width: item.imageWidth ? item.imageWidth : 'auto', 
    height: item.imageHeight ? item.imageHeight : 'auto', 
    objectFit: 'contain', 
  };

  return (
    <div className="item">
      <div className="item-name">{item.name}</div>
      {item.imageUrl && (
        <div className="item-image-container">
          <img 
            src={item.imageUrl} 
            alt={`${item.name}`} 
            className="item-image" 
            style={imageStyle}
          />
        </div>
      )}
      <div className="item-details">
        <div className="item-stats">
          <div className="stat-name">{statName}</div>
          <div className="star-rating">{stars}</div>
        </div>
        <button 
          onClick={purchaseItem} 
          disabled={isPurchased} 
          className={`buy-button ${isPurchased ? 'bought' : ''}`}
        >
          {isPurchased ? 'Bought' : 'Buy'}
        </button>
        <div className="item-price">
          <FontAwesomeIcon icon={faCoins} /> {item.price}
        </div>
        
      </div>
    </div>
  );
};

export default Item;
