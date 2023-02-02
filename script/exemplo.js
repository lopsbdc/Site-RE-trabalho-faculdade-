// essa função vai mudar a foto da página
// foto é a variável que representa o arquivo da imagem
function mudaFoto(foto){
	// recupera o elemento da página HTML cujo id é icone
	// atribui a foto para este elemento
	// foto pode receber banco.jpg, ling.jpg, ia.jpg, redes.jpg,
	// eng.jpg
	document.getElementById('icone').src = foto;
}