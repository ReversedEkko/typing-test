import { generate } from "random-words";

/**
 * Generates a new game with a given word count.
 * @param count - Number of words to generate.
 */
export function newGame(count: number): void {
    const wordElement = document.getElementById('words');
    if (wordElement) {
        wordElement.innerHTML = ""; // clear existing content
        wordElement.innerHTML += randomWord(count); // append new content
    } else {
        console.error("Element with id 'words' not found.");
    }
}

/**
 * Generates a random list of words.
 * @param count - Number of words to generate.
 * @returns A space-separated string of random words.
 */
function randomWord(count: number): string {
    let words: string[] = [];
    while (words.length < count) {
        words.push(generate() as string); // cast generate() result to string
    }

    return words.join(" "); // join words with spaces
}
