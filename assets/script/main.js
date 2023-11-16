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
    caixa.onclick = click;
    document.querySelector(".jogo").appendChild(caixa);
};

function click(){
    if(abrirCartas.length < 2){
        this.classList.add("caixaAberta");
        abrirCartas.push(this);
    }

    if(abrirCartas == 2){
        setTimeout(verificarPartida, 500);
    };

    console.log(abrirCartas);
}

function verificarPartida(){
    if(abrirCartas[0].innerHTML === abrirCartas[1].innerHTML){
        abrirCartas[0].classList.add("caixaCerta");
        abrirCartas[1].classList.add("caixaCerta");
    } else{
        abrirCartas[0].classList.remove("caixaAberta");
        abrirCartas[1].classList.remove("caixaAberta");
    };

    abrirCartas = [];
    if(document.querySelectorAll(".caixaCerta").length === emojis.length){
        alert("Você VENCEU!");
    };
};