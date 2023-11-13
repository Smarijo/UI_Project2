import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ShopButton from '../components/ShopButton'
import '/pages/Main.css';
import '/pages/Shop.css'
import { Link } from 'react-router-dom';
import AssignmentsBox from '../components/AssignmentsBox'
import GradesCalculator from '../components/GradesCalculator'
import PointsCalculator from '../components/PointsCalculator';



function Main() {

    var SDGrade = GradesCalculator('senior-design')
    var UIGrade = GradesCalculator('ui')
    var CGGrade = GradesCalculator('computer-graphics')

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
                            <CircularProgressbar value={SDGrade} text={SDGrade + "%"}/>
                        </div>
                        <Link to={`/courses/senior-design`}><p>Senior Design</p></Link>
                    </div>
                    <div className='course' id='ui'>
                        <div style={{ width: 80, height: 80, display: 'inline-block' }}>
                        <CircularProgressbar value={UIGrade} text={UIGrade + "%"}/>
                        </div>
                        <Link to={`/courses/ui`}><p>UI</p></Link>
                    </div>
                    <div className='course' id='computer-graphics'>
                        <div style={{ width: 80, height: 80, display: 'inline-block' }}>
                        <CircularProgressbar value={CGGrade} text={CGGrade + "%"}/>
                        </div>
                        <Link to={`/courses/computer-graphics`}><p>Computer Graphics</p></Link>
                    </div>
                </div>
            </div>
            <div className='shop-container'>
                <div className='text-center'>
                    <br></br>
                    <h2><PointsCalculator /> points</h2>
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