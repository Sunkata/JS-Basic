function fishTank(input) {
  let l = Number(input[0]);
  let w = Number(input[1]);
  let h = Number(input[2]);
  let percentage = Number(input[3]);

  let volume = l * w * h;

  let totalVolume = volume * (1 - percentage * 0.01);
  let total = totalVolume * 0.001;
  console.log(total);
}
fishTank(["85", "75", "47", "17"]);
