import React from "react"
import assignmentsJson from '../src/assignments.json';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import '../pages/Assignments.css'


function Assignments(){
    const params = useParams();
    const courseName = params.course;

    let includedSidebar = <></>

    if(courseName != "all"){
        includedSidebar = 
        <div className="Home" id="outer-container">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        </div>
    }

    return(
        <>
            {includedSidebar}
            <div className="ms-5">
                <h2 className="ms-5">Assignments</h2>
                <GetAssignmentTables params={courseName}></GetAssignmentTables>
            </div>
        </>
    )
}

function GetAssignmentTables(courseName)
{
    let jsonRaw = assignmentsJson;
    
    let keys = [];

    if(courseName["params"] == "all"){
        keys = Object.keys(jsonRaw);
    }
    else{
        if(courseName["params"] == "ui"){
            keys = ["UI"];
        }
        if(courseName["params"] == "senior-design"){
            keys = ["Senior Design"];
        }
        if(courseName["params"] == "computer-graphics"){
            keys = ["Computer Graphics"]
        }
    }

    let tables = [];
    for(let k = 0; k < keys.length; k++)
    {
        let body = GetAssignmentsTableBody(keys[k])
        tables.push(
            <div>
                <h3>{keys[k]}</h3>
                <table className="table table-dark table-striped" >
                    <thead>
                        <tr>
                            <th>Assignment Name</th>
                            <th>Date Due</th>
                            <th>Points</th>
                            <th>Score (if applicable)</th>
                            <th></th>
                        </tr>
                    </thead>
                    {body}
                </table>
            </div>
        )
    }
    return(<div className="ms-5">{tables}</div>)
}

function GetAssignmentsTableBody(key)
{
    let jsonRaw = assignmentsJson;
    let assignments = [];
    let assignmentsForClass = jsonRaw[key];

    for(let j = 0; j < assignmentsForClass.length; j++){
        if(assignmentsForClass[j]["type"] == "assignment"){
            assignmentsForClass[j]["className"] = key;
            assignments.push(assignmentsForClass[j]);
        }
    }
    
    let items = [];

    for(let i = 0; i < assignments.length; i++){
        let assignment = assignments[i];
        let link = "../course-data/" + key + "/assignments/" + assignment["name"]
        items.push(
        <tr>
            <td>{assignment["title"]}</td>
            <td>{assignment["end_or_due"]}</td>
            <td>{assignment["points"]}</td>
            <td>{assignment["points_earned"]}</td>
            <td><Link to={"/courses/" + assignment["className"] + "/assignments/" + assignment["name"]} className="btn btn-primary">Submit Assignment</Link></td>
        </tr>
        )
    }
    return (
        <tbody>
            {items}
        </tbody>
    )
}

export default Assignments