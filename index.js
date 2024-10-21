$(document).ready(function () {

    const user = $('#name').text();
    const endpoint = `https://api.github.com/users/${user} `

    fetch(endpoint).then(function (resposta) {
        return resposta.json()
    })
        .then(function (json) {

            const avatarUrl = json.avatar_url;
            $('#avatar').attr('src', avatarUrl);

            const username = json.login;
            $('#username').html(username)

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
            alert('Ocorreu um erro ao bucar o usuário, tente novamente!');
        })
        .finally(function () {
            alert('Deu certo')
        })

})