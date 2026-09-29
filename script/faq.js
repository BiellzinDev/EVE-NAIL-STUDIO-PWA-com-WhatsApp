const btnaccordionMessage = document.querySelectorAll(".accordion-header ")
const caixaAccordion = document.querySelectorAll(".accordion-body")
const btnAccordionSub = document.querySelectorAll(".accordion-sub")

btnaccordionMessage.forEach((botao) =>{
    botao.addEventListener("click", (event)=>{
        //Crio a constante que armazena o data-id do article clicado
        const sanfona = event.target.closest(".container-sanfona").dataset.id
        //Como já tenho o elemento clicado, paercorro pelas caixas para validar
        caixaAccordion.forEach((caixa) =>{
            //Valido qual caixa tem o data-id e ativo ela
            if(sanfona === caixa.dataset.id){
                caixa.classList.toggle("actived")
            }else{
                return
            }
        })
    })
})

 btnAccordionSub.forEach((btnaccordion) =>{
     btnaccordion.addEventListener("click",(event)=>{
        //Ativa acordeon apenas da sub categoria clicada pegando o proximo filho da caixa
        btnaccordion.nextElementSibling.classList.toggle("actived")
     })
 })