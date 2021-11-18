import * as Interfaces from './../intefaces';
import { timeout } from '../decorators';

abstract class ReferenceItem {
    // title: string;
    // year: number;
    //
    // constructor(newTitle: string, newYear: number) {
    //     console.log(ReferenceItem);
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    private _publisher: string;

    #id: number;

    static department: string = 'Classical Literature';

    get publisher(): string {
        // eslint-disable-next-line no-underscore-dangle
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher) {
        // eslint-disable-next-line no-underscore-dangle
        this._publisher = newPublisher;
    }

    constructor(id: number, public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    @timeout(5000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    getID(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}
export { ReferenceItem };