function mostrarValor(){
    let usuario = document.getElementById('inUsuario').value;
    let idade = document.getElementById('inIdade').value;
    let jogo = document.getElementById('inJogo').value;
    let mensagem = document.getElementById('outMensagem');
    
    mensagem.textContent = `Olá ${usuario}, você um jogador de ${jogo} e tem ${idade} de idade.`

}