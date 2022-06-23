URL = 'http://localhost:3000/videos';

//==================================================
//VARIÁVEIS GLOBAIS 

var q1aa = document.getElementById('q1aa');
var q1ab = document.getElementById('q1ab');
var q2aa = document.getElementById('q2aa');
var q2ab = document.getElementById('q2ab');
var q2ac = document.getElementById('q2ac');
var q3aa = document.getElementById('q3aa');
var q3ab = document.getElementById('q3ab');
var q3ac = document.getElementById('q3ac');
var valor = {};
var total = 0;
var idVideo = 0;

//==================================================

//==================================================
//BOTÕES DAS ALTERNATIVAS

q1aa.addEventListener('click', function(event){
    console.log("Questao 1 - Altenativa A");
    value("q1aa", event);
    counter(event);
})
q1ab.addEventListener('click', function(event){
    console.log("Questao 1 - Altenativa B");
    value("q1ab", event);
    counter(event);
})
q2aa.addEventListener('click', function(event){
    console.log("Questao 2 - Altenativa A");
    value("q2aa", event);
    counter(event);
})
q2ab.addEventListener('click', function(event){
    console.log("Questao 2 - Altenativa B");
    value("q2ab", event);
    counter(event);
})
q2ac.addEventListener('click', function(event){
    console.log("Questao 2 - Altenativa C");
    value("q2ac", event);
    counter(event);
})
q3aa.addEventListener('click', function(event){
    console.log("Questao 3 - Altenativa A");
    value("q3aa", event);
    counter(event);
})
q3ab.addEventListener('click', function(event){
    console.log("Questao 3 - Altenativa B");
    value("q3ab", event);
    counter(event);
})
q3ac.addEventListener('click', function(event){
    console.log("Questao 3 - Altenativa C");
    value("q3ac", event);
    counter(event);
})

//==================================================

//==================================================
//FUNÇÕES DO SCRIPT

function value(alternative, event){
    valor[alternative] = parseInt(event.target.placeholder);
    console.log(valor);
}

function counter(event){
    total += parseInt(event.target.placeholder);
    console.log(total); 
}

function idSwitch(){
    switch (total){
        case 111: //Possibilidade 1
            idVideo = 0;
            console.log((idVideo+1) + " - Abrir vídeo de Whatsapp");    
        break;
        case 112: //Possibilidade 2 
            idVideo = "Valor inexistente";
            console.log(idVideo + " - Sem vídeo no Banco de Dados");
        break;
        case 121: //Possibilidade 3 
            idVideo = "Valor inexistente";
            console.log(idVideo + " - Sem vídeo no Banco de Dados");
        break;
        case 122: //Possibilidade 4
            idVideo = "Valor inexistente";
            console.log(idVideo + " - Sem vídeo no Banco de Dados");
        break;
        case 131: //Possibilidade 5
            idVideo = "Valor inexistente";
            console.log(idVideo + " - Sem vídeo no Banco de Dados");
        break;
        case 132: //Possibilidade 6
            idVideo = "Valor inexistente";
            console.log(idVideo + " - Sem vídeo no Banco de Dados");    
        break;
        case 211: //Possibilidade 7
            idVideo = "Valor inexistente";
            console.log(idVideo + " - Sem vídeo no Banco de Dados");
        break;
        case 212: //Possibilidade 8
            idVideo = "Valor inexistente";
            console.log(idVideo + " - Sem vídeo no Banco de Dados");
        break;
        case 221: //Possibilidade 9
            idVideo = 1;
            console.log((idVideo+1) + " - Abrir vídeo de Uber"); 
        break;
        case 222: //Possibilidade 10
            idVideo = "Valor inexistente";
            console.log(idVideo + " - Sem vídeo no Banco de Dados");
        break;
        case 231: //Possibilidade 11
            idVideo = 2;
            console.log((idVideo+1) + " - Abrir vídeo de comprar a passagem aérea");
        break;
        case 232: //Possibilidade 12
            idVideo = "Valor inexistente";
            console.log(idVideo + " - Sem vídeo no Banco de Dados");
        break;
        case 311: //Possibilidade 13
            idVideo = "Valor inexistente";
            console.log(idVideo + " - Sem vídeo no Banco de Dados");
        break;
        case 312: //Possibilidade 14
            idVideo = "Valor inexistente";
            console.log(idVideo + " - Sem vídeo no Banco de Dados");
        break;
        case 321: //Possibilidade 15
            idVideo = "Valor inexistente";
            console.log(idVideo + " - Sem vídeo no Banco de Dados");
        break;
        case 322: //Possibilidade 16
            idVideo = "Valor inexistente";
            console.log(idVideo + " - Sem vídeo no Banco de Dados");
        break;
        case 331: //Possibilidade 17
            idVideo = "Valor inexistente";
            console.log(idVideo + " - Sem vídeo no Banco de Dados");
        break;
        case 332: //Possibilidade 18
            idVideo = "Valor inexistente";
            console.log(idVideo + " - Sem vídeo no Banco de Dados");
        break;
    }
}

//==================================================

//==================================================
//PASSAGEM DE TELAS

var pass1 = document.getElementById('pass1');
var pass2 = document.getElementById('pass2');

pass1.addEventListener('click', function(){
    document.getElementById('question1').style.display = "none";
    document.getElementById('question2').style.display = "block";
})
pass2.addEventListener('click', function(){
    document.getElementById('question2').style.display = "none";
    document.getElementById('question3').style.display = "block";
})

//==================================================

//==================================================
//VIDEO DO RESULTADO

const botao = document.getElementById('send');

botao.addEventListener('click', function(){
    console.log("O botao foi apertado");
    idSwitch();

    document.getElementById('questionsForm').style.display = "none";
    document.getElementById('videoRedirect').style.display = "block";

    const redirect = document.getElementById('videoRedirect');

    fetch(URL)
    .then(res => res.json())
    .then(videos =>{
        let showVideo =
        `
        <h4 class="text-center">Muito obrigado!</h4>
        <p class="fs-6 fw-bold">O vídeo para o seu problema é: </p>
        
        <div class="col d-flex flex-column align-items-center">
                <div class="card shadow-sm container">
                    <div class="ratio ratio-16x9 mb-4">
                        <div id="videoId" hidden></div>
                            <iframe width="1920" height="1080" id="video_src" class="embed-responsive-item" src="${videos[idVideo].url}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                                    
                <div class="card-body">
                    <h6 id="nameVideo" class="text-center">${videos[idVideo].nome}</h6>
                    <p id="descriptionVideo">${videos[idVideo].descricao}</p>
                </div>
            </div>    
        </div>
        `;
        redirect.innerHTML = showVideo;    
    });
})

//==================================================