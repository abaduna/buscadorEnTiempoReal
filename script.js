document.addEventListener("keyup", e=>{
   if (e.target.matches("#buscador")) {
    document.querySelectorAll(".articulo").forEach(fruta =>{
        fruta.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())  
        ? fruta.classList.remove("filtro") 
        : fruta.classList.add("filtro") 
    })
   }
})