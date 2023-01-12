function fruitMarket(input) {
    let priceStrawberries = Number(input[0]);
    let bananasQuantity = Number(input[1]);
    let orangeQuantity = Number(input[2]);
    let raspberryQuantity = Number(input[3]);
    let strawberriesQuantity = Number(input[4]);

    let priceRasperries = priceStrawberries / 2;
    let orangePrice = priceRasperries * 0.6;
    let bananasPrice = priceRasperries * 0.2;

    let sum =
        priceStrawberries * strawberriesQuantity +
        bananasPrice * bananasQuantity +
        orangePrice * orangeQuantity +
        priceRasperries * raspberryQuantity;
    console.log(sum);
}
fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);
