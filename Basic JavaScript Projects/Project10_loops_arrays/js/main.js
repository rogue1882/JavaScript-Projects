function Call_Loop() {  //-- Loop function while
    var Digit = "";
    var X =1;
    while (X< 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function ST_length() {  //-- STR Length function
    let str = "How long is this String";
    document.getElementById("length").innerHTML = str.length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; // for loop function
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] +  "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { // Array function
    var Cat_Picture= [];
    Cat_Picture [0] = "sleeping";
    Cat_Picture [1] = "playing";
    Cat_Picture [2] = "eating";
    Cat_Picture [3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture [2] + ".";  
}

function constant_function() {  // CONST fuction with an added property and va;ue and one changed
    const Musical_Instrument = {type: "guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
     Musical_Instrument.type  + " was " + Musical_Instrument.price;
}

function Let_Var() { // Let and Var Function
    var X = 82;
    document.write(X);
    {
        let X = 33;
        document.write("<br>" + X);
    }
    document.write("<br>" + X);
}

function test() { // return function
    return Math.PI;
    }
    document.getElementById("Pi").innerHTML= test(); 


    let car= {
        make: "Dodge ",
        model: "Viper ",
        year: "2021 ",
        colr: "red ",
        description : Function () {
            return "The car is a " + this.year + this.coloe + this.make + this.model;
        }
    };
    document.getElementById("Car_Object").innerHTML = car.description();

