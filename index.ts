#!/user/bin/env node

import inquirer from "inquirer"

const ans : {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type:"input",
        message:"enter your sentence to count word: "
    }
])

const words = ans.Sentence.trim().split(" ")

console.log(words)

// print the word count of the sentence to the console
console.log(`your sentence word count is  ${words.length}`);