const btn = document.querySelector('button');
const password = ["a", "b", "c", "d", "e", "f", "g"];
const length = 8;
let newPassword = "";
let newPaswwordLenght = 0;

const generateNewPassowrd = () => {
    console.log("work");  // check function work
    
// stupid idea

    const indexRoll1 = (Math.floor(Math.random() * password.length));
    const indexRoll2 = (Math.floor(Math.random() * password.length));
    const indexRoll3 = (Math.floor(Math.random() * password.length));
    const indexRoll4 = (Math.floor(Math.random() * password.length));
    const indexRoll5 = (Math.floor(Math.random() * password.length));
    const indexRoll6 = (Math.floor(Math.random() * password.length));

     document.querySelector("section").textContent = password[indexRoll1] + password[indexRoll2]
     + password[indexRoll3] + password[indexRoll4]+ password[indexRoll5]+ password[indexRoll6]; 

// better

    // while (length >= newPassword.length) {
    //     const indexRoll = (Math.floor(Math.random() * password.length))
    //      document.querySelector("section").textContent = password[indexRoll];
    //      newPaswwordLenght = password[indexRoll]++
    // }

} ;

btn.addEventListener("click", generateNewPassowrd);