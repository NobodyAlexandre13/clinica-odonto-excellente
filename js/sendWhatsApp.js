document.getElementById("marcacaoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne recarregamento da página
    
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let data = document.getElementById("data").value;
    let servico = document.getElementById("servico").value;

    if (!nome || !email || !data || !servico) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    let telefone = "244926224888"; // Substitua pelo número do WhatsApp da clínica
    let mensagem = `Olá, gostaria de marcar um serviço!\n\n👤 Nome: ${nome}\n📧 Email: ${email}\n📅 Data: ${data}\n🦷 Serviço: ${servico}`;
    
    let url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
});