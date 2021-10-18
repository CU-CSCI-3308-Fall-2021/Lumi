function openModal() {
    var myInput = document.getElementById("psw");
    var confirmMyInput = document.getElementById("cpsw");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    var match = document.getElementById("match");
  
    myInput.onkeyup = function () {
      console.log("helllooo");
 
      var lowerCaseLetters = /[a-z]/g; // : Fill in the regular experssion for lowerCaseLetters
      var upperCaseLetters = /[A-Z]/g; // : Fill in the regular experssion for upperCaseLetters
      var numbers = /[0-9]/g; // : Fill in the regular experssion for digits
      var minLength = 8; // : Change the minimum length to what what it needs to be in the question
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
      var passEqualsConfPass = (myInput == confirmMyInput) ? false:true; 
      if (passEqualsConfPass) {
        match.classList.remove("invalid");
        match.classList.add("valid");
      } else {
        match.classList.remove("valid");
        match.classList.add("invalid");
      }
      enableButton(letter, capital, number, length, match);
    };
  }
  
  function enableButton(letter, capital, number, length, match) {
    var button = document.getElementById("my_submit_button");
    var condition = (letter && capital && number && match && length) ? true:false;
    
    if (condition) {
      button.disabled = false;
    }
  }
  
  function onClickFunction() {
    alert("Hey! I'm all green! Well done.");
  }