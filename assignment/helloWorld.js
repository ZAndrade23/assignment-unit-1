console.log('hello world!');

//Variables
//let used to declare a variable
//firstName is name of our variable
//'zach' is the value were assigning
let firstName = 'Zach';
console.log(firstName);

let lastName = 'Andrade';
console.log(lastName);

let fullName = firstName + '' + lastName;
console.log(fullName);

//firstName, lastName and lastName are 
//all strings (text)

//variable set to the number 80
let temperature = 80;
console.log(temperature);

//boolean variable type
let loggedIn = true;
// console log with a string value
console.log('loggedIn', loggedIn);

let isRaining = false;
 
//conditional statement 
//(should either be true or false)
if (loggedIn){
    //if (true) will run this code
    console.log('welcome', fullName)
} else{
    console.log('welcome, Guest!');
}

//&& which is and
// || which is or
//true && false will be false
//true && true will be true
//true || false will be true

//if the temperature is less than 85
//and it's not (!) raining. Let's go
// for a walk.
if (temperature <85 && !isRaining) {
console.log('Go for a walk!');
}else if (isRaining) {
    console.log('Bring an umbrella');
}else {
    console.log('Better to stay inside');
}

//adding to the existing temperature
temperature = temperature + 1;
temperature += 1; //same as the previous line
temperature ++; //same as above but more confusing

//this works with +,-, * and /

temperature -= 2; //subtract 2 from temperature
temperature *= 2; //multiply temperature by 2
console.log('It is now', temperature);

//===checks for equality
//= will change the value AND always return true
if (temperature === 162){
console.log('it is 162!');
}