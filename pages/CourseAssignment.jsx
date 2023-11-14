import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import SDAssignment_01 from '../course-data/senior_design/assignments/SDassignment_01';
import SDAssignment_02 from '../course-data/senior_design/assignments/SDassignment_02';
import SDAssignment_03 from '../course-data/senior_design/assignments/SDassignment_03';
import SDAssignment_04 from '../course-data/senior_design/assignments/SDassignment_04';
import SDAssignment_05 from '../course-data/senior_design/assignments/SDassignment_05';
import SDAssignment_06 from '../course-data/senior_design/assignments/SDassignment_06';
import UI06 from '../course-data/ui/assignments/UI06';
import UI07 from '../course-data/ui/assignments/UI07';
import UI08 from '../course-data/ui/assignments/UI08';
import UIAssignment_01 from '../course-data/ui/assignments/UIassignment_01';
import UIAssignment_02 from '../course-data/ui/assignments/UIassignment_02';
import UIAssignment_03 from '../course-data/ui/assignments/UIassignment_03';
import UIAssignment_04 from '../course-data/ui/assignments/UIassignment_04';
import UIAssignment_05 from '../course-data/ui/assignments/UIassignment_05';
import CGAssignment_01 from '../course-data/computer_graphics/assignments/CGassignment_01';
import CGAssignment_02 from '../course-data/computer_graphics/assignments/CGassignment_02';
import CGAssignment_03 from '../course-data/computer_graphics/assignments/CGassignment_03';
import CGAssignment_04 from '../course-data/computer_graphics/assignments/CGassignment_04';
import CGAssignment_05 from '../course-data/computer_graphics/assignments/CGassignment_05';
import CGAssignment_06 from '../course-data/computer_graphics/assignments/CGassignment_06';
import CGAssignment_07 from '../course-data/computer_graphics/assignments/CGassignment_07';
import CGAssignment_08 from '../course-data/computer_graphics/assignments/CGassignment_08';
import CGAssignment_09 from '../course-data/computer_graphics/assignments/CGassignment_09';

function CourseAssignment() {

    const params = useParams();
    const courseName = params.course;
    const assnName = params.assn;


    if (courseName == "ui") {
        switch(assnName) {
            
            case "UIassignment_01": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <UIAssignment_01 />
                    </div>
                    </>
            )
            case "UIassignment_02": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <UIAssignment_02 />
                    </div>
                    </>
            )
            case "UIassignment_03": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <UIAssignment_03 />
                    </div>
                    </>
            )
            case "UIassignment_04": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <UIAssignment_04 />
                    </div>
                    </>
            )
            case "UIassignment_05": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <UIAssignment_05 />
                    </div>
                    </>
            )
            case "UI06": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <UI06 />
                    </div>
                    </>
            )
            case "UI07": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <UI07 />
                    </div>
                    </>
            )
            case "UI08": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <UI08 />
                    </div>
                    </>
            )

        }
        
    }
    else if (courseName == "computer-graphics") {
        switch(assnName) {
            
            case "CGassignment_01": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CGAssignment_01 />
                    </div>
                    </>
            )
            case "CGassignment_02": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CGAssignment_02 />
                    </div>
                    </>
            )
            case "CGassignment_03": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CGAssignment_03 />
                    </div>
                    </>
            )
            case "CGassignment_04": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CGAssignment_04 />
                    </div>
                    </>
            )
            case "CGassignment_05": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CGAssignment_05 />
                    </div>
                    </>
            )
            case "CGassignment_06": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CGAssignment_06 />
                    </div>
                    </>
            )
            case "CGassignment_07": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CGAssignment_07 />
                    </div>
                    </>
            )
            case "CGassignment_08": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CGAssignment_08 />
                    </div>
                    </>
            )
            case "CGassignment_09": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CGAssignment_09 />
                    </div>
                    </>
            )

        }
    }
    else if (courseName == "senior-design") {
        switch(assnName) {
            
            case "SDassignment_01": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <SDAssignment_01 />
                    </div>
                    </>
            )
            case "SDassignment_02": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <SDAssignment_02 />
                    </div>
                    </>
            )
            case "SDassignment_03": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <SDAssignment_03 />
                    </div>
                    </>
            )
            case "SDassignment_04": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <SDAssignment_04 />
                    </div>
                    </>
            )
            case "SDassignment_05": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <SDAssignment_05 />
                    </div>
                    </>
            )
            case "SDassignment_06": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <SDAssignment_06 />
                    </div>
                    </>
            )

        }
    }
}
    
export default CourseAssignment