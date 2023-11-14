import { useParams, Link } from 'react-router-dom';
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
                            <Accordion.Header><h3>Module 1 - Foundations</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/01-01.pptx">What is computer graphics (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/01-01.pptx">Computer graphics pipeline (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/01-01.pptx">Computer graphics hardware (Slides)</a></li>
                                    <li className="list-group-item"><Link to={`/courses/compute-graphics/assignments/CGassignment_01`}>Assignment 1 - first assignment</Link></li>
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
                                    <li className="list-group-item"><Link to={`/courses/computer-graphics/pages/01`}>Intro</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/computer-graphics/pages/02`}>Vectors</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/computer-graphics/pages/03`}>Span</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/computer-graphics/pages/04`}>Linear Transformations</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/computer-graphics/pages/05`}>Matrix Multiplication</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/computer-graphics/pages/06`}>3D transformations</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/compute-graphics/assignments/CGassignment_02`}>Assignment 2 - Linear algebra review</Link></li>
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
                                    <li className="list-group-item"><Link to={`/courses/computer-graphics/pages/07`}>Determinant</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/computer-graphics/pages/08`}>Inverse Matrices</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/computer-graphics/pages/09`}>Nonsquare Matrices</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/computer-graphics/pages/10`}>Dot Product</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/computer-graphics/pages/11`}>Cross Product</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/computer-graphics/pages/12`}>Cross Product</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/compute-graphics/assignments/CGassignment_03`}>Assignment 3 - Rasterization exercise</Link></li>
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
                                    <li className="list-group-item"><Link to={`/courses/computer-graphics/pages/13`}>Cross product as transformation</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/computer-graphics/pages/14`}>Cramer's rule</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/computer-graphics/pages/15`}>Change of bias</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/computer-graphics/pages/16`}>Eigenvectors</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/compute-graphics/assignments/CGassignment_04`}>Assignment 4 - Transformations exercise</Link></li>
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
                                    <li className="list-group-item"><Link to={`/courses/compute-graphics/assignments/CGassignment_05`}>Assignment 5 - Projection exercise</Link></li>
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
                                    <li className="list-group-item"><Link to={`/courses/compute-graphics/assignments/CGassignment_06`}>Assignment 6 - Texture mapping exercise</Link></li>
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
                                    <li className="list-group-item"><Link to={`/courses/compute-graphics/assignments/CGassignment_07`}>Assignment 7 - Color</Link></li>
                                </ul>
                        </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 8 - Light and shadow</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/08-01.pptx">Light and shadow p1 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/08-02.pptx">Light and shadow p2 (Slides)</a></li>
                                    <li className="list-group-item"><a href="/computer_graphics/presentations/08-03.pptx">Light and shadow p3 (Slides)</a></li>
                                    <li className="list-group-item"><Link to={`/courses/compute-graphics/assignments/CGassignment_08`}>Assignment 8 - Light and shadow</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/computer-graphics/exams/midterm`}>Midterm exam</Link></li>
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
                                    <li className="list-group-item"><Link to={`/courses/ui/assignments/UIassignment_01`}>Assignment 1 - Getting to know you</Link></li>
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
                                    <li className="list-group-item"><Link to={`/courses/ui/pages/project1`}>Smart Object</Link></li>
                                    <li className="list-group-item"><a href="/ui/presentations/03-01-sketching-p1.pptx">Sketching for Brainstorming (Slides)</a></li>
                                    <li className="list-group-item"><Link to={`/courses/ui/pages/inclass_01`}>Sketching practice 1</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/ui/pages/inclass_02`}>Sketching practice 2</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/ui/pages/inclass_03`}>Sketching practice 3</Link></li>
                                    <li className="list-group-item"><a href="/ui/presentations/03-02-sketching-p2.pptx">Sketching the Interface (Slides)</a></li>
                                    <li className="list-group-item"><Link to={`/courses/ui/pages/inclass_04`}>Sketching the Interface practice</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/ui/assignments/UIassignment_02`}>Assignment 2 - Sketching practice</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/ui/assignments/UIassignment_03`}>Assignment 3 - Project 1 check in</Link></li>                                  
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
                                    <li className="list-group-item"><Link to={`/courses/ui/pages/tutorial0`}>The Web tutorial</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/ui/pages/inclass_05`}>HTML practice</Link></li>
                                    <li className="list-group-item"><a href="/ui/presentations/04-02.pptx">HTML (Slides)</a></li>
                                    <li className="list-group-item"><Link to={`/courses/ui/pages/inclass_06`}>HTML practice</Link></li>
                                    <li className="list-group-item"><a href="/ui/presentations/04-02-html-css.pptx">CSS (Slides)</a></li>
                                    <li className="list-group-item"><Link to={`/courses/ui/pages/inclass_07`}>HTML practice</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/ui/assignments/UIassignment_04`}>Assignment 4 - Html and CSS practice</Link></li>                                  
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
                                    <li className="list-group-item"><Link to={`/courses/ui/pages/tutorial3`}>Web server</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/ui/pages/inclass_08`}>Javascript practice</Link></li>
                                    <li className="list-group-item"><a href="/ui/presentations/05-02-javascript-p2.pptx">Javascript part 2 (Slides)</a></li>
                                    <li className="list-group-item"><Link to={`/courses/ui/pages/inclass_09`}>Javascript practice 2</Link></li>
                                    <li className="list-group-item"><a href="/ui/presentations/05-03-javascript-p3.pptx">Javascript part 3 (Slides)</a></li>
                                    <li className="list-group-item"><Link to={`/courses/ui/pages/inclass_10`}>Javascript practice 3</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/ui/assignments/UIassignment_04`}>Assignment 5 - Javascript practice</Link></li>                                  
                                    <li className="list-group-item"><Link to={`/courses/ui/assignments/UIassignment_04`}>Assignment 6 - Which smart object project 1</Link></li>                                  
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
                                    <li className="list-group-item"><Link to={`/courses/ui/pages/inclass_11`}>Layout</Link></li>
                                    <li className="list-group-item"><a href="/ui/presentations/06-03-design-principles-color.pptx">Design 3 (Slides)</a></li>
                                    <li className="list-group-item"><Link to={`/courses/ui/pages/inclass_12`}>Color</Link></li>
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
                                    <li className="list-group-item"><Link to={`/courses/ui/assignments/UI07`}>Project 1 implementation</Link></li>
                                    <li className="list-group-item"><Link to={`/courses/ui/assignments/UI08`}>Project 1 documentation</Link></li>
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
                                    <li className="list-group-item"><Link to={`/courses/senior-design/assignments/SDassignment_01`}>Assignment 1 - First assignment</Link></li>
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
                                    <li className="list-group-item"><Link to={`/courses/senior-design/assignments/SDassignment_02`}>Assignment 2 - User profiles</Link></li>
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
                                    <li className="list-group-item"><Link to={`/courses/senior-design/assignments/SDassignment_03`}>Assignment 3 - Tasks</Link></li>
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
                                    <li className="list-group-item"><Link to={`/courses/senior-design/assignments/SDassignment_04`}>Assignment 4 - Timeline</Link></li>
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
                                    <li className="list-group-item"><Link to={`/courses/senior-design/assignments/SDassignment_05`}>Assignment 5 - Project status update</Link></li>
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
                                    <li className="list-group-item"><Link to={`/courses/senior-design/assignments/SDassignment_06`}>Assignment 6 - Project status update</Link></li>
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