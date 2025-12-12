function mostraAlert() {
  alert("Ciao! Questo è il mio primo alert!");
}

function scriviConsole() {
  console.log("Questo è il mio primo console.log!");
}

function cambiaTitolo(){
    document.getElementById("titolo").textContent = "Titolo modificato con JavaScript";
}

function richiesta(){
    console.log("Bottone cliccato!");
    document.getElementById("paragrafo").style.color= "red";

}
function cambiaTesto() {
    let paragrafo = document.getElementById("paragrafo1");
    paragrafo.textContent = "Il testo è stato cambiato!";
}
