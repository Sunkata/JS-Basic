function vacationBooksList(input){
    let pagesBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let totalTime = pagesBook / pagesPerHour;
    let sum = totalTime / days;
    console.log(sum);
}
vacationBooksList(["212",
"20",
"2"])