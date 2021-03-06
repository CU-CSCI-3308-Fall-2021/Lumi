function openModal() {
    var myInput = document.getElementById("psw");
    var confirmMyInput = document.getElementById("cpsw");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    var match = document.getElementById("match");
  
    myInput.onkeyup = function () {
 
      var lowerCaseLetters = /[a-z]/g;
      var upperCaseLetters = /[A-Z]/g; 
      var numbers = /[0-9]/g; 
      var minLength = 8; 
      if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
      }
      // Validate capital letters
      if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }
  
 
      if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
      }
  
      if (myInput.value.length >= minLength) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }

    };
    console.log(letter.classList);

    confirmMyInput.onkeyup = function () {
      // Switched the positions of true false, and used .value as attribute to fix the modal
      // In addition, changed the values that are being compared
      var passEqualsConfPass = (myInput.value == confirmMyInput.value && myInput.value != "" && confirmMyInput.value != "") ? true:false;
      if (passEqualsConfPass) {
        match.classList.remove("invalid");
        match.classList.add("valid");
      } else {
        match.classList.remove("valid");
        match.classList.add("invalid");
      }
      enableButton(letter, capital, number, length, match);
    };
  };
  
  function enableButton(letter, capital, number, length, match) {
    var button = document.getElementById("my_submit_button");
    // Changed the condition statement
    var condition = (letter.classList.value === "valid" && capital.classList.value === "valid" && capital.classList.value === "valid" && length.classList.value === "valid" && match.classList.value === "valid") ? true:false;

    if (condition) {
      button.disabled = false;
    };
  };
  
