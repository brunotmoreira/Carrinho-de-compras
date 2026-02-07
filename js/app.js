let outValorTotal = document.getElementById('valor-total');
let valorTotal = 0;

function adicionar(){
    //Recurar valores nome do produdo, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let boxQuant = document.getElementById('quantidade');
    let quantidade = boxQuant.value;
    //Calcular o preço * quantidade, ou seja o subtotal
    let preco = quantidade*valorUnitario;
    //adicionar no carrinho 
    if(quantidade<1){
        alert('Favor inserir a quantidade de itens que irá ser adicionada no carrinho.');
        boxQuant.focus();
        return;
    }

    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;
    boxQuant.value = ""
    boxQuant.focus();
    
    //Atualizar o valor total
    valorTotal += preco
    outValorTotal.textContent = `R$ ${valorTotal.toFixed(2)}`

}

function limpar(){
    outValorTotal.textContent =''
    document.getElementById('lista-produtos').textContent= ""
}