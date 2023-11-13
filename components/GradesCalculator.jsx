import values from '../src/assignments.json';

function GradesCalculator(courseName) {

    var assignments = values[courseName];
    var totalPointsParticipation = 0;
    var earnedPointsParticipation = 0;
    var totalPointsAssignment = 0;
    var earnedPointsAssignment = 0;
    var totalPointsExams = 0;
    var earnedPointsExams = 0;
    var totalPointsFinal = 0;
    var earnedPointsFinal = 0;
    var totalPointsProjects = 0;
    var earnedPointsProjects = 0;
    var currentGrade = 0;
    var totalPercent = 0;

    for (let i = 0; i < assignments.length; i++) {
        if (assignments[i].points != "na" && assignments[i].points_earned != "na") {
            if (assignments[i].grading == "participation") {
                totalPointsParticipation += parseInt(assignments[i].points);
                earnedPointsParticipation += parseInt(assignments[i].points_earned);
            }
            else if (assignments[i].grading == "assignment") {
                totalPointsAssignment += parseInt(assignments[i].points);
                earnedPointsAssignment += parseInt(assignments[i].points_earned, 10);
            }
            else if (assignments[i].grading == "final_exam") {
                totalPointsFinal += parseInt(assignments[i].points, 10);
                earnedPointsFinal += parseInt(assignments[i].points_earned, 10);
            }
            else if (assignments[i].grading == "project") {
                totalPointsProjects += parseInt(assignments[i].points, 10);
                earnedPointsProjects += parseInt(assignments[i].points_earned, 10);
            }
        }
    }

    if (courseName == "ui") {
        if (totalPointsParticipation > 0) {
            currentGrade += ((earnedPointsParticipation / totalPointsParticipation) * 100) * 5
            totalPercent += 5
        }
        if (totalPointsAssignment > 0) {
            currentGrade += ((earnedPointsAssignment / totalPointsAssignment) * 100) * 10
            totalPercent += 10
        }
        if (totalPointsFinal > 0) {
            currentGrade =  ((earnedPointsFinal / totalPointsFinal) * 100) * 10
            totalPercent += 10
        }
        if (totalPointsProjects > 0) {
            currentGrade = ((earnedPointsProjects / totalPointsProjects) * 100) * 75
            totalPercent += 75
        }
    }
    else if (courseName == "computer-graphics" || courseName == "senior-design") {
        if (totalPointsParticipation > 0) {
            currentGrade += ((earnedPointsParticipation / totalPointsParticipation) * 100) * 10
            totalPercent += 10
        }
        if (totalPointsAssignment > 0) {
            currentGrade += ((earnedPointsAssignment / totalPointsAssignment) * 100) * 50
            totalPercent += 50
        }
        if (totalPointsExams > 0) {
            currentGrade =  ((earnedPointsExams / totalPointsExams) * 100) * 40
            totalPercent += 40
        }
    }

    currentGrade = Math.round(currentGrade / totalPercent)


    return currentGrade
}

export default GradesCalculator