// document.getElementById("h").innerHTML = 25 + 18;




/*
// Switch Case

let input = 2;

switch(input){
    case 1:
        document.write("Continue");
        break;
    case "y":
        document.write("Continue");
        break;
    case "yes":
        document.write("Continue");
            break;
    case 0:
        document.write("End");
            break;
    case "n":
        document.write("End");
            break;
    case "no":
        document.write("End");
        break;
    default :
        document.write("Give some Valid Input");
}
*/



/*
// loops

let counter = 1;

while(counter <= 10){
    document.write('Hello World');
    counter++;
}
*/

/*
do{
    document.write('Hello World');
    counter++;
} while(counter <=10);
*/

/*
for(let counter = 1; counter <=80; counter++){
    document.write("Hellow World");
}
*/

/*
for(let counter = 1; counter <=10; counter++){
    document.write("Hello World"); // document.write("Hello World", "<br>");
    document.write('<br>');
}
*/

/*
// Break
for(let counter = 1; counter <=10; counter++){
    if(counter==5){
        break;
    }
    document.write(counter);
    document.write('<br>');
}
*/

/*
// Continue
for(let counter = 1; counter <=10; counter++){
    if(counter==5){
        continue;
    }
    document.write(counter);
    document.write('<br>');
}
*/


/*
// Nested Loop

for(let counter = 1; counter <=10; counter++){
    document.write(counter, "<br>");

    for(let counter2 = 1; counter2 <3; counter2++){

        if(counter == 7){
            break;
        }

        document.write("Welcome", "<br>");
    }
}
*/

/*
outer: for(let counter = 1; counter <=10; counter++){
    document.write(counter, "<br>");

    for(let counter2 = 1; counter2 <3; counter2++){

        if(counter == 7){
            break outer;
        }

        document.write("Welcome", "<br>");
    }
}
*/

/*
// Pop ups

// Alert
alert("Welcome !");

// Prompt

prompt("Enter the value !");

let age = prompt('enter your age');

if(age >= 15){
    document.write("You are eligible for vote !");
}else{
    document.write("You are not eligible for vote !");
}

// confirm

confirm("are you sure ?");
*/

/*
// Data Type Conversion

let tp = 1;
document.write(typeof tp);

let greeting = "Welcome !";
document.write(greeting, "<br>");

document.write(typeof greeting);

let tp = "2" + 9;
document.write(typeof tp);

let value = 0;
value = Boolean(value); //String() Number() Boolean()
document.write(value, "<br>");
document.write(typeof value);

let hours = 4 * 22;
document.write(hours);
*/

// String Manupulation

// let str = "Ilyas";

// let name = `Welcome ${str} !`; // template literal

// document.write(name);

// scaping spacial characters
// let name = "Ilyas Sayyed"; // \n for Enter, \t for Tab, \\ or \/for slash, \" or \' for quotations
// console.log(name.length); // for number of string characters

// console.log(name[3]); // perticular character

let firstName = "Ilyas";
let middleName = "Iqbal";
let lastName = "Sayyed";

// document.write(firstName +" "+ lastName) // concatenate " " for space between strings.

// let name = firstName.concat(" ", middleName, " ",lastName); // Concatenate 2

// document.write(name);

// SubString Extract

let sentance = "My name is Naruto Uzumaki."

let name = sentance.substr(11,14); // ("char number","length number")

document.write(name, "<br>");

// char positions

let position = sentance.indexOf("Uzumaki");

document.write(position);