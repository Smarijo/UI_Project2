import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

import CG01 from '../course-data/computer_graphics/pages/01';
import CG02 from '../course-data/computer_graphics/pages/02';
import CG03 from '../course-data/computer_graphics/pages/03';
import CG04 from '../course-data/computer_graphics/pages/04';



function CoursePage() {

    const params = useParams();
    const courseName = params.course;
    const pageName = params.page;


    if (courseName == "ui") {
        switch(pageName) {
            
            case "UIassignment_01": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CG01 />
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
        switch(pageName) {
            
            case "01": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CG01 />
                    </div>
                    </>
            )
            case "02": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CG02 />
                    </div>
                    </>
            )
            case "03": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CG03 />
                    </div>
                    </>
            )
            case "04": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CG04 />
                    </div>
                    </>
            )
            case "05": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CG05 />
                    </div>
                    </>
            )
            case "06": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CG06 />
                    </div>
                    </>
            )
            case "07": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CG07 />
                    </div>
                    </>
            )
            case "08": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CG08 />
                    </div>
                    </>
            )
            case "09": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CG09 />
                    </div>
                    </>
            )

        }
    }
}
    
export default CoursePage