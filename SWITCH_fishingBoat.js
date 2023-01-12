function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let boatRentprice = 0;

    switch (season) {
        case 'Spring':
            boatRentprice = 3000;
            break;
        case 'Summer': 
        case 'Autumn':
            boatRentprice = 4200;
            break;
        case 'Winter':
            boatRentprice = 2600;
            break;
    }

    if (fishermen <= 6) {
        boatRentprice = boatRentprice * 0.90;
    } else if (fishermen <= 11) {
        boatRentprice = boatRentprice * 0.85;
    } else if (fishermen >= 12) {
        boatRentprice = boatRentprice * 0.75;
    }
    if (fishermen % 2 === 0 && season !== 'Autumn') {
        boatRentprice = boatRentprice * 0.95;
    }

    if (budget >= boatRentprice) {
        console.log(`Yes! You have ${(budget - boatRentprice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(boatRentprice - budget).toFixed(2)} leva.`);
    }
}
fishingBoat(["3000", "Summer", "11"])