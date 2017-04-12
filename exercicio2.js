// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let index = 0;

document.getElementById('anterior').addEventListener("click", function() {
    if (index == 0)
        index=4;
    else
        index--;

    document.getElementById('anterior').previousSibling.src = servidorDasImagens + todasAsImagens[index];
});

document.getElementById('proximo').addEventListener("click", function() {
    if (index == 4)
        index=0;
    else
        index++;

    document.getElementById('anterior').previousSibling.src = servidorDasImagens + todasAsImagens[index];
});
