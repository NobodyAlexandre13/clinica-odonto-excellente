document.getElementById("secureForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let data = document.getElementById("data").value;
    let servico = document.getElementById("servico").value;

    let formData = new FormData();
    formData.append("nome", nome);
    formData.append("email", email);
    formData.append("data", data);
    formData.append("servico", servico);

    fetch("config/enviar_email.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        let modal = document.getElementById("modal");
        let modalMessage = document.getElementById("modal-message");

        if (data.status === "success") {
            modalMessage.innerHTML = "✅ Marcação feita com sucesso!";
        } else {
            modalMessage.innerHTML = "❌ Marcação não foi feita. Tente novamente!";
        }
        
        modal.style.display = "flex";
    })
    .catch(error => console.log("Erro:", error));
});

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}