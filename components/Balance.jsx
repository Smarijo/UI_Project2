import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins} from '@fortawesome/free-solid-svg-icons';
import './pages/Shop.css';

const Balance = ({ balance }) => (
  <div className="balance">
    <h3><FontAwesomeIcon icon={faCoins} /> {balance}</h3>
  </div>
);

export default Balance;
