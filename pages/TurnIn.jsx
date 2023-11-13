import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import UIAssignment_01 from "../course-data/ui/assignments/UIassignment_01";
import UIAssignment_02 from "../course-data/ui/assignments/UIassignment_02";
import UIAssignment_03 from "../course-data/ui/assignments/UIassignment_03";
import UIAssignment_04 from "../course-data/ui/assignments/UIassignment_04";
import UIAssignment_05 from "../course-data/ui/assignments/UIassignment_05";
import UI06 from "../course-data/ui/assignments/UI06";
import UI07 from "../course-data/ui/assignments/UI07";
import UI08 from "../course-data/ui/assignments/UI08";

import SDAssignment_01 from "../course-data/senior_design/assignments/SDassignment_01";
import SDAssignment_02 from "../course-data/senior_design/assignments/SDassignment_02";
import SDAssignment_03 from "../course-data/senior_design/assignments/SDassignment_03";
import SDAssignment_04 from "../course-data/senior_design/assignments/SDassignment_04";
import SDAssignment_05 from "../course-data/senior_design/assignments/SDassignment_05";
import SDAssignment_06 from "../course-data/senior_design/assignments/SDassignment_06";

import CGAssignment_01 from "../course-data/computer_graphics/assignments/CGassignment_01";
import CGAssignment_02 from "../course-data/computer_graphics/assignments/CGassignment_02";
import CGAssignment_03 from "../course-data/computer_graphics/assignments/CGassignment_03";
import CGAssignment_04 from "../course-data/computer_graphics/assignments/CGassignment_04";
import CGAssignment_05 from "../course-data/computer_graphics/assignments/CGassignment_05";
import CGAssignment_06 from "../course-data/computer_graphics/assignments/CGassignment_06";
import CGAssignment_07 from "../course-data/computer_graphics/assignments/CGassignment_07";
import CGAssignment_08 from "../course-data/computer_graphics/assignments/CGassignment_08";
import CGAssignment_09 from "../course-data/computer_graphics/assignments/CGassignment_09";


function TurnIn(){
    let requirements = <></>;

    const params = useParams();
    const className = params.course;
    const assignmentName = params.assignment;

    switch(className)
    {
        case "Senior Design":{
            switch(parseInt(assignmentName.replace('.html', '').slice(-2))){
                case 1:
                    requirements = SDAssignment_01();
                    break;
                case 2:
                    requirements = SDAssignment_02();
                    break;
                case 3:
                    requirements = SDAssignment_03();
                    break;
                case 4:
                    requirements = SDAssignment_04();
                    break;
                case 5:
                    requirements = SDAssignment_05();
                    break;
                case 6:
                    requirements = SDAssignment_06();
                    break;
                default:
                    break;
            }
            break;
        }
        case "UI":{
            switch(parseInt(assignmentName.replace('.html', '').slice(-2))){
                case 1:
                    requirements = UIAssignment_01();
                    break;
                case 2:
                    requirements = UIAssignment_02();
                    break;
                case 3:
                    requirements = UIAssignment_03();
                    break;
                case 4:
                    requirements = UIAssignment_04();
                    break;
                case 5:
                    requirements = UIAssignment_05();
                    break;
                case 6:
                    requirements = UI06();
                    break;
                case 7:
                    requirements = UI07();
                    break;
                case 8:
                    requirements = UI08();
                    break;
                default:
                    break;
            }
            break;
        }
        case "Computer Graphics":{
            switch(parseInt(assignmentName.replace('.html', '').slice(-2))){
                case 1:
                    requirements = CGAssignment_01();
                    break;
                case 2:
                    requirements = CGAssignment_02();
                    break;
                case 3:
                    requirements = CGAssignment_03();
                    break;
                case 4:
                    requirements = CGAssignment_04();
                    break;
                case 5:
                    requirements = CGAssignment_05();
                    break;
                case 6:
                    requirements = CGAssignment_06();
                    break;
                case 7:
                    requirements = CGAssignment_07();
                    break;
                case 8:
                    requirements = CGAssignment_08();
                    break;
                case 9:
                    requirements = CGAssignment_09();
                    break;
                default:
                    break;
            }
            break;
        }
        default:{
            break;
        }
    }

    return(
    <>
        <h2>Turn In Assignment</h2>
        {requirements}
        <form>
            <div className="input-group">
                <label className="form-label">Text Entry:</label>
                <input className="form-control"></input>
            </div>
        </form>
        <Link to={"/courses/" + className.toLowerCase().replace(' ', '-') + '/assignments'} className="btn btn-primary">Turn In Assignment</Link>
    </>
    )
}

export default TurnIn