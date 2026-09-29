document.addEventListener('DOMContentLoaded', () => {

    const btnWhats = document.querySelectorAll(".btn-whats");
    // ⚠️ COLOQUE SEU NÚMERO AQUI (Com DDD e código do país 55)
    const numeroWhatsApp = "5511960246299"; 

    btnWhats.forEach((botao) =>{
        botao.addEventListener("click", () =>{
            console.log("Clicou")

            // 2. Monta o texto padrão formatado com quebras de linha (%0A) e negrito (*texto*)
            const mensagem = `Olá! Gostaria de agendar meu momento Nail e saber os horários disponíveis.`

            // 3. Constrói o URL da API oficial do WhatsApp
            const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagem}`;

            // 4. Abre a janela do WhatsApp com os dados preenchidos
            window.open(urlWhatsApp, '_blank');
            })
        })

})



      
      
      

      
