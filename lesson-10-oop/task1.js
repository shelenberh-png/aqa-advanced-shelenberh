import { Book } from './Book.js';
import { EBook } from './EBook.js';

// Створення екземплярів Book та виклик printInfo
const book1 = new Book('Кобзар', 'Тарас Шевченко', 1840);
const book2 = new Book('1984', 'Джордж Орвелл', 1949);

console.log('--- Звичайні книги ---');
book1.printInfo();
book2.printInfo();

//Створення екземпляра EBook та виклик printInfo
const ebook1 = new EBook('Тигролови', 'Іван Багряний', 1944, 'PDF');

console.log('\n--- Електронна книга ---');
ebook1.printInfo();

// Демонстрація роботи геттерів/сеттерів
console.log('\n--- Перевірка сеттерів ---');
book1.title = 'Захар Беркут';
book1.author = 'Іван Франко';
book1.year = 1883;
book1.printInfo();

// Пошук найдавнішої книги з масиву (Book + EBook)
const allBooks = [book1, book2, ebook1];
const oldestBook = Book.getOldestBook(allBooks);

console.log('\n--- Найдавніша книга ---');
oldestBook.printInfo();

// Створення EBook із звичайного Book через статичний метод
const convertedEBook = EBook.fromBook(book2, 'EPUB');

console.log('\n--- Конвертована книга ---');
convertedEBook.printInfo();