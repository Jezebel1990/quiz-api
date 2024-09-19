# Quiz API - API REST de Perguntas e Respostas
Este repositório contém uma API REST simples de um quiz de conhecimentos gerais, desenvolvida em Node.js com Express.
A API fornece 20 perguntas com quatro alternativas, sendo uma delas a correta. Também inclui um Dockerfile para facilitar a criação de containers e execução da aplicação.

## Funcionalidades
- Obter uma lista de perguntas de quiz.
- Verificar a resposta do usuário e determinar se está correta.
- Rodar a aplicação em um container Docker para facilitar o deploy.

## Endpoints

### Obter todas as perguntas
- **Rota**: `/quiz`
- **Método**: `GET`
- **Descrição**: Retorna todas as perguntas do quiz com suas respectivas opções.

### Obter uma pergunta específica
- **Rota**: `/quiz/:id`
- **Método**: `GET`
- **Descrição**: Retorna uma pergunta específica pelo seu ID.

  ### Verificar resposta
- **Rota**: `/quiz/:id/answer`
- **Método**: `POST`
- **Descrição**: Verifica se a resposta enviada está correta.
- **Body**: Um JSON com a chave answer, que representa a alternativa escolhida.

  #### Exemplo de body:
  ```json
  {
  "answer": 3
  }
   ```
     
#### Exemplo de resposta:
 ```json
  {
    "correct": true
  }
 ```

## Executando Localmente
 ### Requisitos
 - **Node.js**: Versão 14.x ou superior.
 - **npm**: Versão 6.x ou superior.
 - **Docker**

 ### Passos para execução local
 Clone o repositório:
  ```
https://github.com/Jezebel1990/quiz-api.git
 ```
Instale as dependências:
  ```
cd quiz-api
npm install
 ```
Inicie a API:
  ```
node index.js
```
Acesse a API no navegador ou em um client HTTP (como Postman) na URL
http://localhost:3000

### Utilizando Docker
Para rodar a aplicação utilizando Docker, siga os passos abaixo:
- **Build da imagem Docker**:
   ```
   docker build -t quiz-api .
   ```
- **Executar a imagem**:
    ```
    docker run -p 3000:3000 quiz-api
    ```
    Acesse a API em http://localhost:3000  ou  baixe a imagem em: https://hub.docker.com/r/jezebelguedes/quizapi
