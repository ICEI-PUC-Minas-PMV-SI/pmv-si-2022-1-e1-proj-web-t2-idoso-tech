window.onload = () => {
    try {
        // Carregar vídeo selecionado da tela de videos.
        carregarVideo(1);
    } catch (erro) {
        console.log(`Falha ao carregar o vídeo. ${erro}`);
        mostrarMensagem("Não foi possível carregar o vídeo.", "erro");
        return;
    }
}

const mostrarEsconderAvaliacao = () => {
    // Mostra ou escode a avaliacao se o vídeo já foi avaliado.

    const videoId = document.getElementById("videoId").innerHTML;
    // Atualizar com usuario logado.
    carregarUsuario(1)
        .then(usuario => {
            if (usuario) {
                const resultado = usuario.videosAvaliados.find(id => id == videoId);
                if(resultado) {
                    document.getElementById("avaliacao").hidden = true;
                    mostrarMensagem("Vídeo já avaliado!", "info");
                }
            }
        });
}

const carregarUsuario = (usuarioId) => {
    // Carrega um usuário por id.

    return fetch(`http://localhost:3000/usuarios/${usuarioId}`)
        .then(resposta => {
            if (resposta.ok && resposta.status == 200) {
                return resposta.json();
            }
            if (resposta.status == 404) {
                throw Error("Usuário não encontrado.")
            }
        })
        .then(usuario => usuario)
        .catch(erro => {
            console.log(`Erro ao mostrar/esconder avaliacao. ${erro}`);
        })
}

const carregarVideo = (id) => {
    // Carrega um vídeo na tela.
    // Params: id do vídeo a ser carregado.
    if (!id) {
        throw TypeError("Id do vídeo é obrigatório.");
    }

    pegarVideo(1)
    .then(video => {
        if(video) {
            document.getElementById("video_src").src = video.url;
            document.getElementById("videoTitle").innerHTML = video.nome;
            document.getElementById("videoId").innerHTML = video.id;
            mostrarEsconderAvaliacao();
        }
    })
}

const pegarVideo = async (id) => {
    // Retorna um vídeo do json server.
    // Params: id do vídeo a ser carregado.
    if (!id) {
        throw TypeError("Id do vídeo é obrigatório.");
    }

    return fetch(`http://localhost:3000/videos/${id}`)
        .then(resposta => {
            if(resposta.ok && resposta.status === 200) {
                return resposta.json();
            }

            if(resposta.status == 404) {
                throw Error("Vídeo não encontrado.");
            }
        })
        .then(video => video)
        .catch(err => {
            console.log(`Falha para pegar o vídeo id ${id}. ${err}`)
            mostrarMensagem("Ops! Não foi possível carregar o vídeo.", "erro");
        });
}
const atualizarVideo = (video) => {
    // Atualiza o vídeo.

    return fetch(`http://localhost:3000/videos/${video.id}`, {
        method: "PUT",
        body: JSON.stringify(video),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    }).then(response => response)
        .catch(erro => {
            console.log(`Falha para atualizar o vídeo id ${id} video ${video}. Erro ${erro}`)
            mostrarMensagem("Ops! Não foi atualizar o vídeo.", "erro");
        })
}

const atualizarUsuario = (usuario) => {
    return fetch(`http://localhost:3000/usuarios/${usuario.id}`, {
        method: "PUT",
        body: JSON.stringify(usuario),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    }).then(response => response)
        .catch(erro => {
            console.log(`Falha para atualizar o usuario id ${id} usuario ${usuario}. ${erro}`)
        })
}

const incrementarAvaliacao = (nota, avaliacao) => {
    // Incrementa o valor da nota do vídeo.
    // Params: nota e o json de avaliacao.

    if (!nota || !avaliacao) {
        throw TypeError("Nota ou obj avaliacao não informados.");
    }
    switch (nota) {
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

const mostrarMensagem = (texto, tipo) => {
    // Mostra mensagem tipo popup para o usuário.
    // Params: texto, é a mensagem a ser mostrada em tela. tipo é o tipo de mensagem.
    
    if (!texto || !tipo) {
        throw TypeError("Texto ou tipo inválido.");
    }

    if (tipo !== "sucesso" && tipo !== "erro" && tipo !== "info" && tipo !== "alerta") {
        throw TypeError("Tipo inválido. Valores aceitos - sucesso, erro, info, alerta");
    }

    let mensagemHtml = document.getElementById("mensagem");
    let classe = "";
    switch (tipo) {
        case "sucesso":
            classe = "alert alert-success";
            break;
        case "erro":
            classe = "alert alert-danger";
            break;
        case "info":
            classe = "alert alert-info";
            break;
        case "alerta":
            classe = "alert alert-warning";
            break;
        default:
            classe = "alert alert-dark";
    }

    mensagemHtml.innerHTML = texto;
    mensagemHtml.className = classe;
    mensagemHtml.hidden = false;
    setTimeout(() => {
        mensagemHtml.hidden = true;
    }, 3000)
}



const avaliarVideo = (nota, event) => {
    // Avalia o video selecionado.
    // Params: nota do vídeo.

    event.preventDefault(); // BUG, não está impedindo a tela recarregar.
    //console.log(event.cancelable);
    const videoId = document.getElementById("videoId").innerHTML;
    pegarVideo(videoId)
        .then(video => {
            try {
                // incrementa a nota do vídeo.
                video.avaliacao = incrementarAvaliacao(nota, video.avaliacao);
            } catch (erro) {
                console.log(`Incrementar avaliação falhou. ${erro}`)
                mostrarMensagem("Avaliar video falhou, tente novamente depois.", "erro");
                return;
            }

            // Atualiza o video com a nova nota.
            atualizarVideo(video)
                .then(response => {
                    if (response.ok) {
                        mostrarMensagem("Video avaliado com sucesso!", "sucesso");
                        let avaliacaoHtml = document.getElementById("avaliacao");
                        avaliacaoHtml.hidden = true;

                        // Atualiza usuário com o vídeo avaliado.
                        carregarUsuario(1)
                        .then(usuario => {
                            if(usuario) {
                                usuario.videosAvaliados.push(parseInt(videoId));
                                atualizarUsuario(usuario);
                            }
                        })
                    }
                });
        });
}

