let numbers = [1, 3, 12, 90, 3, 12, 200];
let itemRepeatObject = numbers.reduce((obj, currentItem) => {
  return { ...obj, [currentItem]: (obj[currentItem] || 0) + 1 };
}, {});
sa;

dfasdf;
console.log(itemRepeatObject);

getInput();

function getInput() {
  const userInputs = [];
  let input;
  do {
    input = +prompt("enter a number");
    console.log(input);
    if (input !== 0) {
      userInputs.unshift(input);
    }
  } while (input != 0);

  userInputs.forEach((num) => {
    console.log(num);
  });
}
