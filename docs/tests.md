# Plano de Testes de Software

Id | Página |Requisito Funcional| Funcionalidade | Cenário de Teste|
---| ------ | ----------------- | -------------- | ----------------|
001| Vídeos | x                 | Exibir os vídeos cadastrados | Ao navegar para a tela de vídeos, o sistema deve carregar todos os vídeos cadastrados, caso não tenha nenhum vídeo deve mostrar a mensagem "Nenhum vídeo encontrado".
002| Vídeos | RF-003 |Pesquisa de Tutoriais por Assunto | Pré requisito, existir vídeo cadastrado. Após acessar a página de vídeos e o sistema mostrar os vídeos em tela, o usuário deverá clicar  na barra de pesquisa no topo da tela, digitar o termo a ser pesquisado  e o sistema deverá filtrar os vídeos baseado nos termos informados.
003| Vídeos | x |Navegar para vídeo selecionado | Pré requisito, existir vídeo cadastrado. Após acessar a página de vídeos e o sistema mostrar os vídeos em tela, o usuário deverá clicar em um dos vídeos e o sistema deverá navegar para a tela do vídeo selecionado.
004| Gerenciar Vídeos | x  | Tela Inicial Gerenciar Vídeos |Ao acessar a página de Gerenciar vídeos, a mesma deve mostrar todos os vídeos previamente inseridos, caso existam.
005| Gerenciar Vídeos | RF-002 | Inserir novo vídeo |Ao clicar no botão novo vídeo, o sistema deve abrir um modal onde o administrador deverá preencher os campos de id, título, descrição e link do vídeo. Após está ação, o vídeo será inserido na página.
006| Gerenciar Vídeos | x |Editar um vídeo | Ao clicar no botão de editar, o sistema abre um modal carregando os dados do vídeo previamente cadastrado e com isso, é possível editar os campos título, descrição e link do vídeo. O id do produto fica indisponível para edição.
007| Gerenciar Vídeos | x |Deletar um vídeo | Ao clicar no botão de deletar, o sistema abre um modal solicitando a confirmação da exclusão do vídeo. Ao clicar em “Sim”, o vídeo é deletado.


-------------

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

## Ferramentas de Testes (Opcional)

---------
Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

# Registro de Testes de Software

Id do Teste | Resultado | Vídeo
---| ------ | ---------- 
001| O sistema carrega os vídeos do banco e quando não tem vídeo mostra mensage. | [NenhumVideoEncontrado](registro-de-testes/NenhumVideoEncontrado.gif)
002| O sistema filtra os vídeos baseado nos termos informados. | [PesquisarVideo](registro-de-testes/pesquisarVideo.gif)
003| Ao clicar no vídeo o sistema navega para a tela do vídeo selecionado. | [PesquisarVideo](registro-de-testes/pesquisarVideo.gif)
004| O sistema carrega os vídeos do banco de dados. | [TelaInicialGerenciarVideos](https://user-images.githubusercontent.com/91692537/173960460-99a9d18b-9617-4ff7-bd5d-4ca4723e2550.png)
005| O sistema insere um novo vídeo. | [InserirVideo](registro-de-testes/InserirVideo.gif)
006| Ao clicar no vídeo o sistema navega para a tela do vídeo selecionado. | [EditarVideo](registro-de-testes/EditarVideo.gif)
007| Ao clicar no vídeo o sistema exclui o vídeo selecionado. | [DeletarVideo](registro-de-testes/DeletarVideo.gif)

# Registro de testes 

## ID 001, 002 e 003 Nenhum vídeo encontrado e Pesquisar Vídeos.

![pesquisarVideo](https://user-images.githubusercontent.com/38298179/175183450-6a5f1d77-a7ce-4fab-bc95-99aeb24898a2.gif)

![NenhumVideoEncontrado](https://user-images.githubusercontent.com/38298179/175183469-b31d2edc-91b0-4d58-a8a8-eb0d5d34531c.gif)

## ID 004 Gerenciar Vídeos

![TelaInicialGerenciarVideos](https://user-images.githubusercontent.com/38298179/175183516-d4b44733-02ba-41be-ae0e-ccde3aa96632.png)

## ID 005 Inserir Vídeo

![InserirVideo](https://user-images.githubusercontent.com/38298179/175183557-e3567677-57bd-4c9d-8b52-40ab73296a54.gif)

## ID 006 Editar Vídeo

![EditarVideo](https://user-images.githubusercontent.com/38298179/175183594-1147a57a-6ea1-426b-b9ab-6d06ea8b48fb.gif)

## ID 007 Deletar Vídeo

![DeletarVideo](https://user-images.githubusercontent.com/38298179/175183829-a374496d-b3ac-4211-80a5-7d907f32ccf7.gif)


## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
