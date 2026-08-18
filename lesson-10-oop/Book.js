export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // Геттери та сеттери з валідацією
    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== 'string' || value.trim().length === 0) {
            throw new Error('Назва книги має бути непорожнім рядком.');
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== 'string' || value.trim().length === 0) {
            throw new Error('Автор має бути непорожнім рядком.');
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        const currentYear = new Date().getFullYear();
        if (typeof value !== 'number' || value <= 0 || value > currentYear) {
            throw new Error(`Рік видання має бути коректним числом (1–${currentYear}).`);
        }
        this._year = value;
    }

    // Метод для виводу опису книги
    printInfo() {
        console.log(`Назва: "${this.title}", Автор: ${this.author}, Рік видання: ${this.year}`);
    }

    // Статичний метод для пошуку найдавнішої книги
    static getOldestBook(booksArray) {
        if (!Array.isArray(booksArray) || booksArray.length === 0) {
            throw new Error('Аргумент має бути непорожнім масивом книг.');
        }

        return booksArray.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest;
        });
    }
}