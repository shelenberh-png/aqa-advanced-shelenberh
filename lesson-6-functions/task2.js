function validateAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(validateAge(25)); // true
console.log(validateAge(15)); // false