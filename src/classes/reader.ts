import { Book } from '../intefaces';

export const Reader = class {
    name: string;
    books: Book[] = [];
    take(book: Book): void {
        // or ?
        // (this.books ??= []).push(book);
        this.books.push(book);
    }
};