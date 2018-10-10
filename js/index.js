var num1;
var num2;
var choice = prompt ("Would you like to execute a regular or advanced calculation").toLowerCase();

var calculation = {
  add: "+",
  sub: "-",
  mul: "*",
  div: "/",
  pow: "pow",
  sroot: "sroot",
};

if (choice=="regular") {
  var arithmetic = prompt ("what type of regular calculation would you like to do? (+,-,*,/)");
  switch (arithmetic) {
    case calculation.add:
      num1 = parseInt(prompt("What is the first number?"));
      num2 = parseInt(prompt("What is the second number?"))
      console.log(num1+num2);
      break;
    case calculation.sub:
      num1 = parseInt(prompt("What is the first number?"));
      num2 = parseInt(prompt("What is the second number?"))
      console.log(num1-num2);
      break;
    case calculation.mul:
      num1 = parseInt(prompt("What is the first number?"));
      num2 = parseInt(prompt("What is the second number?"))
      console.log(num1*num2);
      break;
    case calculation.div:
      num1 = parseInt(prompt("What is the first number?"));
      num2 = parseInt(prompt("What is the second number?"))
        if (num2==0) {
          console.log("operation not possible because you cannot divide by zero");
        }else {
          console.log(num/num2);
        }
      break;
    default:
      console.log("Wrong input. Try again!");
    }
  }
  // console.log (calculation.add);
    // if (arithmetic="+") {
    //   num1 = parseInt(prompt("Introduce first number"));
    //   num2 = parseInt(prompt("Introduce second number"));
    //   console.log("calculation.add");
    // }
// }


// switch (arithmetic) {
//   case "+":
//   console.log("faas");
//     break;
//   default:

// }
// if (choice="regular") {
//   console.log("Hi");
// }


// for (var i=0; i<4 ; i++){
//   if (choice){
//
//   }
// }
