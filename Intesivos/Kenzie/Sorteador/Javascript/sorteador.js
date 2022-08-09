const btnSortearNom = document.querySelector("#Sortear_Nomes")
const btnSortearNum = document.querySelector("#Sortear_Numeros")
const txaNomes      = document.querySelector("#Lista_Nomes")
const NumMin        = document.querySelector("#InMin")
const NumMax        = document.querySelector("#InMax")
const Resultado     = document.querySelector(".ResultadoText")
const popUpResultado= document.querySelector(".resultado")
const SorteadorNum  = document.querySelector(".SorteadorNum")
const SorteadorNom  = document.querySelector(".SorteadorNom")
const btnFechar     = document.querySelector(".fechar")
const btnAvancarNum = document.querySelector("#AvancarNum")
const btnVoltarNom  = document.querySelector("#VoltarNom")

//Gera um numero aleatorio
function NumeroRandom(min, max){
    return  Math.floor(Math.random() * (max - min) + min)
}

//Mostra o resultado do sorteio de nomes
function mostrarResultado(Result){
    Resultado.innerText = `Resultado: ${Result}`
    popUpResultado.classList.add("mostrarResultado")
}

//Sorteia um nome aleatorio
function SortearNomes(){
    const nomes         = txaNomes.value
    const Lista_Nomes   = nomes.split(",")
    const tamanhoArray  = Lista_Nomes.length
    const posicao       = NumeroRandom(0,tamanhoArray)
    mostrarResultado(Lista_Nomes[posicao])
}

//Fecha a janela que mostra o resultado
function FecharPopUp(){
    popUpResultado.classList.remove("mostrarResultado")
}

function SortearNumeros(){
    let Min             = parseInt(NumMin.value)
    let Max             = parseInt(NumMax.value)
    Max++
    const valor         = NumeroRandom(Min,Max)
    mostrarResultado(valor)
}

function Voltar(){
    SorteadorNum.classList.remove("NumOff")
    SorteadorNom.classList.add("NomOff")
}

function Avancar(){
    SorteadorNum.classList.add("NumOff")
    SorteadorNom.classList.remove("NomOff")
}


//Escuta o evento click no botão #Sortear_Nomes
btnSortearNom.addEventListener("click", SortearNomes)
//Escuta o evento click no botão .fechar
btnFechar.addEventListener("click", FecharPopUp)
//Escuta o evento click no botão #Sortear_Numeros
btnSortearNum.addEventListener("click", SortearNumeros)
//Escuta o evento click no botão .Voltar
btnVoltarNom.addEventListener("click", Voltar)
//Escuta o evento click no botão .Avancar
btnAvancarNum.addEventListener("click", Avancar)