// Code your solutions in this file
//returns an array of thank you messages for each name provided to the function
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names){
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        debugger;
    }
    return thankYouMessages;
}

//invokes console.log once for each number, counting down from the number provided to zero, logs each number when counting down, starting from the number provided
function countDown(number){
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}