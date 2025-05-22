var formProduto = document.getElementById("form-produto")

function cadastrarProduto(event) {
    event.preventDefault()

    var produto = document.getElementById("nome-produto").value
    var quantidade = document.getElementById("quantidade-produto").value
    var imagem = document.getElementById("url-imagem").value

    console.log(produto)
    console.log(quantidade)
    console.log(imagem)

    console.log("Função cadastrarProduto chamada")
}

formProduto.addEventListener("submit", cadastrarProduto)

