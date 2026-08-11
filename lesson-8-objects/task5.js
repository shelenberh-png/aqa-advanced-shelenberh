const users = [
  { name: 'Анна', email: 'anna@example.com', age: 25 },
  { name: 'Максим', email: 'maksim@example.com', age: 32 },
  { name: 'Ольга', email: 'olga@example.com', age: 19 }
];


for (const { name, email, age } of users) {
  console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}