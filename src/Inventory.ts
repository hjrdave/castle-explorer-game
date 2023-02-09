export default class Inventory {

    private storage: Map<string, string>;
    private limit = 5;

    public addItem = (item: string) => {
        if (!(this.storage.size === this.limit)) {
            const key = this.storage.size + 1;
            this.storage.set(item, item);
            console.log(`You picked up the ${item}.`);
        } else {
            console.warn('Sorry, your inventory is full.');
        }
    }

    public removeItem = (item: string) => {
        if (this.storage.has(item)) {
            this.storage.delete(item);
            console.log(`You droppped ${item}`);
        } else {
            console.warn(`You do not have that ${item}!`)
        }
    }

    public viewItems = () => {
        ///look
    }

    constructor() {
        this.storage = new Map();
    }
}
