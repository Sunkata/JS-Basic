function multiplicationTable(input){

    let number = (input[0]);

    for(let i = 1; i<=15;i++){
        console.log(`${i} * ${number} = ${i*number}`);
    }


}
multiplicationTable(["5"])