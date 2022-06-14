# Plano de Testes de Software

Id | Página |Requisito Funcional| Funcionalidade | Cenário de Teste|
---| ------ | ----------------- | -------------- | ----------------|
001| Vídeos | x                 | Exibir os vídeos cadastrados | Ao navegar para a tela de vídeos, o sistema deve carregar todos os vídeos cadastrados, caso não tenha nenhum vídeo deve mostrar a mensagem "Nenhum vídeo encontrado".
002| Vídeos | RF-003 |Pesquisa de Tutoriais por Assunto | Pré requisito, existir vídeo cadastrado. Após acessar a página de vídeos e o sistema mostrar os vídeos em tela, o usuário deverá clicar  na barra de pesquisa no topo da tela, digitar o termo a ser pesquisado  e o sistema deverá filtrar os vídeos baseado nos termos informados.
003| Vídeos | x |Navegar para vídeo selecionado | Pré requisito, existir vídeo cadastrado. Após acessar a página de vídeos e o sistema mostrar os vídeos em tela, o usuário deverá clicar em um dos vídeos e o sistema deverá navegar para a tela do vídeo selecionado.

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
001| O sistema carrega os vídeos do banco e quando não tem vídeo mostra mensage. | [NenhumVideoEncontrado](registro-de-testes/nenhumVideoEncontrado.gif)
002| O sistema filtra os vídeos baseado nos termos informados. | [PesquisarVideo](registro-de-testes/pesquisarVideo.gif)
003| Ao clicar no vídeo o sistema navega para a tela do vídeo selecionado. | [PesquisarVideo](registro-de-testes/pesquisarVideo.gif)

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)