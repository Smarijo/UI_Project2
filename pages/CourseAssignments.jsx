import React from "react"

class CourseAssignments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return(
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Assignment Name</th>
                            <th>Date Due</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default CourseAssignments