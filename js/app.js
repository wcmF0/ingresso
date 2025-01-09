let qtdPista = document.getElementById("qtd-pista");
let qtdSuperior = document.getElementById("qtd-superior");
let qtdInferior = document.getElementById("qtd-inferior");


function comprar () {
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);
    let quantidade2 = document.getElementById("qtd")
    if (quantidade2.value == "") {alert("Por Favor Insira um Numero para Comprar os Ingressos"); 
    return;}
    



//  Compra os ingressos da ala inferior

    if (tipoIngresso == "inferior") {if (qtdInferior.innerHTML == 0) {alert('Os ingressos para sessão inferior esgotaram');
    return;
    }
    }

    if (tipoIngresso == "inferior") {if (quantidade > qtdInferior.innerHTML) {alert("Você esta tentando comprar mais ingressos do que o disponivel na sessão inferior");
    return;
    }
    }
    if (tipoIngresso == "inferior") {qtdInferior.innerHTML = qtdInferior.innerHTML - quantidade;};


// Compra os ingressos da ala superior
    if (tipoIngresso == "superior") {if (qtdSuperior.innerHTML == 0) {alert('Os ingressos para sessão superior esgotaram');
    return;
    }
    }

    if (tipoIngresso == "superior") {if (quantidade > qtdSuperior.innerHTML) {alert("Você esta tentando comprar mais ingressos do que o disponivel na sessão superior");
    return;
    }
    }
    if (tipoIngresso == "superior") {qtdSuperior.innerHTML = qtdSuperior.innerHTML - quantidade;};

// Compra os ingressos da ala Pista
    if (tipoIngresso == "pista") {if (qtdPista.innerHTML == 0) {alert('Os ingressos para sessão Pista esgotaram');
    return;
    }
    }

    if (tipoIngresso == "pista") {if (quantidade > qtdPista.innerHTML) {alert("Você esta tentando comprar mais ingressos do que o disponivel na sessão Pista");
    return;
    }
    }
    if (tipoIngresso == "pista") {qtdPista.innerHTML = qtdPista.innerHTML - quantidade;}; 
    }