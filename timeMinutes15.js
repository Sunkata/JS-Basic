function timeMinutes15(input) {
  hour = Number(input[0]);
  minutes = Number(input[1]);
  minutes += 15;

  if (hour > 23) hour -= 24;

  if (minutes > 59) {
    hour = hour + 1;
    minutes = minutes - 60;
  }

  if (minutes < 10) {
    console.log(`${hour}:0${minutes}`);
  } else {
    console.log(`${hour}:${minutes}`);
  }
}
timeMinutes15(["1", "46"]);
