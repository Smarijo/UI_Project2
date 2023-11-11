import UISyllabus from '../components/UISyllabus';
import UISidebar from "../components/UISidebar";

function UI() {

    return (
        <>
            <div className="Home" id="outer-container">
                <UISidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            </div>
            <div style={{ position: 'fixed', left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                <UISyllabus />
            </div>
        </>
    )
}
    
export default UI