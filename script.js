// Array of jokes
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the math book look sad? Because it had too many problems.",
    "Code MrMecha in the Fortnite Item Shop!",
    "Zav is a big back",
    "! Beamed is the best NL Hybrid Staff",
    "Vix steals the cookies from Santa Claus"
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

// Function to send a user message and get a bot response
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    const chatBox = document.getElementById('chat-box');

    // Add user message to chat
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.innerText = userInput;
    chatBox.appendChild(userMessage);

    // Clear the input field
    document.getElementById('user-input').value = '';

    // Simulate bot response
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.innerText = getBotResponse(userInput);
        chatBox.appendChild(botMessage);

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

// Function to get a bot response
function getBotResponse(input) {
    const responses = {
        "hello": "Hi there! How can I help you today?",
        "how are you": "I'm just a bunch of code, but I'm doing great! How about you?",
        "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
        "bye": "Goodbye! Have a great day!",
        "what is your name": "I am your friendly AI chatbot!",
        "help": "How can I assist you? Feel free to ask me anything!"
    };

    // Split the input into words and check each word for a response
    const words = input.toLowerCase().split(" ");
    for (let word of words) {
        if (responses[word]) {
            return responses[word];
        }
    }

    // Return a default response if no match is found
    return "I'm not sure how to respond to that. Can you please rephrase?";
}
