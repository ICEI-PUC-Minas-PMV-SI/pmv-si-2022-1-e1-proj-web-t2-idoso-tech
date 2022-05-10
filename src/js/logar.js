
function carregarUsuario(){
    return fetch("http://localhost:3000/usuarios?email=${email}").then(resposta => {
        if(resposta.ok && resposta.status === 200) {
            return resposta.json();
        }
    } ). catch(erro => {
        console.log(`Erro ao carregar os usuários. ${erro}`);
    })
}

function validate() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
   


    let logged = false;



    /* GET /posts?title=json-server&author=typicode
     GET /posts?id=1&id=2
     GET /comments?author.name=typicode*/

     carregarUsuario().then(usuario => {
        console.log(usuario);
        if (usuario.email == email && usuario.senha == senha) {

            document.getElementById("form").action = "/src/paginas/video.html";
            document.getElementById("form").submit();
        } else {
            document.getElementById("form").action = "/src/paginas/logar.html";
            document.getElementById('msg').innerHTML = `Usuário/senha inválidos `;
        };

     })

   /* fetch(`http://localhost:3000/usuarios?email=${email}`).then(resposta => {
        if (resposta.ok && resposta.status == 200) {
            const usuario = resposta.json();
            usuario.then(console.log);
            if (usuario.email == email && usuario.senha == senha) {

                document.getElementById("form").action = "/src/paginas/video.html";
                document.getElementById("form").submit();
            } else {
                document.getElementById("form").action = "/src/paginas/logar.html";
                document.getElementById('msg').innerHTML = `Usuário/senha inválidos `;
            };


        }
    }) */


  //  const carregarVideos = () => { return fetch("http://localhost:3000/videos").then(resposta => { if (resposta.ok && resposta.status === 200) { return resposta.json(); } if (resposta.status === 404) { mostrarMensagem("mensagem", "Nenhum video encontrado.", "info"); } }).catch(erro => { console.log(`Erro ao carregar os videos. ${erro}`); mostrarMensagem("mensagem", "Não foi possível carregar os feedbacks. Tente mais tarde.", "alerta"); }) }


}
