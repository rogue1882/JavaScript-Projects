function subtract() { //subtraction function code
    var Subtraction = 5-2;
    document.getElementById("math").innerHTML ="5-2 =" + Subtraction;
     }  

function multiplication() { // class multiplication format
     var simple_math = 6*8;
     document.getElementById("math").innerHTML = "6 x 8 =" + simple_math;
    }  

function add() {//Addition function
    var addition = 100+59; 
     document.getElementById("math").innerHTML ="100+59 =" + addition; //event
        }

function division() { //class division format
    var simple_math = 48/6;
    document.getElementById("math").innerHTML="48/6 =" + simple_math;
     } 
            
            
function step_up() {
    var X=5;  //Increment syntax built as a function
     X++;
    document.write(X) ;
            }


function step_down() {
    var X= 5;  //decrement syntax built as a function
    X--;
     document.write(X) ;
     }  
     
function math_sqrt() {
    var sqrt = Math.sqrt(9); //math object method
document.write(sqrt);
}
   
function modulus_operator() { //class format 
    var simple_math =25 % 6;
    document.getElementById("math").innerHTML = "When you divide 25 by 6 you have a remainder of: "+simple_math;
} 

function math_random() { // function for math.random
    document.getElementById("math").innerHTML =
Math.floor(Math.random() * 101);
}
