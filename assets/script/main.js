const emojis = [
    "🐱",
  "🐱",
  "🦝",
  "🦝",
  "🦊",
  "🦊",
  "🐶",
  "🐶",
  "🐵",
  "🐵",
  "🦁",
  "🦁",
  "🐯",
  "🐯",
  "🐮",
  "🐮",
];

let abrirCartas = [];

let embaralharEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for(let i= 0; i < emojis.length; i++){
    let caixa = document.createElement("div");
    caixa.className = "item";
    caixa.innerHTML = embaralharEmojis[i];
}

function click(){
    if(abrirCartas.length < 2){
        this.classList.add("caixaAbrir");
        abrirCartas.push(this)
    }

    if(abrirCartas == 2){
        setTimeout(verificarPartida, 500)
    }

    console.log(abrirCartas);
}