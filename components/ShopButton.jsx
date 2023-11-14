import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/ShopButton.css'

function ShopButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/shop");
    }

    return (
        <button type="submit" className="buttonShop" onClick={handleClick}>
            Shop
        </button>
    );
}

export default ShopButton;
