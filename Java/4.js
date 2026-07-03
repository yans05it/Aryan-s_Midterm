function calculate() {

    var marks = parseInt(document.getElementById("marksBox").value) ;

    var grade = "";
    var gradePoint = "";

    if (marks >= 90) {
        grade = "A";
        gradePoint = "4.0";
    }
    else if (marks >= 85) {
        grade = "A-";
        gradePoint = "3.7";
    }
    else if (marks >= 80) {
        grade = "B+";
        gradePoint = "3.3";
    }
    else if (marks >= 75) {
        grade = "B";
        gradePoint = "3.0";
    }
    else if (marks >= 70) {
        grade = "B-";
        gradePoint = "2.7";
    }
    else if (marks >= 65) {
        grade = "C+";
        gradePoint = "2.3";
    }
    else if (marks >= 60) {
        grade = "C";
        gradePoint = "2.0";
    }
    else if (marks >= 55) {
        grade = "C-";
        gradePoint = "1.7";
    }
    else if (marks >= 50) {
        grade = "D+";
        gradePoint = "1.3";
    }
    else if (marks >= 45) {
        grade = "D";
        gradePoint = "1.0";
    }
    else {
        grade = "F";
        gradePoint = "0";
    }

    console.log("Grade: " + grade);
    console.log("Grade Point: " + gradePoint);

    document.getElementById("gradeBox").value = grade;
    document.getElementById("gradePointBox").value = gradePoint;

}