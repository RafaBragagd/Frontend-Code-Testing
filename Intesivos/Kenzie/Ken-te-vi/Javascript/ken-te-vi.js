//Constantes de acesso do arquivo html
const tweetar       = document.querySelector("button");
const mensagemTweet = document.querySelector("textarea");
const feed          = document.querySelector(".principal__feed__listaNoticia")

//Funções de interatividade com a pagina HTML
function pegarTweet(event){
    event.preventDefault();
    const Reg = /#\w*[^\s|#|.|,]*/;
    let mensagem = [];
    let tweetTextArea = mensagemTweet.value;
    //Separando o texto e as hashtags
    while (Reg.test(tweetTextArea)){
        if(tweetTextArea.search(Reg) <= 0){
          mensagem.push(["Hash",tweetTextArea.match(Reg)[0]]);
          tweetTextArea = tweetTextArea.replace(Reg, "");
        }else{
          let aux = tweetTextArea.substring(0, tweetTextArea.search("#"));
          mensagem.push(["Txt",aux]);
          tweetTextArea = tweetTextArea.substring(tweetTextArea.search("#"));
        }
      }
      if(tweetTextArea !== ""){
        mensagem.push(["Txt",tweetTextArea])
      }
    mensagemTweet.value = "";
    criarTweet(mensagem);
}

/*
Criar Tweet:
    Nome
    Horario
    Foto
    Nome Usuario
    Texto do tweet
*/
function criarTweet(texto){
    let data    = new Date();
    let hora    = data.getHours();
    let minutos = data.getMinutes();
    const tweet = {
        nome: "Daniel",
        tempo: `${hora}:${minutos}`,
        foto: "./img/ProfilePic.png",
        usuario: '@danielkenzie',
        texto: texto,

    }
    publicarTweet(tweet);
}

function publicarTweet(tweet){

    const {nome, foto, usuario, texto, tempo} = tweet;

    //Criando os elementos do templete do tweet
    let li  = document.createElement("li");
    li.classList.add("principal__feed__listaNoticia__noticia")
    let img = document.createElement("img");
    img.src         = foto;
    let div = document.createElement("div");
    let h2  = document.createElement("h2");
    h2.innerText    = nome;
    let spa = document.createElement("span");
    spa.innerText   = usuario + " - " + tempo;
    //Ancorando as hashtags
    let par = document.createElement("p");
    for(let i = 0; i < texto.length; i++){
        if(texto[i][0] === "Hash"){
            let anc = document.createElement("a");
            anc.innerText = texto[i][1];
            anc.href = "#";
            par.appendChild(anc);
        }else{
            let noText = document.createTextNode(texto[i][1]);
            par.appendChild(noText);
        }
    }

    //Adicionando os filhos da div
    div.appendChild(h2);
    div.appendChild(spa);
    div.appendChild(par);

    //Adicionando os filhos do li
    li.appendChild(img);
    li.appendChild(div);

    feed.appendChild(li);
}


//Lista de eventos
tweetar.addEventListener('click', pegarTweet);