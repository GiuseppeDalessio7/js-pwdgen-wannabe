/* Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato,
che va formattato in questo modo: nomecognomecolorepreferito23  */


//chiedere nome all'utente/ /
const userName = prompt ('Inserisci il tuo nome');

//Chiedere cognome//
const userSurname = prompt ('Inserisci il tuo cognome');

//chiedere colore preferito//
const colorTop = prompt('Scrivi il tuo colore preferito');

//risultati in console
console.log(`${userName + userSurname + colorTop}23`)

// selezione id
const password = document.getElementById('passwordgen');
console.log('password');

//stampare il risultato in pagina
password.innerHTML = `${userName + userSurname + colorTop}23`

