let utenti = [
    { nome:"Domenico", eta:20 },
    { nome:"Mario", eta:18 },
    { nome:"Giovanni", eta:25 }
];

let giovane = null
let minimo = Infinity
for (i = 0; i < utenti.length; i++){
    if (utenti[i].eta >= 18){
        if (utenti[i].eta < minimo) {
            minimo = utenti[i].eta;
            giovane = utenti[i];
        }
    }
};


console.log("Il maggiorenne con meno anni è:", giovane.nome);