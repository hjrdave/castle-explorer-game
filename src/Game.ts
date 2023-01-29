import { title, startDescription, gameOver } from "./wordArt";
import Player from "./Player";
import promptSync from 'prompt-sync';
export default class Game {

    private player: Player;

    setPlayerName = (name: string) => {
        this.player.setName(name);
    }

    getPlayerName = () => {
        return this.player.sayName();
    }

    ask = (question: string, expectedFeedback?: string[]) => {
        const prompt = promptSync();
        const answer = prompt(question);
        if (expectedFeedback) {
            if (!expectedFeedback.includes(answer)) {
                this.speak('I did not understand your answer...');
                this.ask(question, expectedFeedback);
            }
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
            const playerName = this.ask('What is your name?', []);
            return playerName;
        } else {
            this.speak('That makes me sad.......');
            this.startGame();
        }
    };

    constructor() {
        this.player = new Player();
    }
}
