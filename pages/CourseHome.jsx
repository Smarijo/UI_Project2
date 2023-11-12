import Syllabus from '../components/Syllabus';
import Sidebar from "../components/Sidebar";

function CourseHome() {

    return (
        <>
            <div className="Home" id="outer-container">
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            </div>
            <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                <Syllabus />
            </div>            
        </>
    )
}
    
export default CourseHome