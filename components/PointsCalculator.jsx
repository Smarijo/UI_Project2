import values from '../src/assignments.json';

function PointsCalculator() {

    var assignments = values["Senior Design"];
    var earnedPoints = 0;

    for (let i = 0; i < assignments.length; i++) {
        if (assignments[i].points_earned != "na" && assignments[i].points_earned != "0") {
            earnedPoints += parseInt(assignments[i].points_earned)
        }
    }
    assignments = values["UI"]
    for (let i = 0; i < assignments.length; i++) {
        if (assignments[i].points_earned != "na" && assignments[i].points_earned != "0") {
            earnedPoints += parseInt(assignments[i].points_earned)
        }
    }
    assignments = values["Computer Graphics"]
    for (let i = 0; i < assignments.length; i++) {
        if (assignments[i].points_earned != "na" && assignments[i].points_earned != "0") {            
            earnedPoints += parseInt(assignments[i].points_earned)
        }
    }
    return earnedPoints
}

export default PointsCalculator