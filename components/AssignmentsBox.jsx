import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Assignments from "../pages/AllAssignments";


class AssignmentsBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            buttonText: "My Button",
            value: "Assignments",
        };
    }
    
    render(){
        return(
            <>
                <div className="card w-50">
                    <Link to="/assignments" className="card-header">
                        Upcoming Assignments
                    </Link>
                    <div className="card-body">
                        Assignments here
                    </div>
                </div>
            </>
        )
    }
}

export default AssignmentsBox