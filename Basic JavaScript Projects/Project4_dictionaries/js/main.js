function my_Dictionary() {  //KVP dictionary function
    var Animal = {        // Key  value varibles
        Species: "dog",
        Color:"black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;    //delete operator
    document.getElementById("Dictionary").innerHTML = Animal.Sound;  //before the delete was added the response was Bark! it is now undefined.
}
             
