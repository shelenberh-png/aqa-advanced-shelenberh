function printWithDelay(text, ms) {
  setTimeout(() => {
    console.log(text);
  }, ms);
}

// Приклад використання:
printWithDelay("Привіт через 3 секунди!", 3000);