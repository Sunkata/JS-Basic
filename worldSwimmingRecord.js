function worldSwimmingRecord(input){
    let recordInSeconds = Number(input[0]);
    let meters = Number(input[1]);
    let timeForOneMeter = Number(input[2]);

    let metersToGo = meters * timeForOneMeter
    let slowing = (Math.floor(meters / 15)) * 12.5
    let totalTime = metersToGo + slowing

    if(recordInSeconds <= totalTime){
        console.log(`No, he failed! He was ${(totalTime - recordInSeconds).toFixed(2)} seconds slower.`);
    }else{
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    }


}

worldSwimmingRecord(["55555.67",

"3017", "5.03"]);