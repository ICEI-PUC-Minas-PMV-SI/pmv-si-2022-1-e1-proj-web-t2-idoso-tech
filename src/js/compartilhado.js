const mostrarMensagem = (id, texto, tipo) => {
    // Mostra mensagem tipo popup para o usuário.
    // Params: 
    // - id: é o id do html para mostrar ou esconder a menssagem.
    // - texto: é a mensagem a ser mostrada em tela. 
    // - tipo: é o tipo de mensagem. Valores válidos: sucesso, erro, info, alerta.
    
    
    if (!texto || !tipo) {
        throw TypeError("Texto ou tipo inválido.");
    }

    if (tipo !== "sucesso" && tipo !== "erro" && tipo !== "info" && tipo !== "alerta") {
        throw TypeError("Tipo inválido. Valores aceitos - sucesso, erro, info, alerta");
    }

    let mensagemHtml = document.getElementById(id);
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