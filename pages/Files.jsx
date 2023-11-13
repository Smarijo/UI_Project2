import { useParams } from 'react-router-dom';
import Sidebar from "../components/Sidebar";

function Files() {
    const params = useParams();
    const courseName = params.course;

    if (courseName == "computer-graphics"){

        return (
            <>
                <div className="Home" id="outer-container">
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                </div>
                {/* <a href={'/' + courseName + '/files/01-01.pptx'} download>Click to download</a> */}
                <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                    <br></br>
                    <h1>Files</h1>
                    <br></br>
                    <h3>Chapter 1</h3>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >01-01.pptx</a>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >01-02.pptx</a>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >01-03.pptx</a>
                    <br></br>
                    <h3>Chapter 2</h3>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >02-01.pptx</a>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >02-02.pptx</a>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >02-03.pptx</a>
                    <br></br>
                    <h3>Chapter 3</h3>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >03-01.pptx</a>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >03-02.pptx</a>
                    <br></br>
                    <h3>Chapter 4</h3>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >04-01.pptx</a>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >04-02.pptx</a>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >04-03.pptx</a>
                    <br></br>
                    <h3>Chapter 5</h3>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >05-01.pptx</a>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >05-02.pptx</a>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >05-03.pptx</a>
                    <br></br>
                    <h3>Chapter 6</h3>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >06-01.pptx</a>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >06-02.pptx</a>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >06-03.pptx</a>
                    <br></br>
                    <h3>Chapter 7</h3>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >07-01.pptx</a>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >07-02.pptx</a>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >07-03.pptx</a>
                    <br></br>
                    <h3>Chapter 8</h3>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >08-01.pptx</a>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >08-02.pptx</a>
                    <a href="/computer_graphics/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >08-03.pptx</a>
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
                {/* <a href={'/' + courseName + '/files/01-01.pptx'} download>Click to download</a> */}
                <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                    <br></br>
                    <h1>Files</h1>
                    <br></br>
                    <h3>Chapter 1</h3>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >01-01.pptx</a>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >01-02.pptx</a>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >01-03.pptx</a>
                    <br></br>
                    <h3>Chapter 2</h3>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >02-01.pptx</a>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >02-02.pptx</a>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >02-03.pptx</a>
                    <br></br>
                    <h3>Chapter 3</h3>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >03-01.pptx</a>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >03-02.pptx</a>
                    <br></br>
                    <h3>Chapter 4</h3>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >04-01.pptx</a>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >04-02.pptx</a>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >04-03.pptx</a>
                    <br></br>
                    <h3>Chapter 5</h3>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >05-01.pptx</a>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >05-02.pptx</a>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >05-03.pptx</a>
                    <br></br>
                    <h3>Chapter 6</h3>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >06-01.pptx</a>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >06-02.pptx</a>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >06-03.pptx</a>
                    <br></br>
                    <h3>Chapter 7</h3>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >07-01.pptx</a>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >07-02.pptx</a>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >07-03.pptx</a>
                    <br></br>
                    <h3>Chapter 8</h3>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >08-01.pptx</a>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >08-02.pptx</a>
                    <a href="/ui/presentations/01-01.pptx"
                        // target="_blank"
                        // rel="noreferrer"
                    >08-03.pptx</a>
                </div>

            </>
        )
    }
    else if (courseName == "senior-design"){

        return (
            <></>
        )
    }

}

export default Files 