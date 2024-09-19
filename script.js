
//=================JavaScript Assignment

// 01:Alert:-
alert("Saheba Kamal")


// 02:Ternary Operator:-
var myName = "Saheba";
var message = "Mistakes are proof that you are learning.\n.\n.\nSo Debug, fix, and move forward.";


alert(`Hello, my name is ${myName} \nand I just want to tell all of you that ${message}`);

console.log(`My Name is ${myName} \nand I just want to tell all of you that ${message}`);

//03:Pre incriment,pre decriment & post incriment,post decriment:-
var a = 4
var b = 2
var result = (a++ + --b - --a + b++ + a + b)

console.log(result)

//04:if,else and else if statement:-

var enroll = prompt("Did You Enroll In This Course?");
var secQues = prompt("Do You Have Your ID Card?");
var thirdQues = prompt("Your Trainer Name:");

if (enroll === "yes","Yes","YES" && secQues === "yes","yes i have","Yes I Have","Yes","YES" && thirdQues == "Miss Manaheel Jamil"){
    alert("Classes:\nDays:"+" "+"Sat & Tues\nTiming:"+" "+"11:00am to 02:00pm");
}

else if (thirdQues == "Miss Minahil Irfan"){
    alert("Class:\nDays:"+" "+"Thurs,Sat & Tues\nTiming:"+" "+"09:00am to 11:00am");
}

else{
    alert("Try Again...!")
}

