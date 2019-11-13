'use strict'
var userName = prompt(' What is your name?');

alert('welcome' + ' ' + userName);

var counter = 0;

var question = [
    ["I was born in May,is that correct?", "yea in 15 may and my zodiac is Taurus", "noooo why you dont know!!!", "Try again"], ["Do you think I like to travel?", "Who does not like to travel", "there is no logical reason to not like it", "Try again"], ["Do you think I prefer quiet music more than loud?", "Unfortunately I am not", "You guessed", " Try again"], ["Do you think I prefer Breakfast more than dinner?", "sorry... wrong answer", "That is right", " Try again"], ["Do you think I like dogs?", "dogs are nice", "sorry..I like it", "Try again"], ["Do you think I like potato?", "yes..especially if it is crispy", "sorry..I love it more than anything", "Try again"]
]
function knowMe() {
    for (var i = 0; i < 5; i++) {
        var exactArray = question[i];
        var promptQuestion = exactArray[0];
        var posetiveReply = exactArray[1];
        var negativeReply = exactArray[2];
        var defultReply = exactArray[3];
        var userName = prompt(promptQuestion);
        userName = userName.toLowerCase();
        switch (userName) {
            case "yes":
            case "y":
                alert(posetiveReply);
                counter = counter + 1;
                // console.log(userName);
                break;
            case "no":
            case "n":
                alert(negativeReply);
                // console.log(userName);
                break;
            default:
                alert(defultReply);
                // console.log(userName);
                break;
        }
    }
}
knowMe();
alert("Your score is: " + counter);

function myWeight() {
    for (var weight = 0; weight < 4; weight++) {
        var mass = prompt("Guess how much i weight")
        if (mass == 55) {
            alert("how did you know? it is exactly my weight");
            counter = counter + 1;
            // console.log(mass);
            break;
        } else if (mass > 55) {
            alert("too high");
            //console.log(weight);
        } else if (mass < 55) {
            alert(" too low");
            //console.log(mass);
        }
    }
    alert("My weight is 55");
    alert("Your score is: " + counter);
}
myWeight();


function letsPlay() {
    var guess = ['football', 'volleyball', 'Badminton', 'Tennis', 'Horse race', 'Golf'];
    for (var times = 0; times < 6; times++) {
        var go = prompt("I love six sports , So can you guess one of them?");
        switch (go) {
            case guess[0]:
            case guess[1]:
            case guess[2]:
            case guess[3]:
            case guess[4]:
            case guess[5]:
            alert(" yaa that is right :) My fav sports are: Football, Volleyball, Badminton, Tennis, Horse race, Golf");
            counter = counter + 1;
            //console.log(go);
            times = 5;
            break;
            default:
            alert("mmm...that is not true can you try again ")
            // console.log(go);
            break;
        }
    }
    alert("  My fav sports are: Football, Volleyball, Badminton, Tennis, Horse race, Golf ");
}
letsPlay();
alert("Your score is " + counter + " points");
alert("I am grateful for being on my page " + user);








