import { Author, Book, Person } from './intefaces';
import { createCustomer, getBooksByCategory, getBooksByCategoryPromise } from './functions';

// type Book = {
//     id: number;
//     title: string;
//     category: Category;
//     author: string;
//     available: boolean;
//     pages?: number;
//     markDamaged?: (reason: string) => void;
// };

export type BookProperties = keyof Book;

export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;

// type DamageLogger = (reason: string) => void;

export type BookRequiredFields  = Required<Book>;

export type UpdatedBook = Partial<Book>;

export type AuthorNoEmail = Omit<Author, 'email'>;

// export type СreateCustomerFunctionType = (name: string, age?: number, city?: string) => void;

export type СreateCustomerFunctionType = typeof createCustomer;

export type fn = (p1: string, p2: number, p3: boolean) => symbol;
export type Param1<T> = T extends (p1: infer R, p2: number, p3: boolean) => symbol ? R : never;
export type Param2<T> = T extends (p1: string, p2: infer R, p3: boolean) => symbol ? R : never;
export type Param3<T> = T extends (p1: string, p2: number, p3: infer R) => symbol ? R : never;

type P1 = Param1<fn>;
type P2 = Param2<fn>;
type P3 = Param3<fn>;

export type Unpromisify<T> = T extends Promise<infer R> ? R : never;
export type FT = Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>;