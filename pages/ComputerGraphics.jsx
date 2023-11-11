import CGSyllabus from '../components/CGSyllabus';
import CGSidebar from "../components/CGSidebar";
import { useNavigate } from 'react-router-dom';

function ComputerGraphics() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/home");
    }

    return (
        <>
            <div className="Home" id="outer-container">
                <CGSidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            </div>
            <div style={{ position: 'fixed', left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%', scrollBehavior: 'auto' }}>
                <CGSyllabus />
            </div>
            
           
        </>
    )
}
    
export default ComputerGraphics