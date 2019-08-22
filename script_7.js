

console.log("Test de liaison!");

message = prompt("Envoyer un message au bot !");

if (message[message.length-1] === "?"){
	console.log("Ouais Ouais...");
}
else if (message.toUpperCase() === message && message !== ""){
	console.log("Pwa, calme-toi...");
}
else if (message.indexOf('Fortnite') !== -1){
	console.log("on s' fait une partie soum-soum ?");
}
else if (message === ""){
	console.log("t'es en PLS ?");
}
else{
 console.log("balek.");
}
