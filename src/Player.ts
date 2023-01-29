export default class Player {

    private name: string;
    private inv: string[];

    public sayName = () => (this.name);
    public setName = (name: string) => {
        name = this.name;
    }

    constructor() {
        this.name = '';
        this.inv = [];
    }
}