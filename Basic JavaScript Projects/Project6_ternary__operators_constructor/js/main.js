function Ride_Function() {  // Ternary function for ride
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride =(Height<52) ? "You are to short" : "You are tall enough";
    document.getElementById("Ride").innerHTML  = Can_ride + " to ride.";
}

function Vote_Function() {  // Ternary function for voting
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote =(Age <17) ? "You are to young" : "You are old enough";
    document.getElementById("Vote").innerHTML  = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color)   { //Keywords and constructors function
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

const George = new Vehicle("Ford", "Mustang", 1967, "Black");  //constructor and new 

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik Drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}



function car() {   // added constructor and function to print our new Vehicle
    document.getElementById("New_and_This").innerHTML = "George Drives a " + George.Vehicle_Model;
}

function count_Function() {  // nested function 
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
    }



