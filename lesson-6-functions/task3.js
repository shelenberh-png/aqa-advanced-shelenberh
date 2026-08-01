function checkOrder(available, ordered) {
  if (available < ordered) {
    return "Your order is too large, we don't have enough goods.";
  } else if (ordered === 0) {
    return "Your order is empty";
  } else {
    return "Your order is accepted";
  }
}

// Виклики функції з виводом результату в консоль
console.log(checkOrder(100, 50));  // "Your order is accepted"
console.log(checkOrder(100, 150)); // "Your order is too large, we don't have enough goods."
console.log(checkOrder(100, 0));   // "Your order is empty"