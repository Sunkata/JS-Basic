function trekkingMania(input) {
  let sum = 0;
  let Musala = 0;
  let Montblanc = 0;
  let Kilimanjaro = 0;
  let K2 = 0;
  let Everest = 0;

  for (let index = 1; index < input.length; index++) {
    let alpinists = Number(input[index]);
    sum += alpinists;
    if (alpinists <= 5)
                {
                    Musala += alpinists;
                }
                else if (alpinists>=6 && alpinists <= 12)
                {
                    Montblanc += alpinists;
                }
                else if (alpinists >= 13 && alpinists <= 25)
                {
                    Kilimanjaro += alpinists;
                }
                else if (alpinists >= 26 && alpinists <= 40)
                {
                    K2 += alpinists;
                }
                else if (alpinists >= 41)
                {
                    Everest += alpinists;
                }

  }
    console.log(((Musala / sum) * 100).toFixed(2) + '%');
    console.log(((Montblanc / sum) * 100).toFixed(2) + '%');
    console.log(((Kilimanjaro / sum) * 100).toFixed(2) + '%');
    console.log(((K2 / sum) * 100).toFixed(2) + '%');
    console.log(((Everest / sum) * 100).toFixed(2) + '%');
}

trekkingMania(["5", "25", "41", "31", "250", "6"]);
