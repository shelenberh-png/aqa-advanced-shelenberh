import { Book } from './Book.js';

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    // Геттер та сеттер для формату файлу
    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        const allowedFormats = ['PDF', 'EPUB', 'FB2', 'MOBI'];
        if (typeof value !== 'string' || !allowedFormats.includes(value.toUpperCase())) {
            throw new Error(`Формат файлу має бути одним із: ${allowedFormats.join(', ')}.`);
        }
        this._fileFormat = value.toUpperCase();
    }

    // Перевизначений метод printInfo
    printInfo() {
        console.log(`Назва: "${this.title}", Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.fileFormat}`);
    }

    // Статичний метод для створення EBook з Book
    static fromBook(bookInstance, fileFormat) {
        if (!(bookInstance instanceof Book)) {
            throw new Error('Першим аргументом має бути екземпляр класу Book.');
        }
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
    }
}