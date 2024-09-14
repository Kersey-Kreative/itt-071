/*
Name: James Kersey
Date: 9/13/24
Program name: Unit 2 - Mario Project 1
Description: 

Demonstrates:  
*/

//Variables _________________________________________________________________
let printPyramid = prompt("Enter pyramid height: ");
let string = "";
//Constant _________________________________________________________________

//Main ______________________________________________________________________
for (let i = 1; i <= printPyramid; i++) {
  // print spaces
  for (let j = 0; j < printPyramid - i; j++) {
    string += " ";
  }
  // print "blocks"
  for (let k = 0; k < i; k++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);