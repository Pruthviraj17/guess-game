function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let number = 0;

let tempMessage = {
  message: null,
  res: null,
};

exports.guessedNumber = (req, res, next) => {
  const guessedNumber = req.body.guessedNumber;

  if (guessedNumber == number) {
    number = getRandomInt(1, 10);
    tempMessage.message = "Congratulations! You guessed the right number!";
    tempMessage.res = true;
  } else {
    tempMessage.message = "Try again! You guessed the wrong number!";
    tempMessage.res = false;
  }

  res.render("result", { message: tempMessage });
};

exports.giveNumber = (req, res, next) => {
  number = getRandomInt(1, 10);
  const hint = `Hint: The number is between ${number - 2} and ${number + 2}`;
  res.render("index", { message: null, hint: hint });
};

exports.dashBoard = (req, res, next) => {
  console.log();

  res.render("dashboard");
};
