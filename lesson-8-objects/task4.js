const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

person.email = 'doe@email.com';

delete person.age;

console.log(person);