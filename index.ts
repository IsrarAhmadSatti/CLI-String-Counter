#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let answer = await inquirer.prompt
([
    {
        type : "input",
        name : "Counter",
        message : "Enter any string"
    }
])
let counter = 1;

for(let i=0; i<answer.Counter.length; i++)
{
    if(answer.Counter[i] ==" ")
        counter++;
}
console.log("Total number of words in your string are: ");
console.log(chalk.blueBright(counter));

let count = 0;

for(let j = 0; j<answer.Counter.length; j++){
    if(answer.Counter[j] == " "){
        continue;
    }
    else {
        count++;
    }
}
console.log("Total number of characters in your string are: ")

console.log(chalk.blueBright(count))
