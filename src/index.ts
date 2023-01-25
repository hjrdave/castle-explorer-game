import readline from 'readline-sync';
import Player from './Player';

const player = new Player({ name: '', inv: [] });

console.log(`
This is Castle Explorer the Game!
The scariest game in the world!
What is your name?
`);
const name = readline.prompt();
player.setName(name);
console.log(`Hello ${name}`);

