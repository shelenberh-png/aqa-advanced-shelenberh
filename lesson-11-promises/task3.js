async function fetchTodoAsync() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!response.ok) throw new Error("Помилка завантаження todo");
    return await response.json();
  } catch (error) {
    console.error("Todo error:", error);
  }
}

async function fetchUserAsync() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) throw new Error("Помилка завантаження user");
    return await response.json();
  } catch (error) {
    console.error("User error:", error);
  }
}

// Виклики та використання результатів
async function runAsyncTasks() {
  const allResultsAsync = await Promise.all([fetchTodoAsync(), fetchUserAsync()]);
  const raceResultAsync = await Promise.race([fetchTodoAsync(), fetchUserAsync()]);

  console.log("Async Promise.all:", allResultsAsync);
  console.log("Async Promise.race:", raceResultAsync);
}

runAsyncTasks();