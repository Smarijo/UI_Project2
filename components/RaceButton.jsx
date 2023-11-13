import { useNavigate } from 'react-router-dom';

function RaceButton() {
    
    const navigate = useNavigate();

    function handleClick() {
        navigate("/race");
    }

    return (
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Race
        </button>
    )

}

export default RaceButton