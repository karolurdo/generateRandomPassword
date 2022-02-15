const btn = document.querySelector('button');
const password = ["a", "b", "c", "d", "e", "f", "g"];

const generateNewPassowrd = () => {
    console.log("work");  // check function work
    const indexRoll = (Math.floor(Math.random() * password.length));
    document.querySelector("section").textContent = password[indexRoll] 
} ;

btn.addEventListener("click", generateNewPassowrd);