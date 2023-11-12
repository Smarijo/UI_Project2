import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ShopButton from '../components/ShopButton'
import '/pages/Main.css';
import '/pages/Shop.css'
import { Link } from 'react-router-dom';
import AssignmentsBox from '../components/AssignmentsBox'



function Main() {

    return (
        <>
            <div className='assignments-container'>
                <div className='text-center'>
                    <AssignmentsBox></AssignmentsBox>
                </div>
            </div>
            <div className='grades-container'>
                <div className='text-center'>
                    <h2>Grades</h2>
                    <br></br>
                    <div className='course' id='senior-design'>
                        <div style={{ width: 80, height: 80, display: 'inline-block' }}>
                            <CircularProgressbar value={66} text="66%"/>
                        </div>
                        <Link to={`/courses/senior-design`}><p>Senior Design</p></Link>
                    </div>
                    <div className='course' id='ui'>
                        <div style={{ width: 80, height: 80, display: 'inline-block' }}>
                            <CircularProgressbar value={70} text="70%"/>
                        </div>
                        <Link to={`/courses/ui`}><p>UI</p></Link>
                    </div>
                    <div className='course' id='computer-graphics'>
                        <div style={{ width: 80, height: 80, display: 'inline-block' }}>
                            <CircularProgressbar value={50} text="50%" />
                        </div>
                        <Link to={`/courses/computer-graphics`}><p>Computer Graphics</p></Link>
                    </div>
                </div>
            </div>
            <div className='shop-container'>
                <div className='text-center'>
                    <br>
                    </br><h2>points</h2>
                    <br></br>
                    <ShopButton></ShopButton>
                </div>
            </div>
            <div className='car-container'></div>
            <div className='car-stats-container'></div>
        </>
    )
}

export default Main