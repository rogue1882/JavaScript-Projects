function validateForm() {
    let x = document.forms["myForm"]["Password"].value;
    if (x == "") {
      alert("Please enter your password");
      return false;
    }
  }