const carrinho = []
function adicionar(){
    let produto = document.getElementById('produto').value
    let quantidade = Number(document.getElementById('quantidade').value)
    let listaProdutos = document.getElementById('lista-produtos')

    for(let i=0; i<=quantidade;i++){
    carrinho.push(produto);}
    listaProdutos.textContent = carrinho.join(", ");

    

}

