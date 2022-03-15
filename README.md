# Front-End Development Test

## O Projeto
Projeto desenvolvido por mim para a empresa [7Graus](https://www.7graus.com/) com propósitos de testar as minhas habilidades de Desenvolvimento Front-End para a respectiva vaga.

### Utilizado
- React.js, como framework javascript
- Scss, para estilização
- Axios, para fazer o fetch dos dados

### Compomentes personalizados
- src
  - components
    - Header // somente para fins estéticos
    - User // card que renderiza o usuário
  - pages
    - ListUsers // página que renderiza a listagem de usuários
  - services
    - api.js // serviço para buscar na api os dados

### Todo
- [x] Com os dados que retornam desta api ‘https://randomuser.me/api/’ mostra na view uma grid com 10 users (masculinos OU femininos) com o nome, e imagem.
- [x] Adiciona um botão à view e no click mostra mais 10 resultados.
- [x] O carregamento deverá ter um loading de 2 segundos.
- [ ] Elabora uma classe de testes unitários para validar o load de mais pessoas.

Observações: Infelizmente não consegui implementar os testes nesta tarefa, porque estou iniciando o estudo de testes no momento.

## Como Rodar o Projeto

- Clonar o repositório e acessar a pasta criada.
- Rodar `npm install` para instalar as dependencias.
- Rodar `npm start` para subir um servidor de desenvolvimento.