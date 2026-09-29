const botoes = document.querySelectorAll(".comon")
const todoElements = document.querySelectorAll(".todo")
//Variavel que valida se estou clicando
let navegandoPorClique = false
//variavel que armazena a seção clicada
let secaoClicada = null

//Criação do observador das seções
const observer = new IntersectionObserver(
    //Quando uma seção muda sua visibilidade, o navegador executa
    (entries) =>{
        //Para cada seção que mudou sua visibilidade, faça alguma coisa
        entries.forEach((entry) =>{
            //Verifica se a seção que estou olhando está dentro do viewPort
            if(entry.isIntersecting){
                //Valida se estou navegando por clique ou rolagem
                if(navegandoPorClique === true){
                    //verifica se a seção clicada é igual a do viewport
                    if(entry.target.id === secaoClicada){
                        //reseta a variavel do clique para voltar a ativação por rolagem
                        navegandoPorClique = false
                    }
                    else{
                        return
                    }
            }
                botoes.forEach(classes =>{
                const icone = classes.querySelector("i")
                if(icone){
                    icone.className = icone.className.replace("fi-sr-", "fi-rr-")
                }
                })
                //Remove a classe active em qualquer botão que esteja ativo
                botoes.forEach((link) => link.classList.remove("active-button"))
                
                //Adiciona a classe ao rolar a página
                console.log(entry.target.id)
                const elemento = document.querySelector(`a[href="#${entry.target.id}"]`)
                elemento.firstChild.className = elemento.firstChild.className.replace("fi-rr-", "fi-sr-")
                elemento.classList.add("active-button")
        }
    })
},
{threshold: 0.5}
)

todoElements.forEach((sec) => observer.observe(sec))

botoes.forEach(botao => {
    botao.addEventListener("click",() =>{
        //Remove a classe active em qualquer botão que esteja ativo
        botoes.forEach(classes =>{
            classes.classList.remove("active-button")
            const icone = classes.querySelector("i")
            if(icone){
                icone.className = icone.className.replace("fi-sr-", "fi-rr-")
            }
            
            navegandoPorClique = true
            secaoClicada = botao.hash.replace("#", "");
        })
        //Adiciona a classe ao botão clicado
        botao.classList.add("active-button")
        const icone = botao.querySelector("i")
        if(icone){
            icone.className = icone.className.replace("fi-rr-", "fi-sr-")
        }
        
    })
})

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("./service-worker.js")
            .then(() => {
                console.log("Service Worker registrado com sucesso!");
            })
            .catch(error => {
                console.error("Erro ao registrar Service Worker:", error);
            });
    });
}



