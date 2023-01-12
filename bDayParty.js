function bDayParty(input) {
  let rent = Number(input[0]);

  let cake = rent * 0.2;
  let drinks = cake - cake * 0.45;
  let animator = rent / 3;
  let sum = cake + drinks + animator + rent;
  console.log(sum);
}
bDayParty(["2250"]);
