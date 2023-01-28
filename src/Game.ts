import { title, startDescription, gameOver } from "./wordArt";
import promptSync from 'prompt-sync';

const prompt = promptSync();

export default class Game {

    private gameOver = gameOver;

    ask = (question: string, expectedFeedback: string[]) => {
        const answer = prompt(question);
        if (!expectedFeedback.includes(answer)) {
            this.speak('I did not understand your answer...');
            this.ask(question, expectedFeedback);
        }
        return answer;
    }

    speak = (text: string) => {
        console.log(`

    ${text}
        
        `);
    }

    startGame = () => {
        this.speak(title);
        this.speak(startDescription);
        const answer = this.ask('Start Game? (Yes/No)', ['Yes', 'No']);
        if (answer === 'Yes') {
            this.speak('Starting game.......');
        } else {
            this.speak('That makes me sad.......');
        }
    };
    end = () => {
        process.stdout.write('\u001b[H\u001b[2J\u001b[3J');
        this.speak(this.gameOver);
    };

    constructor() {

    }
}