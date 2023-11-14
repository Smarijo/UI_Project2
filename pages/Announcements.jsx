import Sidebar from "../components/Sidebar";
import { useParams } from 'react-router-dom';

function Announcements() {
    let announcements = {
        "announcements":[
            {"class":"senior-design", "subject":"Project checkpoint Due", "content":"Just a reminder that the project checkpoint is due!", "date":"2023-11-13"},
            {"class":"senior-design", "subject":"Midterm Info", "content":"Our midterm is coming up, make sure you study!", "date":"2023-11-12"},
            {"class":"senior-design", "subject":"Class Canceled", "content":"I am cancelling class today, 10-20.", "date":"2023-10-20"},
            {"class":"senior-design", "subject":"Welcome to Class", "content":" Welcome to senior design everyone!", "date":"2023-09-13"},
            {"class":"ui", "subject":"Final project", "content":"The rubric for the final project comes out today.", "date":"2023-11-13"},
            {"class":"ui", "subject":"Midterm info", "content":"Our midterm is today, please be sure to go over our study guide!", "date":"2023-10-01"},
            {"class":"ui", "subject":"Welcome to Class!", "content":"Welcome to UI design! Make sure you are on time for our first day.", "date":"2023-08-28"},
            {"class":"computer-graphics", "subject":"Delayed Grading", "content":"Sorry for the delay on midterm grades, they will be out this week", "date":"2023-11-13"},
            {"class":"computer-graphics", "subject":"Some extra reading", "content":"Please make sure you read chapter 3 before class today.", "date":"2023-09-20"},
        ]
    }

    const params = useParams();
    const courseName = params.course;

    let items = [];
    for (let i = 0; i < announcements["announcements"].length; i++){
        if(courseName == announcements["announcements"][i]["class"])
            items.push(AnnouncementItem(announcements["announcements"][i]));
    }

    return (
        <>
            <div className="Home" id="outer-container">
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            </div>
            <div style={{position: 'fixed', top: 0, left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '50%', height: '50%' }}>
                <h1>Announcements</h1>
            </div>
            <div className="list-group" style={{marginTop: 80, marginLeft:80}}>
                {items}
            </div>
        </>
    )
}

function AnnouncementItem(announcement){
    let color = {
        backgroundColor: 'white',
    }
    //If announcement is less than a day old, highlight it
    if(Math.abs(Date.parse(announcement.date) - new Date()) < 86400000){
        color = {backgroundColor: 'yellow',}
    }

    return(
    <div className="list-group-item" style={color} key={announcement["subject"]}>
        <div className="row">
            <div className="col-10">
                <strong>{announcement.subject}</strong><br></br>
                <p>{announcement.content}</p>
            </div>
            <div className="col-2">
                {announcement.Date}
            </div>
        </div>
    </div>
    )
}

export default Announcements