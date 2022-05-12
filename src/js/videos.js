window.onload = () => {
    getAllVideos();
}

const debounce = (func, timeout = 1000) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {func.apply(this, args);}, timeout);
    };
}

const searchVideos = (searchTerm) => {
    getVideos(`http://localhost:3000/videos?q=${searchTerm}`).then(videos => {
        loadVideos(videos);
    })
}

const search = debounce(searchTerm => {searchVideos(searchTerm);});

const getVideos = (url) => {
    /*
    Retorna os vídeos do db.json
    */
    return fetch(url).then(response => {
        if (response.ok) {
            return response.json();
        }

        if (response.status == 404) {
            mostrarMensagem("mensagem", "Nenhum vídeo encontrado", "erro");
        }
    }).catch(erro => {
        mostrarMensagem("mensagem", "Não foi possível carregar vídeos.", "erro");
        console.log(`Carregar vídeos falhou. ${erro}`);
    })
}

const getAllVideos = () => {
    getVideos("http://localhost:3000/videos").then(videos => {
        loadVideos(videos);
    })
}

const loadVideos = (videos) => {
    /*
    Carrega os vídeos do db.json em tela.
    */
    let cards = "";
    if(videos.length > 0) {
        videos.forEach(video => {
            // Cria um card para cada vídeo. Também cria um input hidden para armazenar o id do vídeo.
            cards += `
                <div class="col">
                    <div class="card shadow-sm">
                        <input type="hidden" id="video_${video.id}"  value=${video.id}>
                        <button value="${video.id}" onclick=selectVideo(document.getElementById("video_${video.id}").value)>
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                            preserveAspectRatio="xMidYMid slice" focusable="false">
                            <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%"
                            fill="#eceeef" dy=".3em">Thumbnail</text>
                            </svg>
                            
                            <div class="card-body">
                            <h6>${video.nome}</h6>
                            <p class="card-text">${video.descricao}</p>
                            </div>
                        </button>
                    </div>
                </div>
            `;
        })
        const cardsCotainerHtml = document.getElementById("cardsContainer");
        cardsCotainerHtml.innerHTML = cards;
        return;
    }
    mostrarMensagem("mensagem", "Nenhum vídeo encontrado", "alerta");
}

const selectVideo = (id) => {
    /* 
    Seleciona o vídeo clicado, seta o id no localstorage e navega para a tela do vídeo individual.
    */
    if(id) {
        localStorage.setItem("videoSelecionadoId", id);
        window.location = "/src/paginas/video.html";
    }
}