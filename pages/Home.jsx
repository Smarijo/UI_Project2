import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ShopButton from '../components/ShopButton'
import AssignmentsBox from '../components/AssignmentsBox'


function Home() {

    return (
        <>
            //Assignment Container
            <div className='assignments-container'>
                <AssignmentsBox></AssignmentsBox>
            </div>
            //Grades Container
            <div className='grades-container'>
                <h2>Grades</h2>
                <br></br>
                <div style={{ width: '600px', float: 'center' }}>
                    <div style={{ width: 200, height: 200 }}>
                        <CircularProgressbar value={66} />
                    </div>
                    <p>Senior Design</p>
                </div>
                <div style={{ width: '600px', float: 'center' }}>
                    <div style={{ width: 200, height: 200 }}>
                        <CircularProgressbar value={70} />
                    </div>
                    <p>UI</p>
                </div>
                <div style={{ width: '600px', float: 'center' }}>
                    <div style={{ width: 200, height: 200 }}>
                        <CircularProgressbar value={50} />
                    </div>
                    <p>Computer Graphics</p>
                </div>
            </div>
            //Shop Button
            <div className='shop-container'>
                <ShopButton></ShopButton>
            </div>
            //Car
            <div className='car-container'></div>
        </>
    )
}

export default Home