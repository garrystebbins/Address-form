// hide the honeypot field
// using JS instead of CSS because I *think* spam bots respect CSS now
// also I could be making that up
// I feel like I read that somewhere though
// and, like, if it’s on the internet it’s true, right?
const spam = document.querySelector('label.hidden');

spam.style.display = 'none';
