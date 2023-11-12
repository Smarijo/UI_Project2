import Sidebar from "../components/Sidebar";

function Zoom() {
    return (
        <>
            <div className="Home" id="outer-container">
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            </div>
            <div style={{position: 'fixed', left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '50%', height: '50%' }}>
                <h1>Zoom functionality coming soon!</h1>
            </div>
        </>
    )
}
export default Zoom