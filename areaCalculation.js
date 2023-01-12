function areaOfFigures(input){
    let figure = (input[0]);
    let num1 = Number(input[1]);
    let num2 = Number(input[2]);
    if (figure === "square") {
        area = num1 * num1;
         console.log(area.toFixed(3)) 
         } else if  (figure === "rectangle"){
       area = num1 * num2;
            console.log(area.toFixed(3))
        } else if (figure === "circle") {
            area = Math.PI * (num1 * num1);
            console.log(area.toFixed(3))
        }   else if (figure === "triangle") {
            area = (num1 /2) * num2;
            console.log(area.toFixed(3))
        }
          
}
  