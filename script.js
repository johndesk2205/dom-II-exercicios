// Utilize o DOM para adicionar uma função ao clique do botão. Ao clicar no botão, um novo item deve ser adicionado ao container. Por enquanto, o item não precisa de estilização. Ele pode ter apenas um texto, para facilitar sua visualização.

// const botao = document.getElementById("botao")

function adicionaItem(){

    const container = document.getElementById("container")

    const novoItem = document.createElement("article")
    novoItem.classList.add("item")

    novoItem.setAttribute("onclick","removeItem(event)")
    container.appendChild(novoItem)
    console.log(container)
}
function removeItem(event){
    event.target.remove("article")
    
}