function bestPlyer(input) {
  let index = 0;
  let comand = input[index];
  let name = "";
  let goals = 0;

  while (comand !== "END") {
    index++;
    if (goals < Number(input[index])) {
      goals = Number(input[index]);
      name = comand;
    }
    if (goals >= 10) {
      break;
    }
    index++;
    comand = input[index];
  }
  if (goals >= 3) {
    console.log(`${name} is the best player!`);
    console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
  } else {
    console.log(`${name} is the best player!`);
    console.log(`He has scored ${goals} goals.`);
  }
}
bestPlyer(["Neymar", "2", "Ronaldo","1", "Messi", "3", "END"]);
