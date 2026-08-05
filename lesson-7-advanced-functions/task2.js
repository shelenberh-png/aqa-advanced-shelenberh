function recursive(num) {
  console.log(num);
  if (num > 0) {
    recursive(num - 1);
  }
}

recursive(5);