function project(input) {
   let firstName = input[0];
   let countProject = Number(input[1]);
   let result = countProject * 3;
   console.log(`The architect ${firstName} will need ${result} hours to complete ${countProject} project/s.`);
}
project(["maria", "5"]);