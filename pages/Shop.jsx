import React from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../components/Item';
import Balance from '../components/Balance';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { GiCarWheel } from 'react-icons/gi';
import { PiEngineFill } from 'react-icons/pi';
import tireImage from '../components/images/black_tire.png';
import tireImage2 from '../components/images/premium_tire.png';
import engine1 from '../components/images/engine.png';
import engine2 from '../components/images/turbo.png';
import frame1 from '../components/images/standard.png';
import frame2 from '../components/images/sleek.png';
import { useBalance } from '../components/BalanceContext.jsx';

const Shop = () => {
  const { balance, setBalance, purchasedItems, setPurchasedItems, carStats, setCarStats } = useBalance();
  const navigate = useNavigate();

  const purchaseItem = (itemName, itemStats, price) => {
    if (balance >= price && !purchasedItems[itemName]) {
      setBalance(balance - price);
      setPurchasedItems({
        ...purchasedItems,
        [itemName]: true 
      });

      // Update car stats based on the purchased item
      setCarStats({ ...carStats, [itemStats.statName.toLowerCase()]: itemStats.stats });
    } else {
      if (purchasedItems[itemName]) {
        alert('Item already bought!');
      } else {
        alert('Not enough coins!');
      }
    }
  };

  const items = {
    tires: [
      { name: 'Standard Tires', statName: 'Handling', stats: 2, price: 100, imageWidth: '200px', imageHeight: '150px', imageUrl: tireImage },
      { name: 'Premium Tires', statName: 'Handling', stats: 3, price: 200, imageUrl: tireImage2 },
    ],
    engine: [
      { name: 'Basic Engine', statName: 'Speed', stats: 2, price: 100, imageWidth: '200px', imageHeight:'150px', imageUrl: engine1 },
      { name: 'Turbo Engine', statName: 'Speed', stats: 3, price: 200, imageWidth: '200px', imageHeight:'162px', imageUrl: engine2 },
    ],
    frame: [
      { name: 'Standard Frame', statName: 'Braking', stats: 2, price: 100, imageWidth: '200px', imageHeight:'150px', imageUrl: frame1 },
      { name: 'Sports Frame', statName: 'Braking', stats: 3, price: 200, imageWidth: '200px', imageHeight:'162px', imageUrl: frame2 },
    ],
  };

  // Inline style for icons
  const iconStyle = { fontSize: '3em' }; 

  function handleClick() {
      navigate("/home");
  }

  return (
    <div className="shop">
      <div className="top-bar">
        <button type="submit" className="home-button" onClick={handleClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1 className="shop-title">Shop</h1>
        <Balance balance={balance} />
      </div>
      <div className="categories">
        {Object.keys(items).map((category) => (
          <div key={category} className="category">
            <div className="category-icon" style={iconStyle}>
              {category === 'tires' ? (
                <GiCarWheel />
              ) : category === 'engine' ? (
                <PiEngineFill />
              ) : (
                <FontAwesomeIcon icon={faCarSide} />
              )}
            </div>
            {items[category].map((item) => (
              <Item
                key={item.name}
                item={item}
                statName={item.statName}
                purchaseItem={() => purchaseItem(item.name, { statName: item.statName, stats: item.stats }, item.price)}
                isPurchased={purchasedItems[item.name]}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
