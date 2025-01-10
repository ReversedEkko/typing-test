import { generate } from "random-words";

export function newGame() {
    const wordElement = document.getElementById('words');
    if (wordElement) {
        wordElement.innerHTML = ""; // clear existing content
        wordElement.innerHTML += randomWord(); // append new content
    } else {
        console.error("Element with id 'words' not found.");
    }
}

function randomWord() {
    let list = "";
    while (list.length < 10*64) {
        list += generate() + " "; // generate random words
    }

    return list.trim(); // remove trailing space
    console.log(list.trim)

}