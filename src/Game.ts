import { title, startDescription, gameOver } from "./wordArt";
import promptSync from 'prompt-sync';

const prompt = promptSync();

export default class Game {

    private gameOver = gameOver;

    ask = (question: string) => {
        const input = prompt(question);
        return input;
    }

    getInput = () => {
        const answer = this.ask('Start Game? (Yes/No)');
        if (answer === 'Yes') {
            this.speak('Starting game.......');
        } else if (answer === 'No') {
            this.speak('Then why are you wasting my time loser....')
        }
        else {
            this.speak('I did not understand that.')
        }
    }

    speak = (text: string) => {
        console.log(text);
    }

    start = () => {
        this.speak(title);
        this.speak(startDescription);
        this.getInput();
    };
    end = () => {
        process.stdout.write('\u001b[H\u001b[2J\u001b[3J');
        this.speak(this.gameOver);
    };

    constructor() {

    }
}