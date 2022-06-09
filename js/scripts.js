



function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}



  // Smooth scrolling for cross browser compatibility//

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});





/* multiline comment
console.log("Hello world")

var escapedText1 = "He said: \"Yes!\", that's for sure";
var text2 = "Hello, spaces are also OK!";
var numberInteger = 456;
var emptyVariable = null;

console.log(escapedText1,text2, numberInteger)
console.log(thisVariableDoesntExist); // Will output undefined
console.log(emptyVariable); // Outputs Null



Examples of Strings
var text1 = "Hello";
var text2 = "Hello, spaces are also OK!";
var text3 = 'Single quotes are valid too.';

Examples of escaping with \ \
var escapedText1 = "He said: \"Yes!\", that's for sure";
var escapedText2 = 'He said: "Yes!", that\'s for sure';

Examples of Numbers/Integers
var numberInteger = 456;
var numberInteger2 = -345; // This is negative integer
var numberFloat = 50.25;

Examples of Boolean
var boolean1 = true;
var boolean2 = false;
var notABoolean = "false"; //This is just the string "false", not false!


Undefined
console.log(thisVariableDoesntExist); // Will output undefined

Null
var emptyVariable = null;
var notNullButAString = "null";
console.log(doesntExist); // Outputs undefined
console.log(emptyVariable); // Outputs Null
console.log(notNullButAString); // Outputs "null" - not the same as null!

defining an object:
var person = {
  name: "John",
  age: 39
};


var myArray = [1,2];
myArray.push(3);
myArray.push("Test");
console.log(myArray); // Will output: [1,2,3, "Test"]

*/

// single line comment //
