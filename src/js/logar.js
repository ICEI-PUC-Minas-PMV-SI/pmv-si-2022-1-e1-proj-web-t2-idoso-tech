
const carregarUsuario = (email) => {
    return fetch(`http://localhost:3000/usuarios?email=${email}`).then(resposta => {
        if(resposta.ok && resposta.status == 200) {
            return resposta.json();
        }

        if(resposta.status == 404) {
            alert("Nenhum usuário encontrado.");
        }
    }).catch(erro => {
        alert(`Não foi possível carregar usuário ${erro}`);
    })
}

const validate = () => {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    carregarUsuario(email).then(usuarios => {
        const usuario = usuarios[0]
        let logged = false;

        if (usuario.email == email && usuario.senha == senha) {
            alert("Usuário autenticado");
            window.location = "/src/paginas/video.html";
            //document.getElementById("form").action = "/src/paginas/video.html";
            //document.getElementById("form").submit();
        } else {
            alert("Senha incorreta");
            //document.getElementById("form").action = "/src/paginas/logar.html";
            //document.getElementById('msg').innerHTML = `Usuário/senha inválidos `;
        };
    })

}
