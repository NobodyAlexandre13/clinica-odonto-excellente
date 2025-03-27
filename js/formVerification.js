document.getElementById("secureForm").addEventListener("submit", function(event) {
    let valid = true;

    // Validação do Nome (Apenas letras e espaços)
    let nome = document.getElementById("nome").value.trim();
    let nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (!nomeRegex.test(nome) || nome.length < 3) {
        document.getElementById("errorNome").style.display = "block";
        valid = false;
    } else {
        document.getElementById("errorNome").style.display = "none";
    }

    // Validação do Email
    let email = document.getElementById("email").value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("errorEmail").style.display = "block";
        valid = false;
    } else {
        document.getElementById("errorEmail").style.display = "none";
    }

    // Validação da Data (Apenas datas futuras)
    let dataSelecionada = new Date(document.getElementById("data").value);
    let dataAtual = new Date();
    dataAtual.setHours(0, 0, 0, 0); // Zerando horário para comparação
    if (isNaN(dataSelecionada) || dataSelecionada < dataAtual) {
        document.getElementById("errorData").style.display = "block";
        valid = false;
    } else {
        document.getElementById("errorData").style.display = "none";
    }

    // Validação do Serviço Selecionado
    let servico = document.getElementById("servico").value;
    if (servico === "") {
        document.getElementById("errorServico").style.display = "block";
        valid = false;
    } else {
        document.getElementById("errorServico").style.display = "none";
    }

    // Bloqueio de envio caso haja erro
    if (!valid) {
        event.preventDefault();
    }
});