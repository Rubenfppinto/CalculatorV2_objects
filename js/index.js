// var num1;
// var num2;
// var choice = prompt ("Would you like to execute a regular or advanced calculation").toLowerCase();

// var calculation = {
//   add: "+",
//   sub: "-",
//   mul: "*",
//   div: "/",
//   pow: "pow",
//   sroot: "sroot",
// };

//
// if (choice=="regular") {
//   var arithmetic = prompt ("what type of regular calculation would you like to do? (+,-,*,/)");
//   switch (arithmetic) {
//     case calculation.add:
//       num1 = parseInt(prompt("What is the first number?"));
//       num2 = parseInt(prompt("What is the second number?"));
//       console.log(num1+num2);
//       break;
//     case calculation.sub:
//       num1 = parseInt(prompt("What is the first number?"));
//       num2 = parseInt(prompt("What is the second number?"));
//       console.log(num1-num2);
//       break;
//     case calculation.mul:
//       num1 = parseInt(prompt("What is the first number?"));
//       num2 = parseInt(prompt("What is the second number?"));
//       console.log(num1*num2);
//       break;
//     case calculation.div:
//       num1 = parseInt(prompt("What is the first number?"));
//       num2 = parseInt(prompt("What is the second number?"));
//         if (num2==0) {
//           console.log("operation not possible because you cannot divide by zero");
//         }else {
//           console.log(num/num2);
//         }
//       break;
//     default:
//       console.log("Wrong input. Try again!");
//   }
// }else {
//   var arithmetic = prompt ("what type of advanced calculation would you like to do? (pow or sroot)");
//   switch (arithmetic) {
//     case calculation.pow:
//       num1 = parseInt(prompt("What is the first number?"));
//       num2 = parseInt(prompt("What is the power?"));
//       console.log(Math.pow (num1, num2));
//       break;
//     case calculation.sroot:
//       num1 = parseInt(prompt("What is the first number?"));
//       console.log(Math.sqrt(num1));
//       break;
//       default:
//       console.log ("Wrong input. try again!")
//     }
// }

//v2.........................................
var num1;
var num2;
var choice = prompt ("Would you like to execute a regular or advanced calculation").toLowerCase();

var calculation = {
  regular: {
    add: "+",
    sub: "-",
    mul: "*",
    div: "/",
  },
  advanced: {
    pow: "pow",
    sroot: "sroot",
  }
}


if (choice=="regular") {
  var arithmetic = prompt ("what type of regular calculation would you like to do? (+,-,*,/)");
  switch (arithmetic) {
    case calculation.regular.add:
      num1 = parseInt(prompt("What is the first number?"));
      num2 = parseInt(prompt("What is the second number?"));
      console.log(num1+num2);
      break;
    case calculation.regular.sub:
      num1 = parseInt(prompt("What is the first number?"));
      num2 = parseInt(prompt("What is the second number?"));
      console.log(num1-num2);
      break;
    case calculation.regular.mul:
      num1 = parseInt(prompt("What is the first number?"));
      num2 = parseInt(prompt("What is the second number?"));
      console.log(num1*num2);
      break;
    case calculation.regular.div:
      num1 = parseInt(prompt("What is the first number?"));
      num2 = parseInt(prompt("What is the second number?"));
        if (num2==0) {
          console.log("operation not possible because you cannot divide by zero");
        }else {
          console.log(num/num2);
        }
      break;
    default:
      console.log("Wrong input. Try again!");
  }
}else {
  var arithmetic = prompt ("what type of advanced calculation would you like to do? (pow or sroot)");
  switch (arithmetic) {
    case calculation.advanced.pow:
      num1 = parseInt(prompt("What is the first number?"));
      num2 = parseInt(prompt("What is the power?"));
      console.log(Math.pow (num1, num2));
      break;
    case calculation.advanced.sroot:
      num1 = parseInt(prompt("What is the first number?"));
      console.log(Math.sqrt(num1));
      break;
      default:
      console.log ("Wrong input. try again!")
    }
}
