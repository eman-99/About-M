'use strict'
var userName = prompt(' What is your name?');
alert('welcome' + ' ' + userName);

var counter = 1;

var qust1 = prompt('I was born in May, Is that true?');
console.log(qust1);
qust1 = qust1.toLowerCase();
switch (qust1) {
    case 'yes':
    case 'y':
   alert('Yaa..that is true');
   alert('your score is' + counter++);
   
   break;
   case 'no':
   case 'n':
       alert('no..why you do not konw!!');
       break;
       default:
           alert('answer please');
}

var qust2 = prompt('Do you think i like sports?');
console.log(qust2);
qust2 = qust2.toLowerCase();
switch (qust2) {
    case 'yes':
    case 'y':
   alert('Yes I do');
   alert('your score is' + counter++)

   break;
   case 'no':
   case 'n':
       alert('No I love it');
       break;
       default:
           alert('answer please');
}


var qust3 = prompt('Do you think i like to travel?');
console.log(qust3);
qust3 = qust3.toLowerCase();
switch (qust3) {
    case 'yes':
    case 'y':
   alert('who dont like to travel');
   alert('your score is' + counter++)

   break;
   case 'no':
   case 'n':
       alert('why you think so');

       break;
       default:
           alert('answer please');
}

var qust4 = prompt('I prefer dinner more than breakfast,Is that correct?');
console.log(qust4);
qust4 = qust4.toLowerCase();
switch (qust4) {
    case 'yes':
    case 'y':
   alert('yaa I do');
   break;
   case 'no':
   case 'n':
       alert('false');
       break;
       default:
           alert('answer please');
}


var qust5 = prompt('Do you think I love dogs?');
console.log(qust5);
qust5 = qust5.toLowerCase();
switch (qust5) {
    case 'yes':
    case 'y':
   alert('Dogs are so nice');
   alert('your score is' + counter++)

   break;
   case 'no':
   case 'n':
       alert('noo i love dogs');
       break;
       default:
           alert('answer please');
}

for (var times = 0; times < 4; times++) {
    var weight = prompt("try to guess my weight...Note:it is between 50-60");
    if (weight == 55) {
        alert("WOW you guess it..it is 55 ");
           alert('your score is' + counter++)

        //console.log(mass);
        break;

    } else if (weight > 55) {
        alert("too high");
        //   console.log(mass);
    } else if (weight < 55) {
        alert(" too low");
    //   console.log(mass);
   }
}
alert('my wieght is 55');
alert('your score is: ' + counter++);

var sports = ['football', 'volleyball', 'tennis', 'badmenton', 'horse race', 'golf'];
for (var trailes = 0; trailes < 6; trailes++) {
    var lvSports = prompt("Guess which sports I prefer?");
    switch(lvSports) {
        case sports[0]:
        case sports[1]:
        case sports[2]:
        case sports[3]:
        case sports[4]:
        case sports[5]:
alert("great..my fav sports are football, volleyball, tennis, badmenton, horse race, golf");
counter = counter + 1;
//console.log(lvSports);
trailes++;
break;
default:
  alert("NO..you didnt get it ")
// console.log(sports);
break;
    }
}
alert("my fav sports are football, volleyball, tennis, badmenton, horse race, golf ");
alert("you got " + counter + "points");
alert("I am grateful for your presence on my pag " + userName);