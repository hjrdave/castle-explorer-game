export default class Player {

    private name: string;
    private items: any;

    public setName = (name: string) => {
        name = this.name;
    }
    public sayName = () => (this.name);
    public pickupItem = () => {

    }
    public viewInventory = () => {

    }
    public dropItem = () => {

    }
    public lookAround = () => {

    }

    constructor() {
        this.name = '';
    }
}