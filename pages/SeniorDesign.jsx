import SDSyllabus from '../components/SDSyllabus';
import SDSidebar from "../components/SDSidebar";

function SeniorDesign() {

    return (
        <>
            <div className="Home" id="outer-container">
                <SDSidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            </div>
            <div style={{ position: 'fixed', left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                <SDSyllabus />
            </div>
        </>
    )
}
    
export default SeniorDesign