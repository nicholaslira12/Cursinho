function send() {
    var SUBJECT = document.getElementById('subject').value
    var IDADE = document.getElementById('idade').value
    var EMAIL = document.getElementById('email').value
    var TELEFONE = document.getElementById('telefone').value
    var MENSAGEM = document.getElementById('mensagem').value
    //var ENVIAR = document.getElementById('enviar').value
    var RESULT = 'Titulo: ' + SUBJECT + 'Idade: ' + IDADE + 'Email: ' + EMAIL + 'Telefone: ' + TELEFONE + 'Mensagem: ' + MENSAGEM
    var caracteres = ("mailto:" + EMAIL + '?subject=' + SUBJECT + '&body=' + RESULT)
    alert(caracteres)
    //window.open(caracteres)

    var myHeaders = new Headers();
    //myHeaders.append("Content-Type", "application/javascript");

    var raw = "{\r\n  \"Titulo\": \"Teste 03 \",\r\n    \"Idade\": \"25\",\r\n    \"E-mail\": \"nicholas@gmail.com\",\r\n    \"Telefone\": \"1196435623\",\r\n    \"Mensagem\": \"Formulário para teste\"\r\n\r\n}";

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            "Titulo": SUBJECT,
            "Idade": IDADE,
            "E-mail": EMAIL,
            "Telefone": TELEFONE,
            "Mensagem": MENSAGEM
        }),
        //redirect: 'follow'
    };

    fetch("http://mockbin.org/bin/6bbc8bf8-90f5-4966-8510-a54105f2ed42?", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
}
