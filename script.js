// Array of jokes
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the math book look sad? Because it had too many problems."
];

// Function to display a random joke
function tellJoke() {
    // Generate a random index to pick a joke
    const randomIndex = Math.floor(Math.random() * jokes.length);
    // Select the joke from the array
    const joke = jokes[randomIndex];
    // Display the joke in the HTML element with id 'joke'
    document.getElementById('joke').innerText = joke;
}
