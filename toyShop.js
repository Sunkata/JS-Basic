function toyShop(input){

    tripPrice = Number(input[0]);
    puzzles = Number(input[1]);
    dolls = Number(input[2]);
    bears = Number(input[3]);
    minions = Number(input[4]);
    trucks = Number(input[5]);

    let sum = puzzles * 2.60 + dolls * 3.0 + bears * 4.10 + minions * 8.20 + trucks * 2;
    let countSum = puzzles + dolls + bears + minions + trucks

    


    if (countSum >= 50){
        sum *= 0.75
    }
    let rent = sum * 0.1
    let profit = sum - rent
    sum = sum - rent;
    if (profit >= tripPrice){
        console.log(`Yes! ${(profit - tripPrice).toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${(tripPrice - profit).toFixed(2)} lv needed.`);
    }




}
toyShop(["40.8",

"20",

"25",

"30",

"50",

"10"])