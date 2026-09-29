const btnEstrelas = document.querySelectorAll(".btn-star")
let contador = 0

btnEstrelas.forEach((estrela) =>{
    estrela.addEventListener("click", ()=>{
        const valorEstrela = Number(estrela.dataset.star)

        //Se clicar novamente na mesma estrela, remove todo o preenchimento
        if(contador === valorEstrela){
            contador = 0
        }else{
            contador = valorEstrela
        }

        //Atualiza as estrelas
        btnEstrelas.forEach((estrela,index) =>{
            if(index < contador){
                estrela.innerHTML = `<i class="fi fi-sr-star"></i>`
            }else{
                estrela.innerHTML = `<i class="fi fi-rr-star"></i>`
            }
        })
    })
})