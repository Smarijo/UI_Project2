import { useNavigate } from 'react-router-dom';

function ShopButton() {
    
    const navigate = useNavigate();

    function handleClick() {
        navigate("/shop");
    }

    return (
        <button type="submit" onClick={handleClick}>
            Shop
        </button>
    )

}

export default ShopButton