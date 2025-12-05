// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const palidroma = "palidroma";

const insertWord = prompt();

correctWord(insertWord);

function correctWord() {

    if (insertWord.trim().toLowerCase() === palidroma.toLowerCase()) { // TRIM Ignora le maiuscole/minuscole e TOLOWERCASE rimuove gli spazi prima/dopo:
        console.log("Le parole coincidono!");
    } else {
        console.log("Non coincidono.");
    }

}