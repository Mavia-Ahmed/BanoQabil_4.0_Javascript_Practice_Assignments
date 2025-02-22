// a. Take subject names
var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

// b. Total marks
var totalMarks = 100;

// c. Take obtained marks
var marks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
var marks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var marks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// d. Calculate total and percentage
var totalObtained = marks1 + marks2 + marks3;
var percentage = (totalObtained / (totalMarks * 3)) * 100;

// e. Show result in table format
document.write("<table border='1'><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td><td>" + ((marks1 / totalMarks) * 100) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td><td>" + ((marks2 / totalMarks) * 100) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td><td>" + ((marks3 / totalMarks) * 100) + "%</td></tr>");
document.write("<tr><td colspan='2'><b>Total</b></td><td><b>" + totalObtained + "</b></td><td><b>" + percentage.toFixed(2) + "%</b></td></tr>");
document.write("</table>");
