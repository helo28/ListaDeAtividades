const btnAdicionar = document.querySelector("#btnAdicionar");

// VAI OUVIR A TELA O EVENT OU SEJA ELE VAI SABER O QUE A PESSOA ESTÁ FAZENDO NA TELA, AQUI NO CASO É CLICAR
btnAdicionar.addEventListener("click", function(){
    const item = document.createElement("li");
    // RECEBE UM NOVO ITEM LÁ NA INSERÇÃO
    const caixaValor = document.querySelector("#minhaCaixa").value;
    // CRIA UM NOVO ELEMENTO COM O QUE ESTÁ NO CAIXA VALOR
    const novaTarefa = document.createTextNode(caixaValor); 
    item.appendChild(novaTarefa);

    if(caixaValor === "") {
        alert("É Preciso Informar uma Tarefa!!!");
    } else {
        document.getElementById("itens").appendChild(item);
    }

    document.querySelector("#minhaCaixa").value="";

    const span = document.createElement("span");
    const icon = document.createTextNode("X");
    span.className = "fechar";
    span.appendChild(icon);
    item.appendChild(span);

    // VAI CONTAR QUANTOS CLOSES (X) TÊM
    const close = document.querySelectorAll(".fechar");

    for (let i=0; i< close.length; i++) {
        close[i].addEventListener('click', function() {
            // VAI SALVAR NO ELEMENTO ITEM O QUE ELE OUVIU DA TELA PARA FAZER
            const item = this.parentElement;
            item.style.display = "none";
        });
    }
    
});

const list = document.querySelector("ul");

list.addEventListener("click", function(ev) {
    if(ev.target.nodeName ==="LI") {
        ev.target.classList.toggle ("checado");
    }
});