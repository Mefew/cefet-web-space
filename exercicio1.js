// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

let arrBotoes = document.getElementsByClassName('botao-expandir-retrair');

for (let botao of arrBotoes) {
  botao.addEventListener("click", function() {
    let paragrafo = botao.parentNode;
    //Se nao esta expandido
    if (paragrafo.classList.contains('expandido'))
    {
      paragrafo.classList.remove('expandido');
      botao.innerHTML = "+";
    }
    else
    {
      paragrafo.classList.add('expandido');
      botao.innerHTML = "-";
    }
  });
}

// Selecionar todos os botoes de expandir / retrair
// Para cada botão
	// Registrar o evento de clique

	// Encontrar qual é o paragrafo correspondente
	// Se tiver a classe expandido, removê-la, ou entao adiciona-la
	// Na ghora de mexer na classe, mudar o botão
