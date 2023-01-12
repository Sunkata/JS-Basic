function greens(input) {
    let meters = input[0];
    let area = (meters * 7.61);
    let discount = (area * 0.18);
    let final = (area - discount);
    console.log(`The final price is: ${final}`);
    console.log(`The discount is: ${discount}`);

}
greens(["550"])