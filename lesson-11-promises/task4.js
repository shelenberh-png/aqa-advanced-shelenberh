class TodoService {
  constructor(baseUrl = "https://jsonplaceholder.typicode.com/todos") {
    this.baseUrl = baseUrl;
  }

  async getTodoById(id) {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`);
      if (!response.ok) throw new Error(`Помилка отримання todo з id: ${id}`);
      return await response.json();
    } catch (error) {
      console.error("TodoService error:", error);
    }
  }
}

class UserService {
  constructor(baseUrl = "https://jsonplaceholder.typicode.com/users") {
    this.baseUrl = baseUrl;
  }

  async getUserById(id) {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`);
      if (!response.ok) throw new Error(`Помилка отримання user з id: ${id}`);
      return await response.json();
    } catch (error) {
      console.error("UserService error:", error);
    }
  }
}

// Приклад використання класів:
async function main() {
  const todoService = new TodoService();
  const userService = new UserService();

  const [todo, user] = await Promise.all([
    todoService.getTodoById(1),
    userService.getUserById(1)
  ]);

  console.log("Отримано через класи:", { todo, user });
}

main();