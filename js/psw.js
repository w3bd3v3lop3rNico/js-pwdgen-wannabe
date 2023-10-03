//- chidere all'utente il suo nome:
//  - dichiarare una variabile
let userName;

//  - assegnare alla variabile il valore restituito da un prompt
userName = prompt("Inserisci il tuo nome");
console.log(userName);
//- chiedere all'utente il suo cognome:
//  - dichiarare una variabile
let userSurname;

//  - assegnare alla variabile il valore restituito da un prompt
userSurname = prompt("Inserisci il tuo cognome");
console.log(userSurname);

//- chiedere all'utente il suo colore preferito:
//  - dichiarare una variabile
let userColor;

//  - assegnare alla variabile il valore restituito da un prompt
userColor = prompt("Inserisci il colore preferito");
console.log(userColor);

//-generare un numero random
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

//-generare password
let password = userName + userSurname + randomNumber;
console.log(password);
//- stampare il messaggio dentro un h1:
//  - inserire nell'html un tag h1 con id="password-user"
//  - recuperare con js l'elementi del dom con id = 'password-user'
const messageDomElement = document.getElementById('password-user');
console.log(messageDomElement);

//  - modificare l'innerHTML del h1 con il valore della variabile password
messageDomElement.innerHTML = password
