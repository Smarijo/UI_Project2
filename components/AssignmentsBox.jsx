import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Assignments from "../pages/Assignments";
import assignmentsJson from '../src/assignments.json';


class AssignmentsBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return(
            <>
                <div className="card">
                    <Link to="assignments" className="card-header">
                        Upcoming Assignments
                    </Link>
                    <div className="list-group list-group-flush">
                        <div className="list-group-item overflow-auto" style={{height: 350 }}>
                            <GetUpcomingAssignments></GetUpcomingAssignments>
                        </div>
                        <Link to="assignments" className="card-header">
                            Recent Assignments
                        </Link>
                        <div className="list-group-item overflow-auto" style={{height:350}}>
                            <GetCompletedAssignments></GetCompletedAssignments>
                        </div>
                    </div>
                    
                </div>
            </>
        );
    }
}

function GetUpcomingAssignments()
{
    let jsonRaw = assignmentsJson;
    let keys = Object.keys(jsonRaw);
    let assignments = [];

    for(let k = 0; k < keys.length; k++){
        let assignmentsForClass = assignmentsJson[keys[k]];
        for(let j = 0; j < assignmentsForClass.length; j++){
            if(assignmentsForClass[j]["type"] == "assignment" && Date.parse(assignmentsForClass[j]["end_or_due"]) > new Date()){
                assignmentsForClass[j]["className"] = keys[k];
                assignments.push(assignmentsForClass[j]);
            }
        }
    }
    let items = [];

    for(let i = 0; i < assignments.length; i++){
        let assignment = assignments[i];
        items.push(<div className="list-group-item" key={"upcoming" + i}>{assignment["title"] + " - " + assignment["className"] + " - due: " + assignment["end_or_due"]}</div>)
    }
    return (
        <div className="list-group list-group-flush">
            {items}
        </div>
    )
}

function GetCompletedAssignments()
{
    let jsonRaw = assignmentsJson;
    let keys = Object.keys(jsonRaw);
    let assignments = [];

    for(let k = 0; k < keys.length; k++){
        let assignmentsForClass = assignmentsJson[keys[k]];
        for(let j = 0; j < assignmentsForClass.length; j++){
            if(assignmentsForClass[j]["type"] == "assignment" && Date.parse(assignmentsForClass[j]["end_or_due"]) < new Date()){
                assignmentsForClass[j]["className"] = keys[k];
                assignments.push(assignmentsForClass[j]);
            }
        }
    }
    let items = [];

    for(let i = 0; i < assignments.length; i++){
        let assignment = assignments[i];
        items.push(<div className="list-group-item" key={"past due" + i}>{assignment["title"] + " - " + assignment["className"] + " - score: " + assignment["points_earned"] + "/" + assignment["points"]}</div>)
    }
    return (
        <div className="list-group list-group-flush">
            {items}
        </div>
    )
}

export default AssignmentsBox