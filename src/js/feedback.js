window.onload = () => {
    montarTabelaFeedback();
}

const carregarVideos = (email) => {
    return fetch(`http://localhost:3000/videos?email=${email}`).then(resposta => {
        if(resposta.ok && resposta.status === 200) {
            return resposta.json();
        }

        if(resposta.status === 404) {
            mostrarMensagem("mensagem", "Nenhum video encontrado.", "info");
        }

    }).catch(erro => {
        console.log(`Erro ao carregar os videos. ${erro}`);
        mostrarMensagem("mensagem", "Não foi possível carregar os feedbacks. Tente mais tarde.", "alerta");
    })
}

const montarTabelaFeedback = () => {
    let celulas = "";
    const corpoTabelaHtml = document.getElementById("corpoTabela");
    carregarVideos().then(videos => {
        if(videos == "") {
            mostrarMensagem("mensagem", "Não encotramos nenhum vídeo.", "alerta");
            tabelaHtml = document.getElementById("tabelaFeedback");
            tabelaHtml.innerHTML = "";
            return;
        }

        videos.forEach(video => {
            const avaliacao = video.avaliacao;
            celulas += `<tr>
            <th scope="row">${video.nome ? video.nome : ""}</th>
            <td>${avaliacao.excelente ? avaliacao.excelente : "0"}</td>
            <td>${avaliacao.bom ? avaliacao.bom : "0"}</td>
            <td>${avaliacao.regular ? avaliacao.regular : "0"}</td>
            <td>${avaliacao.ruim ? avaliacao.ruim : "0"}</td>
            <td>${avaliacao.pessimo ? avaliacao.pessimo : "0"}</td>
            </tr>`
        });
        corpoTabelaHtml.innerHTML = celulas;
    });
}