//Create a function randomizer function
const randomNum = (num) => {
  return Math.floor(Math.random() * num);
};

//collect different arrays with the message components in a obj
const horoscope = {
  sign: [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Capricorn",
  ],
  luck: [
    "You will have: good luck",
    "You will: have bad luck",
    "It has yet to be decided",
    "You will surely die!",
  ],
  toDo: [
    "do 20 jumping jacks",
    "trust everyone",
    "trust no one",
    "sleep for 12 hours",
    "eat a burger",
  ],
};

//console.log(horoscope.luck[randomNum(horoscope.luck.length)]);

//Function with no parameters that prints message when called upon
const logMessage = () => {
  //Iterate through the obj
  for (let arr in horoscope) {
    //A variable that chooses a random string from each array in the horoscope obj
    let randomInArr = horoscope[arr][randomNum(horoscope[arr].length)];

    switch (arr) {
      case "sign":
        console.log(`Your sign is: ${randomInArr}`);
        break;
      case "luck":
        console.log(randomInArr);
        break;
      case "toDo":
        console.log(`You shold: ${randomInArr}`);
        break;
    }
  }
};

//Calling function
logMessage();
