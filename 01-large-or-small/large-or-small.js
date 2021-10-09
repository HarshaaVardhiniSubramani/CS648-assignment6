var num1;
var num2;
var entry;

entry = window.prompt("Enter first number");
num1 = parseInt(entry,10);
document.write("First number is:" + num1 + "<br>");

entry = window.prompt("Enter second number");
num2 = parseInt(entry,10);
document.write("Second number is:" + num2 + "<br>");

if(num1===num2){
    document.write("Both the numbers are equal");
} else if(num1>num2){
    document.write("Bigger number is:" + num1);
} else{
    document.write("The larger number is:" + num2);
}