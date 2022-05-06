window.onload = () => {
    try {
        carregarVideo(1);
    } catch (error) {
        console.log(`Algo deu errado ${error}`);
        return;
    }
}

const carregarVideo = (id) => {
    // Carrega um vídeo na tela.
    // Params: id do vídeo a ser carregado.
    if(!id) {
        throw Error("Video without id.");
    }

    fetch(`http://localhost:3000/videos/${id}`)
        .then(reponse => reponse.json())
        .then(video => {
            document.getElementById("video_src").src = video.url;
            document.getElementById("videoTitle").innerHTML = video.nome;
            document.getElementById("videoId").innerHTML = video.id;
        })
        // TODO mostrar mensagem de alerta de erro.
        .catch(err => alert(`Algo deu errado! ${err}`));
}

const pegarVideo = async (id) => {
    // Retorna um vídeo do json server.
    // Params: id do vídeo a ser carregado.
    if(!id) {
        throw Error("Video without id.");
    }

    return fetch(`http://localhost:3000/videos/${id}`)
    .then(reponse => reponse.json())
    .then(video => video)
    // TODO mostrar mensagem de alerta de erro.
    .catch(err => alert(`Pegar o vídeo falhou! ${err}`));
}

const incrementarAvaliacao = (nota, avaliacao) => {
    // Incrementa o valor da nota do vídeo.
    // Params: nota e o json de avaliacao.

    if(!nota || !avaliacao) {
        throw Error("Erro ao avaliar o vídeo.");
    }
    switch(nota) {
        case "excelente":
            avaliacao.excelente += 1;
            break;
        case "bom":
            avaliacao.bom += 1;
            break;
        case "regular":
            avaliacao.regular += 1;
            break;
        case "ruim":
            avaliacao.ruim += 1;
            break;
        case "pessimo":
            avaliacao.pessimo += 1;
    }
    return avaliacao;
}

const avaliarVideo = (nota) => {
    // Avalia o video selecionado.
    // Params: nota do vídeo.
    const videoId = document.getElementById("videoId").innerHTML;
    pegarVideo(videoId)
    .then(video => {
        try {
            // incrementa a nota do vídeo.
            video.avaliacao = incrementarAvaliacao(nota, video.avaliacao);
        } catch (error) {
            // TODO mostrar mensagem de alerta de erro.
            alert("Avaliar video falhou, tente novamente depois.");
            return;
        }

        // Atualiza o video com a nova nota. 
        fetch(`http://localhost:3000/videos/${videoId}`, {
            method: "PUT",
            body: JSON.stringify(video),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }).then(response => {
            // Esconder avaliação do vídeo.
            // TODO mostrar mensagem bonita de sucesso.
            alert("Vídeo avaliado com sucesso!");
            
            // TODO mostrar mensagem de alerta de erro.
        }).catch(err => alert("Avaliar video falhou, tente novamente depois."))
    });
}

