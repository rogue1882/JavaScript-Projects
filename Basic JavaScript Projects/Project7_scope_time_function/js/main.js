

var X =10;  //Add numbers gloc\bal function 1
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() { // Add numbers global function 2 
    document.write(X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() { //Add numbers local function 1 
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_4() { // Add numbers local function 2
    document.write(X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_5() { //Add numbers console function 1
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_6() {  // Add numbers console function 2
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function get_Date() { // Example js code for if statement  
    if (new Date().getHours() <18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

if (18>17) { // if condition example
    document.write("You may enter the Funhouse.")
}

function Age_Function() { //If else function
    Age = document.getElementById("Age").value ;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enigh to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {  // Else if function
    var Time= new Date().getHours();
    var Reply;
    if (Time<12 == Time>0) {
        Reply = "It is morning time!";
    }
    else if (Time>12 == Time <18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}



