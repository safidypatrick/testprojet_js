

let number = prompt("Entrer un nombre entier naturel");
let i = 1;
let fact = 1;
let n = number;
  if (number === 0) {
    console.log(number + "! = 0");
  }
  else{
    while (true){
      if (n === 0) {
        break;
      }
      fact = fact * n
      n--;
    }
    console.log(number + "! = " + fact);
  }