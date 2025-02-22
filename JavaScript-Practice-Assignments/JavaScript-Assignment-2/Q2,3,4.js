/* Q2 */
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

/*1st Result */
document.write("The 1st Result is: ",result, "<br>");
/*2nd Result */
document.write("The 2nd Reult is: ",--a - --b + ++b + b--, "<br><br>");

/* Out put at each stage */
document.write("Explaining OutPut at each stage <br><br>");
document.write("at --a is: ",--a,"<br><br>");
document.write("at --a - --b is: ",--a - --b, "<br><br>");
document.write("at --a - --b + ++b is: ",--a - --b + ++b, "<br><br>");
document.write("at --a - --b + ++b + b--: ",--a - --b + ++b + b--, "<br><br>");
/*3rd Result */
document.write("The 3rd Result is: ",result, "<br>,<br>,<br>");


/* Q3 */
var name = prompt("Enter your name: ");
alert(`Assalam o Alaikum  ${name} Khush Aam deed` );


/* Q4 */
var num = prompt("Enter a number for multiplication table:", 5);
num = parseInt(num);

document.write("<h3>Multiplication Table of " + num + "</h3>");
for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}
