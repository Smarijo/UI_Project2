import { useNavigate } from 'react-router-dom';
import '../pages/RaceTrack.css'
function RaceButton() {
    
    const navigate = useNavigate();

    function handleClick() {
        navigate("/race");
    }

    return (
        <button type="submit" className="buttonRace" onClick={handleClick}>
            🏁  Race    🏁
        </button>
    )

}

export default RaceButton