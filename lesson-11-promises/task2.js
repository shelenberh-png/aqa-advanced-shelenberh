function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      if (!response.ok) throw new Error("Помилка завантаження todo");
      return response.json();
    })
    .catch((error) => console.error("Todo error:", error));
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      if (!response.ok) throw new Error("Помилка завантаження user");
      return response.json();
    })
    .catch((error) => console.error("User error:", error));
}

// Використання Promise.all та Promise.race
let allResults;
let raceResult;

Promise.all([fetchTodo(), fetchUser()])
  .then((data) => {
    allResults = data;
    console.log("Promise.all результат:", allResults);
  });

Promise.race([fetchTodo(), fetchUser()])
  .then((data) => {
    raceResult = data;
    console.log("Promise.race результат (найшвидший):", raceResult);
  });