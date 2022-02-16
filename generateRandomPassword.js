// const btn = document.querySelector('button');
// const password = ["a", "b", "c", "d", "e", "f", "g"];
// const length = 8;
// let newPassword = "";
// let newPaswwordLenght = 0;

// const generateNewPassowrd = () => {
//     console.log("work");  // check function work
    
// stupid idea

//     const indexRoll1 = (Math.floor(Math.random() * password.length));
//     const indexRoll2 = (Math.floor(Math.random() * password.length));
//     const indexRoll3 = (Math.floor(Math.random() * password.length));
//     const indexRoll4 = (Math.floor(Math.random() * password.length));
//     const indexRoll5 = (Math.floor(Math.random() * password.length));
//     const indexRoll6 = (Math.floor(Math.random() * password.length));

//      document.querySelector("section").textContent = password[indexRoll1] + password[indexRoll2]
//      + password[indexRoll3] + password[indexRoll4]+ password[indexRoll5]+ password[indexRoll6]; 

// // better
const btn = document.querySelector('button');

function genPassword() {
   let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let passwordLength = 12;
   let password = "";
for (let i = 0; i <= passwordLength; i++) {
  let randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }
       document.querySelector("section").textContent = password;
};

btn.addEventListener("click", genPassword);