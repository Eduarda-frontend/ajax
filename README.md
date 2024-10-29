# 📊 Projeto: Consulta de Usuário no GitHub via API

Este projeto faz uma **consulta à API pública do GitHub** para exibir informações sobre um usuário com base no nome fornecido em uma página HTML. A aplicação utiliza **JavaScript** com **jQuery** e faz requisições à API usando `fetch()`.

---

## ⚙️ Funcionalidades

- Busca **avatar**, **login**, **repositórios públicos**, **seguidores** e **seguindo** de um usuário do GitHub.
- Exibe as informações na página de forma dinâmica.
- Permite acesso ao perfil do usuário via link direto.
- Notifica o usuário sobre o sucesso ou falha da requisição.

---

## 📋 Exemplo de Uso

### **HTML Exemplo:**
Certifique-se de ter os seguintes elementos HTML:

```html
    <header>
        <div class="container">
            <img class="profile-avatar" id="avatar" src="https://via.placeholder.com/180x180" alt="Avatar do usuário">
            <h1 class="profile-name" id="name" >Eduarda-frontend</h1>
            <h2 class="profile-username" id="username" >@eduardarezende</h2>
            <ul class="numbers">
                <li class="numbers-item">
                    <h4>Repositórios</h4>
                    <p id="repositorios"></p>
                </li>
                <li class="numbers-item">
                    <h4>Seguidores</h4>
                    <p id="seguidores"></p>
                </li>
                <li class="numbers-item">
                    <h4>Seguindo</h4>
                    <p id="seguindo"></p>
                </li>
            </ul>
            <a id="link_perfil" href="#" class="profile-link" target="_blank">Ver no Github</a>
        </div>
    </header>
```

---

### **Código JavaScript:**

Aqui está o código responsável pela busca e atualização dos dados:

```javascript
$(document).ready(function () {
    const user = $('#name').text();
    const endpoint = `https://api.github.com/users/${user}`;

    fetch(endpoint)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (json) {
            const avatarUrl = json.avatar_url;
            $('#avatar').attr('src', avatarUrl);

            const username = json.login;
            $('#username').html(username);

            const repositorios = json.public_repos;
            $('#repositorios').html(repositorios);

            const seguidores = json.followers;
            $('#seguidores').html(seguidores);

            const seguindo = json.following;
            $('#seguindo').html(seguindo);

            const linkUrl = json.html_url;
            $('#link_perfil').attr('href', linkUrl);
        })
        .catch(function (erro) {
            alert('Ocorreu um erro ao buscar o usuário, tente novamente!');
        })
        .finally(function () {
            alert('Deu certo');
        });
});
```

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. **Navegue até o diretório do projeto**:
   ```bash
   cd nome-do-repositorio
   ```

3. **Abra o arquivo HTML** no seu navegador e veja o resultado.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura básica da página.
- **CSS3**: (Opcional) Para estilização da interface.
- **JavaScript (ES6+)**: Manipulação de DOM e requisição API.
- **jQuery**: Facilita a manipulação de elementos HTML.
- **API GitHub**: Fonte de dados do projeto.

---

## 🌱 Conceitos Aplicados

- **Requisição API com `fetch()`**.
- **Uso de jQuery para manipular elementos HTML**.
- **Tratamento de erros com `.catch()`**.
- **Uso de `.finally()` para garantir uma ação após a execução da promessa**.

---

## 📋 Estrutura do Repositório

```
📦 nome-do-repositorio
 ┣ 📜 README.md
 ┣ 📜 index.html
 ┣ 📜 script.js
```

---

## 📂 Como Contribuir

1. **Fork este repositório**.
2. Crie uma **branch** para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. **Commit suas alterações**:
   ```bash
   git commit -m 'Adiciona nova feature'
   ```
4. **Push para a branch**:
   ```bash
   git push origin minha-feature
   ```
5. Abra um **Pull Request**.

---

## 📝 Licença

Este projeto é livre para uso. Sinta-se à vontade para modificá-lo e adaptá-lo conforme necessário.
