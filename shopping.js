function shopping(input){

let budget = Number(input[0]);
let countGpu = Number(input[1]);
let countCpu = Number(input[2]);
let countRam = Number(input[3]);

let priceGpu = countGpu * 250
let priceCpu = priceGpu * 0.35 * countCpu
let priceRam = priceGpu * 0.1 * countRam
let totalPrice = priceCpu + priceGpu + priceRam

if(countGpu > countCpu)
    totalPrice = totalPrice * 0.85

if(budget >= totalPrice){
    console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
}else{
    console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
}

}
shopping(["900",

"2",

"1",

"3"])