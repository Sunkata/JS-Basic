function godzillaKong(input){

let budget = Number(input[0]);
let actors = Number(input[1]);
let priceClothActor = Number(input[2]);
let decor = budget * 0.1;
let clothsTotal = actors * priceClothActor
let leftBudget = decor+clothsTotal
let discount = clothsTotal * 0.1
 
if (actors > 150){
    leftBudget = decor + clothsTotal - discount
    
}else{
    leftBudget = leftBudget
}

if(leftBudget > budget){
console.log("Not enough money!");
console.log(`Wingard needs ${(leftBudget - budget).toFixed(2)} leva more.`);
} else if(leftBudget <= budget) {
console.log("Action!");
console.log(`Wingard starts filming with ${(budget - leftBudget).toFixed(2)} leva left.`);
}

}
godzillaKong(["9587.88",

"222",

"55.68"]);