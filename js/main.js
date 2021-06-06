function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>obrigado por clicar</b>"
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://globallabs.academy/") //abre uma nova guia quando clicar sobre o agradecimento
    window.location.href="https://globallabs.academy/" //abre o site na mesma guia onde clicou sobre agradecimento
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto")
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){ // O parâmetro "elemento" foi posto apenas para não gerar confusão na resposta dos comandos e um não responder quando o mouse for passado por cima do outro.
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada com sucesso")
}

function funcaochange(elemento){
    console.log(elemento.value)
}
/*var nome = "Carlos Agra";
var idade = 30
alert(nome + " " + "tem" + " " + idade + " " + "anos");
*/