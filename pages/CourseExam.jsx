import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import CGExams from '../course-data/computer_graphics/exams/exams';



function CourseExam() {
    return (
        <>
            <div className="Home" id="outer-container">
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            </div>
            <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                <br></br>
                <br></br>
                <CGExams />
            </div>
        </>
    )
}

export default CourseExam