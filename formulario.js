function send(){ 
var SUBJECT = document.getElementById('subject').value
var IDADE = document.getElementById('idade').value
var EMAIL = document.getElementById('email').value
var TELEFONE = document.getElementById('telefone').value
var MENSAGEM = document.getElementById('mensagem').value
//var ENVIAR = document.getElementById('enviar').value
var RESULT= 'Titulo: '+SUBJECT+ 'Idade: '+IDADE+ 'Email: ' +EMAIL+ 'Telefone: ' +TELEFONE+ 'Mensagem: ' +MENSAGEM
var caracteres = ("mailto:"+EMAIL+'?subject='+SUBJECT+'&body='+RESULT)
alert(caracteres)
window.open(caracteres)
}