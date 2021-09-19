function full_Sentence() {  // js Concat function
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var Whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = Whole_sentence;
}

function slice_Method() {  // js Slice function
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function Upper_Case() {
    var str = "Welcome to my Nightmare!";
    var res = str.toUpperCase();
    document.getElementById("alice").innerHTML = res;
  }

function Search() {  // Search function
    let str = "Visit LAFilm"; 
document.getElementById("demo").innerHTML = str.search("LAFilm");
}

function string_Method() { //numbers method function
    var X=182;
    document.getElementById("Numbers_to_string").innerHTML= X.toString();
}

function precision_Method() { // toPrecision function
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fix() {  // toFixed function
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("new").innerHTML = n;
  }

  function Shinedown() {  // valueof function
    let str = "I wrote the sound of Madness";
    document.getElementById("cult").innerHTML = str.valueOf();
    }



