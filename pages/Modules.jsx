import { useParams } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Accordion from 'react-bootstrap/Accordion';


function Modules() {
    const params = useParams();
    const courseName = params.course;
    
    if (courseName == "computer-graphics"){

        return (
            <>
                <div className="Home" id="outer-container">
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                </div>
                <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                    <br></br>
                    <h1>Modules</h1>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 1</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/01-01.pptx">01-01.pptx</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/01-01.pptx">01-02.pptx</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/01-01.pptx">01-03.pptx</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion> 
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 2</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/02-01.pptx">02-01.pptx</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/02-02.pptx">02-02.pptx</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/02-03.pptx">02-03.pptx</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion> 
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 3</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/03-01.pptx">03-01.pptx</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/03-02.pptx">03-02.pptx</a></li>
                                </ul>
                                </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 4</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/04-01.pptx">04-01.pptx</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/04-02.pptx">04-02.pptx</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/04-03.pptx">04-03.pptx</a></li>
                                </ul>
                        </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 5</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/05-01.pptx">05-01.pptx</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/05-02.pptx">05-02.pptx</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/05-03.pptx">05-03.pptx</a></li>
                                </ul>
                        </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 6</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/06-01.pptx">06-01.pptx</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/06-02.pptx">06-02.pptx</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/06-03.pptx">06-03.pptx</a></li>
                                </ul>
                        </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 7</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/07-01.pptx">07-01.pptx</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/07-02.pptx">07-02.pptx</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/07-03.pptx">07-03.pptx</a></li>
                                </ul>
                        </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 8</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/08-01.pptx">08-01.pptx</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/08-02.pptx">08-02.pptx</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/08-03.pptx">08-03.pptx</a></li>
                                </ul>
                        </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion>
                    <br></br>
                    <br></br>
                </div>
            </>
        )
    }
    else if (courseName == "ui"){

        return (
            <>
                <div className="Home" id="outer-container">
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                </div>
                <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                    <br></br>
                    <h1>Modules</h1>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 1 - Introduction to Usability</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/ui/presentations/01-01-intro.pptx">Monday Lecture: Intro (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/01-02-usability.pptx">Wednesday lecture: Usability (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/01-03-norman-principals-discoverability.pptx">Friday Lecture: Norman Principals (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/assignments/assignment_01.html">Assignment 1 - Getting to know you</a></li>
                                </ul>
                        </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion>  
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 2 - Human Centered Design</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/ui/presentations/01-04-the-user-p1.pptx">Monday lecture: Human Centered Design 1 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/01-05-the-user-p2.pptx">Wednesday lecture: Human Centered Design 2 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/01-06-the-user-p3.pptx">Friday lecture: Human Centered Design 3 (Slides)</a></li>
                                </ul>
                        </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion>  
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 3 - Sketching part 1</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/ui/pages/project1.html">Smart Object</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/03-01-sketching-p1.pptx">Sketching for Brainstorming (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/pages/inclass_01.html">Sketching practice 1</a></li>
                                    <li className="list-group-item"><a href="/ui/pages/inclass_02.html">Sketching practice 2</a></li>
                                    <li className="list-group-item"><a href="/ui/pages/inclass_03.html">Sketching practice 3</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/03-02-sketching-p2.pptx">Sketching the Interface (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/pages/inclass_04.html">Sketching the Interface practice</a></li>
                                    <li className="list-group-item"><a href="/ui/assignments/assignment_02.html">Assignment 2 - Sketching practice</a></li>
                                    <li className="list-group-item"><a href="/ui/assignments/assignment_03.html">Assignment 3 - Project 1 check in</a></li>                                  
                                </ul>
                        </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 4 - Html and CSS</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/ui/presentations/04-01-web-p1.pptx">The Web (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/pages/tutorial0.html">The Web tutorial</a></li>
                                    <li className="list-group-item"><a href="/ui/pages/tutorial1.html">HTML tutorial</a></li>
                                    <li className="list-group-item"><a href="/ui/pages/inclass_05.html">HTML practice</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/04-02.pptx">HTML (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/pages/tutorial2.html">CSS tutorial</a></li>
                                    <li className="list-group-item"><a href="/ui/pages/inclass_06.html">HTML practice</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/04-02-html-css.pptx">CSS (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/pages/inclass_07.html">HTML practice</a></li>
                                    <li className="list-group-item"><a href="/ui/assignments/assignment_04.html">Assignment 4 - Html and CSS practice</a></li>                                  
                                </ul>
                        </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 5 - Javascript</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/ui/presentations/05-01-javascript-p1.pptx">Javascript (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/pages/tutorial3.html">Web server</a></li>
                                    <li className="list-group-item"><a href="/ui/pages/tutorial4.html">Javascript part 1</a></li>
                                    <li className="list-group-item"><a href="/ui/pages/inclass_08.html">Javascript practice</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/05-02-javascript-p2.pptx">Javascript part 2 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/pages/inclass_09.html">Javascript practice 2</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/05-03-javascript-p3.pptx">Javascript part 3 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/pages/inclass_10.html">Javascript practice 3</a></li>
                                    <li className="list-group-item"><a href="/ui/assignments/assignment_04.html">Assignment 5 - Javascript practice</a></li>                                  
                                    <li className="list-group-item"><a href="/ui/assignments/assignment_04.html">Assignment 6 - Which smart object project 1</a></li>                                  
                                </ul>
                        </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 6 - Design Principles</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/ui/presentations/06-01-design-principles-p1.pptx">Design 1 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/06-02-design-principles-p2.pptx">Design 2 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/pages/inclass_11.html">Layout</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/06-03-design-principles-color.pptx">Design 3 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/pages/inclass_12.html">Color</a></li>
                                </ul>
                        </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 7 - People</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/ui/presentations/07-02-people.pptx">People 1 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/07-03-people.pptx">People 2 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/08-02-people.pptx">People 3 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/08-03-people.pptx">People 4 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/project/07.html">Project 1 implementation</a></li>
                                    <li className="list-group-item"><a href="/ui/project/08.html">Project 1 documentation</a></li>
                                </ul>
                        </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion>
                    <br></br>
                    <br></br>
                </div>
            </>
        )
    }
    else if (courseName == "senior-design"){

        return (
            <>
                <div className="Home" id="outer-container">
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                </div>
                <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                    <br></br>
                    <h1>Modules</h1>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 1 - Introduction</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/senior_design/presentations/01.pptx">Introduction (Slides)</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 2 - Forming teams</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/senior_design/presentations/02.pptx">Forming teams (Slides)</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 3 - Intial project design</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/senior_design/presentations/03.pptx">Intial project design (Slides)</a></li>
                                    <li className="list-group-item"><a href="/senior_design/assignments/assignment_01.html">Assignment 1 - First assignment</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 4 - User profiles</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/senior_design/presentations/04.pptx">User profiles (Slides)</a></li>
                                    <li className="list-group-item"><a href="/senior_design/assignments/assignment_02.html">Assignment 2 - User profiles</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 5 - Tasks</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/senior_design/presentations/05.pptx">Tasks (Slides)</a></li>
                                    <li className="list-group-item"><a href="/senior_design/assignments/assignment_03.html">Assignment 3 - Tasks</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Timeline</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/senior_design/presentations/06.pptx">Timeline (Slides)</a></li>
                                    <li className="list-group-item"><a href="/senior_design/assignments/assignment_04.html">Assignment 4 - Timeline</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 7</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/senior_design/presentations/07.pptx">Module 7 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/senior_design/assignments/assignment_05.html">Assignment 5 - Project status update</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 8</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/senior_design/presentations/08.pptx">Module 8 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/senior_design/assignments/assignment_06.html">Assignment 6 - Project status update</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br></br>
                    <br></br>
                </div>
            </>
        )
    }
}
export default Modules