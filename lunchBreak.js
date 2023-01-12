function lunchBreak(input){

    let movieTitle = input[0];
    let epizodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = (1/8) * breakDuration;
    let leisureTime = (1/4) * breakDuration;

    let busyTime = leisureTime + lunchTime;
    let timeLeft = breakDuration - busyTime;

    if(timeLeft >= epizodeDuration){
        console.log(`You have enough time to watch ${movieTitle} and left with ${Math.ceil(timeLeft - epizodeDuration)} minutes free time.`);
    }else {
        console.log(`You don't have enough time to watch ${movieTitle}, you need ${Math.ceil(epizodeDuration - timeLeft)} more minutes.`);
    }
    
    

}

lunchBreak(["Teen Wolf",

"48",

"60"])