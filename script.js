// Variables
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";


// Password Generation
function generate(){
 var allChars = [];
 var resultPass = "";

// Dynamic variables

var passwordLength = prompt("How many characters would you like your password to be?")

 if (passwordLength < 6){
  alert("Number has to be between 6-120 characters");
  determineLength();

} else if (passwordLength > 120){
  alert("Number has to be between 6-120 characters");
  determineLength();
}

// Confirm the rest of character conditions
 
 else{
     if(confirm("Do you want upper case letters?")){
         Array.prototype.push.apply(allChars, upperArray);
     }

     if(confirm("Do you want lower case letters?")){
         Array.prototype.push.apply(allChars, lowerArray);
     }

     if(confirm("Do you want numbers?")){
         Array.prototype.push.apply(allChars, numberArray);
     }

     if(confirm("Do you want symbols?")){
         Array.prototype.push.apply(allChars, symbolArray);
     }

     if(allChars.length===0){
         alert("You must select at lease 1 type of characters.");
     }

     else{
         for(var i=0; i<passwordLength; i++){
             var random = Math.floor(Math.random()*allChars.length);
             resultPass += allChars[random];
         }
     }
     }

//Result
     document.getElementById("password").innerHTML = resultPass;
}
