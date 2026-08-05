function handleNum(number, handleEven, handleOdd) {
  if (number % 2 === 0) {
    handleEven();
  } else {
    handleOdd();
  }
}

function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

handleNum(6, handleEven, handleOdd); 
handleNum(7, handleEven, handleOdd); 