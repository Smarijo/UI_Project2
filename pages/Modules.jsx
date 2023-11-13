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
                    <h1>Files</h1>
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
                    <h1>Files</h1>
                    <br></br>
                    <Accordion defaultActiveKey={['1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Module 1</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/ui/presentations/01-01-intro.pptx">01-01-intro.pptx</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/01-02-usabilitiy.pptx">01-02-usabilitiy.pptx</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/01-03-norman-principals-discoverability.pptx">01-03-norman-principals-discoverability.pptx</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/01-04-the-user-p1.pptx">01-04-the-user-p1.pptx</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/01-05-the-user-p2.pptx">01-05-the-user-p2.pptx</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/01-06-the-user-p3.pptx">01-06-the-user-p3.pptx</a></li>
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
                                    <li className="list-group-item"><a href="/ui/presentations/03-01-sketching-p1.pptx">03-01-sketching-p1.pptx</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/03-02-sketching-p2.pptx">03-02-sketching-p2.pptx</a></li>
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
                                    <li className="list-group-item"><a href="/ui/presentations/04-01-web-p1.pptx">04-01-web-p1.pptx</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/04-02.pptx">04-02-html-css.pptx</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/04-02-html-css.pptx">04-03-css.pptx</a></li>
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
                                    <li className="list-group-item"><a href="/ui/presentations/05-01-javascript-p1.pptx">05-01-javascript-p1.pptx</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/05-02-javascript-p2.pptx">05-02-javascript-p2.pptx</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/05-03-javascript-p3.pptx">05-03-javascript-p3.pptx</a></li>
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
                                    <li className="list-group-item"><a href="/ui/presentations/06-01-design-principles-p1.pptx">06-01-design-principles-p1.pptx</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/06-02-design-principles-p2.pptx">06-02-design-principles-p2.pptx</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/06-03-design-principles-color.pptx">06-03-design-principles-color.pptx</a></li>
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
                                    <li className="list-group-item"><a href="/ui/presentations/07-02-people.pptx">07-02-people.pptx</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/07-03-people.pptx">07-03-people.pptx</a></li>
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
                                    <li className="list-group-item"><a href="/ui/presentations/08-02-people.pptx">08-02-people.pptx</a></li>
                                    <li className="list-group-item"><a href="/ui/presentations/08-03-people.pptx">08-03-people.pptx</a></li>
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
                            <Accordion.Header><h3>Module 1</h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="/senior_design/presentations/01.pptx">01.pptx</a></li>
                                    <li className="list-group-item"><a href="/senior_design/assignments/assignment_01.html">Assignment 1</a></li>
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
                                    <li className="list-group-item"><a href="/senior_design/presentations/02.pptx">02.pptx</a></li>
                                    <li className="list-group-item"><a href="/senior_design/assignments/assignment_02.html">Assignment 2</a></li>
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
                                    <li className="list-group-item"><a href="/senior_design/presentations/03.pptx">03.pptx</a></li>
                                    <li className="list-group-item"><a href="/senior_design/assignments/assignment_03.html">Assignment 3</a></li>
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
                                    <li className="list-group-item"><a href="/senior_design/presentations/04.pptx">04.pptx</a></li>
                                    <li className="list-group-item"><a href="/senior_design/assignments/assignment_04.html">Assignment 4</a></li>
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
                                    <li className="list-group-item"><a href="/senior_design/presentations/05.pptx">05.pptx</a></li>
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
                                    <li className="list-group-item"><a href="/senior_design/presentations/06.pptx">06.pptx</a></li>
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
                                    <li className="list-group-item"><a href="/senior_design/presentations/07.pptx">07.pptx</a></li>
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
                                    <li className="list-group-item"><a href="/senior_design/presentations/08.pptx">08.pptx</a></li>
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