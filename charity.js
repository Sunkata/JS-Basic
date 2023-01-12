function charity(input) {

    let days = Number(input[0]);
    let chefs = Number(input[1]);
    let cake = Number(input[2])
    let gofrets = Number(input[3]);
    let pancake = Number(input[4]);
    let cakePrice = 45;
    let gofretPrice = 5.8;
    let pancacePrice = 3.2;

    let finalCakePrice = (cake * cakePrice);
    let finalGofretPrice = (gofrets * gofretPrice);
    let finalPancacePrice = (pancake * pancacePrice);
    let sumForDay = (finalCakePrice + finalGofretPrice + finalPancacePrice) * chefs;
    let allProfit = sumForDay * days;
    let sumAftergive = allProfit - (allProfit / 8);
    console.log(sumAftergive)





}
charity(["23",
    "8",
    "14",
    "30",
    "16"])