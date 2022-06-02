const URL = 'http://localhost:3000/videos'

window.onload = () => {
    carregarVideos();
};

const carregarVideos = () => {
    console.log("Carregar vídeos")
    fetch(URL)
    .then((resposta) => { 
        if (resposta.ok && resposta.status === 200) {
            
            resposta.json().then(videos => {
                const videosList = document.getElementById('lista-videos');
                let celulas = "";

                videos.forEach((video) => {
                    celulas += 
                    `<tr>
                          <th scope="row">${video.id ? video.id : ""}</th>
                          <td>${video.nome ? video.nome : ""}</td>
                          <td>${video.descricao ? video.descricao : ""}</td>
                          <td>${video.url ? video.url : ""}</td>
                          <td>
                            <button class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button"><svg
                              xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              class="bi bi-pencil-square" viewBox="0 0 16 16">
                              <path
                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg> Editar</button>
                          </td>
            
                         <td>
                            <button class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3"
                              viewBox="0 0 16 16">
                              <path
                                d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                            </svg> Deletar</button>
                         </td>
                    </tr>`;

                  });
                  videosList.innerHTML = celulas;
            })
            
        }
    })  
}
    


    



// URL da API de dados

// URL = 'http://localhost:3000/videos'

// const videosList = document.getElementById('videos-list');

// fetch(URL)
//     .then(res => res.json())
//     .then(videos => {
//         let lista_videos = '';
//         for (let i = 0; i < videos.length; i++) {
            
//             <tr>
//                 <th>${videos[i].id}</th>    
//                 <th>${videos[i].nome}</th>
//                 <td>${videos[i].descrição}</td>
//                 <td>${videos[i].url}</td>
                
//                 <td>
//                     <a onclick="getProduto(${videos[i].id});" 
//                     class="btn btn-warning btn-sm" 
//                     data-toggle="modal" data-target="#produto-modal">
//                     <i class="fa fa-edit"></i>  Editar
//                     </a>
//                     <a onclick="$('#id-prod').text(${videos[i].id});" class="btn btn-danger btn-sm" 
//                     data-toggle="modal" data-target="#modal-delete">
//                     <i class="fa fa-trash"></i> Remover
//                     </a>
//                 </td>
//             </tr>
            
//             videosList.innerHTML = lista_videos;
//         }
//     });

// //=================================================================================================

// // DELETE - PROCEDIMENTO PARA EXCLUIR UM PRODUTO
// const produtoDelete = document.getElementById('btn-delete');

// videoDelete.addEventListener('click', (e) => {

//     let id = $('#id-video').text();

//     fetch(`${URL}/${id}`, {
//         method: 'DELETE',
//     })
//     .then(res => res.json())
//     .then(() => location.reload());

// })

// //=================================================================================================

// // CREATE or UPDATE - PROCEDIMENTO PARA CRIAR OU EDITAR UM PRODUTO

// const videoForm = document.getElementById('video-form');

// videoForm.addEventListener('submit', (e) => {

//     // RECUPERA O ID DO PRODUTO
//     let id = parseInt($('#edit-prod-id').text());    

//     // RECUPERA OS DADOS DO PRODUTO
//     const video = JSON.stringify({
//         id: document.getElementById('produto-id').value,
//         nome: document.getElementById('produto-nome').value,
//         descrição: document.getElementById('produto-descrição').value,
//         url: document.getElementById('produto-url').value
//     })

//     if (id >= 0) {
//         fetch(`${URL}/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: produto
//         })
//         .then(res => res.json())
//         .then(() => location.reload());  
//     }
//     else{ 
//         fetch(URL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: produto
//         })
//         .then(res => res.json())
//         .then(() => location.reload());  
//     }      
// })

// //=================================================================================================

// // PROCEDIMENTO PARA RECUPERAR OS DADOS DE UM PRODUTO NA API
// function getProduto(id){

//     if(id == 0){
//         $('#edit-prod-id').text("");
//         $( "#produto-id" ).prop( "disabled", false );
//         $('#produto-id').val("");
//         $('#produto-nome').val("");
//         $('#produto-descrição').val("");
//         $('#produto-url').val("");
//     }else{
//         $('#edit-prod-id').text(id);
//         fetch(`${URL}/${id}`).then(res => res.json())    
//         .then(data => {
//             $( "#produto-id" ).prop( "disabled", true );
//             $('#produto-id').val(data.id);
//             $('#produto-nome').val(data.nome);
//             $('#produto-descrição').val(data.descrição);
//             $('#produto-url').val(data.url);
//         });
//     }    
// }

