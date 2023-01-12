function suppliesForSchool(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1])
    let litersPrep = Number(input[2]);
    let discount = Number(input[3]);

    let packetPens = pens * 5.80;
    let packetMarkers = markers * 7.20;
    let litersPrice = litersPrep * 1.20;
    let discountAfter = discount / 100

    let allPrice = packetPens + packetMarkers + litersPrice;
    let priceDiscount = allPrice - (allPrice * discountAfter);
    console.log (priceDiscount);
}
suppliesForSchool(["2","3","4","25"])