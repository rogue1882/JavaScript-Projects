function my_Dictionary() {  //KVP dictionary 
    var Animal = {
        Species: "dog",
        Color:"black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;    //delete operator
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}
             
