import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ShopButton from '../components/ShopButton'
import '/pages/Home.css';
import { Link } from 'react-router-dom';


function Home() {

    return (
        <>
            <div className='assignments-container'>
                <h2>Assignments</h2>
                <br></br>
            </div>
            <div className='grades-container'>
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
                    <p>UI</p>
                </div>
                <div className='course' id='computer-graphics'>
                    <div style={{ width: 80, height: 80, display: 'inline-block' }}>
                        <CircularProgressbar value={50} text="50%" />
                    </div>
                    <p>Computer Graphics</p>
                </div>
            </div>
            <div className='shop-container'>
                <br>
                </br><h2>points</h2>
                <br></br>
                <ShopButton></ShopButton>
            </div>
            <div className='car-container'></div>
            <div className='car-stats-container'></div>
        </>
    )
}

export default Home