// 1. Функція divide
function divide(numerator, denominator) {
  if (typeof numerator !== "number" || Number.isNaN(numerator) || 
      typeof denominator !== "number" || Number.isNaN(denominator)) {
    throw new Error("Обидва аргументи повинні бути дійсними числами");
  }

  if (denominator === 0) {
    throw new Error("Ділення на нуль неможливе");
  }

  return numerator / denominator;
}

// Виклик 1: Коректні дані
try {
  console.log("Результат:", divide(10, 2));
} catch (error) {
  console.log("Помилка:", error.message);
} finally {
  console.log("Робота завершена\n---");
}

// Виклик 2: Ділення на 0
try {
  console.log("Результат:", divide(10, 0));
} catch (error) {
  console.log("Помилка:", error.message);
} finally {
  console.log("Робота завершена\n---");
}

// Виклик 3: Передача нечислового аргументу
try {
  console.log("Результат:", divide("10", 2));
} catch (error) {
  console.log("Помилка:", error.message);
} finally {
  console.log("Робота завершена\n---");
}