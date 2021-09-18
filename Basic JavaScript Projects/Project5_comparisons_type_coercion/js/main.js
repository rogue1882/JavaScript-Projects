function coercion() {  // coercion function 
    document.write("10" + 5);
    }


function word() {   // typeof string function
     document.write(typeof "rogue");
     }
             
function number() {  //  typeof number function
    document.write(typeof 3);
    }

    function myFunction() {  //NaN fuctions
        var res = "";
        res = res + isNaN(123) + ": 123<br>";
        res = res + isNaN(NaN) + ": NaN<br>";
        res = res + isNaN(0 / 0) + ": 0 / 0<br>";
        res = res + isNaN(null) + ": null<br>";
      
        document.getElementById("NaN").innerHTML = res;
      }

    function infinity() {  // to infinity and beyond!
        document.getElementById("demo").innerHTML= 2E310;
        }

    function ninfinity() {  //negitive infinity function
            document.getElementById("demo").innerHTML= -3E310;
            }   
            
    function bool() {  // boolean true function
             document.write(10>2);
             }
                
    function lean() {  // boolean false function
             document.write(10<2);
             }

             console.log(2+3);  // console log 1
            
             console.log(10<2) // console log 2

    function DEtrue() {  // Double equal true function
        document.write(10==10);
    }
    
    function DEfalse() { // double equal false function
        document.write(3==11);
    }

    function TEtrue() { // triple equal true function
        X=10;
        Y=10;
        document.write(X===Y);
    }
    
    function TEfalse() { // triple equal false function
        X=82;
        Y="82";
        document.write(X===Y);
    }

    function tetrue() { // triple equal true string
        A= "Magnus";
        B= "Magnus";
        document.write(A===B);
    }

    function TEfalse1() { //Triple equal false different data types
        X=82;
        Y="Eighty Eight";
        document.write(X===Y);
    }

    function TEfalse2() { //triple equal false different values
        X=82;
        Y=12;
        document.write(X===Y);
    }

    function andtrue() {   // And function true
        document.write(5>2 && 10>4);
    }
    
    function andfalse() { // And function false
        document.write(5>10 && 10>4);
    }
    
    
    function ortrue() {  // Or function tru
        document.write(5>10 || 10>4);
    }
    
    
    function orfalse() {  // Or function false
        document.write(5>10 || 10>20);
    }

    function not_Function() {  // Not function False
        document.getElementById("Not").innerHTML= !(20>10);
    }

    function not_Function1() {  // Not function true
        document.getElementById("Not1").innerHTML =!(5>10);
    }