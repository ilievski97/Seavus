var order = prompt("What is your order:")
var quantity = prompt(`How many ${order} do you want to order?`);
var price;
var result;

switch (order) {
      case "Coffee":
        price = 2;
       break;

       case "Water":
        price = 1;
       break;

       case "Wine":
        price = 5;
       break;

       case "Juice":
         price = 3;
        break;

        case "Beer":
         price = 4;
        break;

        case "Whisky":
         price = 10;
        break;

  default:
}

result = price * quantity;
alert(`Your order of ${quantity} ${order} costs ${result}`);
