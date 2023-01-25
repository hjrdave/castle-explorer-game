export default class Player {

    public name: string;
    public inv: string[];

    public sayName = () => (this.name);
    public setName = (name: string) => {
        name = this.name;
    }

    constructor(props: { name: string, inv: string[] }) {
        this.name = props.name;
        this.inv = props.inv;
    }
}