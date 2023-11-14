import { useParams } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Accordion from 'react-bootstrap/Accordion';

function Files() {
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
                    <h1>Files</h1>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 1 - Foundations</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/01-01.pptx">What is computer graphics (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/01-01.pptx">Computer graphics pipeline (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/01-01.pptx">Computer graphics hardware (Slides)</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion> 
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 2 - Linear Algebra</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/02-01.pptx">Linear algebra p1 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/02-02.pptx">Linear algebra p2 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/02-03.pptx">Linear algebra p3 (Slides)</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion> 
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 3 - Rasterization</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/03-01.pptx">How to draw lines (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/03-02.pptx">How to draw shapes (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/pages/07.html">Determinant</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/pages/08.html">Inverse Matrices</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/pages/09.html">Nonsquare Matrices</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/pages/10.html">Dot Product</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/pages/11.html">Cross Product</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/pages/12.html">Cross Product</a></li>
                                </ul>
                                </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 4 - Transformations</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/04-01.pptx">Transformations p1 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/04-02.pptx">Transformations p2 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/04-03.pptx">Transformations p3 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/pages/13.html">Cross product as transformation</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/pages/14.html">Cramer's rule</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/pages/15.html">Change of bias</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/pages/16.html">Eigenvectors</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/assignments/CGassignment_04.jsx">Assignment 4 - Transformations exercise</a></li>
                                </ul>
                        </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 5 - Projection</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/05-01.pptx">Projection p1 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/05-02.pptx">Projection p2 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/05-03.pptx">Projection p3 (Slides)</a></li>
                                </ul>
                        </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 6 - Texture mapping</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/06-01.pptx">Texture mapping p1 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/06-02.pptx">Texture mapping p2 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/06-03.pptx">Texture mapping p3 (Slides)</a></li>
                                </ul>
                        </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 7 - Color</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/07-01.pptx">Color p1 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/07-02.pptx">Color p2 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/07-03.pptx">Color p3 (Slides)</a></li>
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
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/08-01.pptx">Light and shadow p1 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/08-02.pptx">Light and shadow p2 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/08-03.pptx">Light and shadow p3 (Slides)</a></li>
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
                    <h1>Files</h1>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 1 - Introduction to Usability</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/ui/presentations/01-01-intro.pptx">Monday Lecture: Intro (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/01-02-usability.pptx">Wednesday lecture: Usability (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/01-03-norman-principals-discoverability.pptx">Friday Lecture: Norman Principals (Slides)</a></li>
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
                                    <li className="list-group-item"><a href="/ui/presentations/03-01-sketching-p1.pptx">Sketching for Brainstorming (Slides)</a></li>                 
                                    <li className="list-group-item"><a href="/ui/presentations/03-02-sketching-p2.pptx">Sketching the Interface (Slides)</a></li>                                
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
                                    <li className="list-group-item"><a href="/ui/presentations/04-02.pptx">HTML (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/04-02-html-css.pptx">CSS (Slides)</a></li>
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
                                    <li className="list-group-item"><a href="/ui/presentations/05-02-javascript-p2.pptx">Javascript part 2 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/05-03-javascript-p3.pptx">Javascript part 3 (Slides)</a></li>
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
                                    <li className="list-group-item"><a href="/ui/presentations/06-03-design-principles-color.pptx">Design 3 (Slides)</a></li>
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
                    <h1>Files</h1>
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

export default Files 