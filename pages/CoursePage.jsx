import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

import CG01 from '../course-data/computer_graphics/pages/01';
import CG02 from '../course-data/computer_graphics/pages/02';
import CG03 from '../course-data/computer_graphics/pages/03';
import CG04 from '../course-data/computer_graphics/pages/04';
import CG05 from '../course-data/computer_graphics/pages/05';
import CG06 from '../course-data/computer_graphics/pages/06';
import CG07 from '../course-data/computer_graphics/pages/07';
import CG08 from '../course-data/computer_graphics/pages/08';
import CG09 from '../course-data/computer_graphics/pages/09';
import CG10 from '../course-data/computer_graphics/pages/10';
import CG11 from '../course-data/computer_graphics/pages/11';
import CG12 from '../course-data/computer_graphics/pages/12';
import CG13 from '../course-data/computer_graphics/pages/13';
import CG14 from '../course-data/computer_graphics/pages/14';
import CG15 from '../course-data/computer_graphics/pages/15';
import CG16 from '../course-data/computer_graphics/pages/16';

import UI01 from '../course-data/ui/pages/inclass_01';
import UI02 from '../course-data/ui/pages/inclass_02';
import UI03 from '../course-data/ui/pages/inclass_03';
import UI04 from '../course-data/ui/pages/inclass_04';
import UI05 from '../course-data/ui/pages/inclass_05';
import UI06 from '../course-data/ui/pages/inclass_06';
import UI07 from '../course-data/ui/pages/inclass_07';
import UI08 from '../course-data/ui/pages/inclass_08';
import UI09 from '../course-data/ui/pages/inclass_09';
import UI10 from '../course-data/ui/pages/inclass_10';
import UI11 from '../course-data/ui/pages/inclass_11';
import UI12 from '../course-data/ui/pages/inclass_12';
import UIProj1 from '../course-data/ui/pages/project1';
import UIT00 from '../course-data/ui/pages/tutorial0';
import UIT03 from '../course-data/ui/pages/tutorial3';


function CoursePage() {

    const params = useParams();
    const courseName = params.course;
    const pageName = params.page;


    if (courseName == "ui") {
        switch(pageName) {
            
            case "inclass_01": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <UI01 />
                    </div>
                    </>
            )
            case "inclass_02": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <UI02 />
                    </div>
                    </>
            )
            case "inclass_03": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <UI03 />
                    </div>
                    </>
            )
            case "inclass_04": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <UI04 />
                    </div>
                    </>
            )
            case "inclass_05": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <UI05 />
                    </div>
                    </>
            )
            case "inclass_06": return (
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
            case "inclass_07": return (
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
            case "inclass_08": return (
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
            case "inclass_09": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <UI09 />
                    </div>
                    </>
            )
            case "inclass_10": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <UI10 />
                    </div>
                    </>
            )
            case "inclass_11": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <UI11 />
                    </div>
                    </>
            )
            case "inclass_12": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <UI12 />
                    </div>
                    </>
            )
            case "tutorial0": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <UIT00 />
                    </div>
                    </>
            )
            case "tutorial3": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <UIT03 />
                    </div>
                    </>
            )
            case "project1": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <UIProj1 />
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
            case "10": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CG10 />
                    </div>
                    </>
            )
            case "11": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CG11 />
                    </div>
                    </>
            )
            case "12": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CG12 />
                    </div>
                    </>
            )
            case "13": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CG13 />
                    </div>
                    </>
            )
            case "14": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CG14 />
                    </div>
                    </>
            )
            case "15": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CG15 />
                    </div>
                    </>
            )
            case "16": return (
                <>
                    <div className="Home" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                        <br></br>
                        <br></br>
                        <CG16 />
                    </div>
                    </>
            )

        }
    }
}
    
export default CoursePage