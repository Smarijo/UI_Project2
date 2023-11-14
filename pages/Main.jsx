import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ShopButton from '../components/ShopButton';
import '/pages/Main.css';
import '/pages/Shop.css';
import { Link } from 'react-router-dom';
import AssignmentsBox from '../components/AssignmentsBox';
import GradesCalculator from '../components/GradesCalculator';
import { useBalance } from '../components/BalanceContext';
import PointsCalculator from '../components/PointsCalculator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Add this line
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import RaceButton from '../components/RaceButton';
import carImage from '../components/images/maincar.png'

function Main() {
    const SDGrade = GradesCalculator('senior-design');
    const UIGrade = GradesCalculator('ui');
    const CGGrade = GradesCalculator('computer-graphics');

    const { balance } = useBalance();
    const { carStats } = useBalance();

    const progressBarColor = (percentage) => {
        if (percentage < 70) {
            return '#e74c3c'; // Modern Red
        } else if (percentage >= 70 && percentage < 90) {
            return '#f1c40f'; // Modern Yellow
        } else {
            return '#2ecc71'; // Modern Green
        }
    };

    const renderStars = (count) => {
        return Array.from({ length: 3 }, (_, i) => (
            <span key={i} className={i < count ? 'star' : 'star-inactive'}>★</span>
        ));
    };

    return (
        <>
            <div className='assignments-container'>
                <div className='text-center'>
                    <AssignmentsBox />
                </div>
            </div>
            <div className='grades-container'>
                <div className='text-center'>
                    <h2>Grades</h2>
                    <br></br>
                    <div className='course' id='senior-design'>
                        <div style={{ width: 80, height: 80, display: 'inline-block' }}>
                            <CircularProgressbar 
                                value={SDGrade} 
                                text={`${SDGrade}%`}
                                styles={buildStyles({
                                    pathColor: progressBarColor(SDGrade),
                                    textColor: progressBarColor(SDGrade),
                                })}
                            />
                        </div>
                        <Link to={`/courses/senior-design`}><p style={{ color: '#fff' }}>Senior Design</p></Link>
                    </div>
                    <div className='course' id='ui'>
                        <div style={{ width: 80, height: 80, display: 'inline-block' }}>
                            <CircularProgressbar 
                                value={UIGrade} 
                                text={`${UIGrade}%`}
                                styles={buildStyles({
                                    pathColor: progressBarColor(UIGrade),
                                    textColor: progressBarColor(UIGrade),
                                })}
                            />
                        </div>
                        <Link to={`/courses/ui`}><p style={{ color: '#fff' }}>UI</p></Link>
                    </div>
                    <div className='course' id='computer-graphics'>
                        <div style={{ width: 80, height: 80, display: 'inline-block' }}>
                            <CircularProgressbar 
                                value={CGGrade} 
                                text={`${CGGrade}%`}
                                styles={buildStyles({
                                    pathColor: progressBarColor(CGGrade),
                                    textColor: progressBarColor(CGGrade),
                                })}
                            />
                        </div>
                        <Link to={`/courses/computer-graphics`}><p style={{ color: '#fff' }}>Computer Graphics</p></Link>
                    </div>
                </div>
            </div>
            <div className='shop-container'>
                <div className='text-center'>
                    <br></br>
                    <h2>
                    <FontAwesomeIcon icon={faCoins} style={{ color: 'gold' }} /> {balance} 
</h2>

                    <br></br>
                    <ShopButton />
                </div>
            </div>
            <div className='car-stats-container'>
                <div className='text-center'>
                    <h2>Car Stats</h2>
                    <div className='car-stat'>
                        <p>Handling: {renderStars(carStats.handling)}</p>
                    </div>
                    <div className='car-stat'>
                        <p>Speed: {renderStars(carStats.speed)}</p>
                    </div>
                    <div className='car-stat'>
                        <p>Braking: {renderStars(carStats.braking)}</p>
                    </div>
                </div>
            </div>
            <div className='car-container'>
                <RaceButton />
            </div>
            <div className="car-image-center">
                <img src={carImage} alt="Car" />
            </div>
        </>
    );
}

export default Main;
