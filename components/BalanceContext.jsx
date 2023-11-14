import React, { createContext, useState, useContext } from 'react';
import PointsCalculator from '../components/PointsCalculator'; 
const BalanceContext = createContext();

export const useBalance = () => useContext(BalanceContext);

export const BalanceProvider = ({ children }) => {
    const [balance, setBalance] = useState(PointsCalculator());
    const [purchasedItems, setPurchasedItems] = useState({});
    const [carStats, setCarStats] = useState({ handling: 1, speed: 1, braking: 1 }); // Initialize car stats

    return (
        <BalanceContext.Provider value={{ balance, setBalance, purchasedItems, setPurchasedItems, carStats, setCarStats }}>
            {children}
        </BalanceContext.Provider>
    );
};