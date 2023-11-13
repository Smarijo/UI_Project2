import React from "react"
import assignmentsJson from '../src/assignments.json';
import Sidebar from "../components/Sidebar";

class Assignments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return(
            <>
                <div className="Home" id="outer-container">
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                </div>
                <div style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                    <br></br>
                    <h2 className="ps-2">Assignments</h2>
                    <GetAssignmentTables></GetAssignmentTables>
                </div>
            </>
        )
    }
}

function GetAssignmentTables()
{
    let jsonRaw = assignmentsJson;
    let keys = Object.keys(jsonRaw);

    let tables = [];
    for(let k = 0; k < keys.length; k++)
    {
        let body = GetAssignmentsTableBody(keys[k])
        tables.push(
            <div>
                <h3>{keys[k]}</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Assignment Name</th>
                            <th>Date Due</th>
                            <th>Points</th>
                            <th>Score (if applicable)</th>
                        </tr>
                    </thead>
                    {body}
                </table>
            </div>
        )
    }
    return(<div className="px-2">{tables}</div>)
}

function GetAssignmentsTableBody(key)
{
    let jsonRaw = assignmentsJson;
    let assignments = [];
    let assignmentsForClass = jsonRaw[key];

    for(let j = 0; j < assignmentsForClass.length; j++){
        if(assignmentsForClass[j]["type"] == "assignment"){
            assignments.push(assignmentsForClass[j]);
        }
    }
    
    let items = [];

    for(let i = 0; i < assignments.length; i++){
        let assignment = assignments[i];
        items.push(
        <tr>
            <td>{assignment["title"]}</td>
            <td>{assignment["end_or_due"]}</td>
            <td>{assignment["points"]}</td>
            <td>{assignment["points_earned"]}</td>
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