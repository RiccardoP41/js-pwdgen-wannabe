
var nome = prompt ("Ciao! Qual è il tuo nome?");

var cognome = prompt ("Bene! Ora dimmi il tuo cognome");

var colore = prompt ("Ottimo! Qual è il colore che preferisci?");

var numero = parseInt(prompt ("Qual è il tuo numero fortunato?"));


document.getElementById("pwd").innerHTML = "Complimenti! La tua password é" + " " + nome + cognome + colore + numero + " " + "!";
