// Code your solutions in this file
/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

// note we use let above because we know the value will change/needs to change

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    // debugger;
    }
    return gifts;
}

wrapGifts(gifts);
*/

// Test 1

const friends = ["Guadalupe", "Ollie", "Aki"];

const eventName = "surprise";

const messages = []; // creates empty array to store returned messages

function writeCards(friends, eventName) { 
    for (let i = 0; i < friends.length; i++) { // iterate through the various elements in friends
        const message = `Thank you, ${friends[i]}, for the wonderful ${eventName} gift!`;
        messages.push(message); // add each message to this new array
    }
    return messages;
}

console.log(messages);

// Test 2

function countDown(count) {
    if (count > 0 && Number.isInteger(count)) {
        while (count >= 0) {
            console.log(count);
            count--;
        }
    }
}

countDown(10);