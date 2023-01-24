const readline = require("readline-sync");

let youWin = false;
const inv = [];
console.log('This is Castel Explorer Game');
console.log('The crazies game of the world.');
console.log('Lets get started, what is your name?')
const name = readline.prompt();
console.log(`Hello ${name}, lets get started.`);
console.log('You go into the scary castle.');
console.log('Your options are east, north, or west, which do you choose?');
const dir1 = readline.prompt();
console.log(`You decide to go ${dir1}`);

if (dir1 === "east") {
    console.log("You go to a giant bin of trash.");
    console.log("What should you do? Pick it up, Kick it, or look into it.");
    console.log("What should you do?");
    const action = readline.prompt();
    console.log(`You decide to ${action}`);
    if (action === "Pick it up") {
        console.log('You get ate by a crazy racoon');
    }
    else if (action === "Kick it") {
        console.log("You get eaten by a giant trash monster");
    }
    else if (action === "look into it") {
        console.log("You see a key, what should you do? Pick it up, throw it, eat it");
        const action = readline.prompt();
        if (action === "Pick it up") {
            console.log("You trip and die");
        }
        else if (action === "throw it") {
            console.log("You throw it at a hippo, well you know what happened next....");
        }
        else if (action === "eat it") {
            console.log("You grow really big like Mario and destroy the castle");
            youWin = true;
        }
    }

}

if (dir1 === "west") {
    console.log("You go to a lake.");
    console.log("What should you do? Dive into it, go fishing, get in the boat");
    console.log("What should you do?");
    const action = readline.prompt();
    console.log(`You decide to ${action}`);
    if (action === "Dive into it") {
        console.log('A giant serpent eats you');
        process.exit(1);
    }
    else if (action === "go fishing") {
        console.log("You catch the giant serpent and it eats you");
        process.exit(1);
    }
    else if (action === "get in the boat") {
        console.log("The giant serpent knocks it over and eats you");
        process.exit(1);
    }
}

if (dir1 === "north") {
    console.log("You go to the armory");
    console.log("What should you do? Pick up a weapon, squish a rat, smell the air");
    console.log("What should you do?");
    const action = readline.prompt();
    console.log(`You decide to ${action}`);
    if (action === "Pick up a weapon") {
        console.log('You slay the giant serpent, right before it eats, but you still die');
        process.exit(1);
    }
    else if (action === "squish a rat") {
        console.log("It explodes, and you die");
        process.exit(1);
    }
    else if (action === "smell the air") {
        console.log("It smells like chedder cheese, you go to eat it, and the giant serpent eat you");
        process.exit(1);
    }
}

if (youWin) {
    console.log("You win!!! Good Job!!!")
} else {
    console.log("Sorry you lose, GAME OVER!!!")
}
