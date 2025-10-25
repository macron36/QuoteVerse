// Quote database
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Don't let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    }
];

// DOM elements
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuote');
const copyQuoteBtn = document.getElementById('copyQuote');
const tweetQuoteBtn = document.getElementById('tweetQuote');

// Get random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Display new quote
function displayNewQuote() {
    const quote = getRandomQuote();
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `- ${quote.author}`;
    
    // Add animation
    quoteText.style.animation = 'none';
    quoteAuthor.style.animation = 'none';
    setTimeout(() => {
        quoteText.style.animation = 'fadeIn 0.5s ease-in';
        quoteAuthor.style.animation = 'fadeIn 0.5s ease-in';
    }, 10);
}

// Copy quote to clipboard
function copyToClipboard() {
    const textToCopy = `${quoteText.textContent} ${quoteAuthor.textContent}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Quote copied to clipboard! 📋');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Tweet quote
function tweetQuote() {
    const textToTweet = `${quoteText.textContent} ${quoteAuthor.textContent}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(textToTweet)}`;
    window.open(twitterUrl, '_blank');
}

// Event listeners
newQuoteBtn.addEventListener('click', displayNewQuote);
copyQuoteBtn.addEventListener('click', copyToClipboard);
tweetQuoteBtn.addEventListener('click', tweetQuote);

// Display first quote on load
displayNewQuote();