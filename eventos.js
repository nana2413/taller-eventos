document.addEventListener("DOMContentLoaded", () => {

    const div = document.getElementById("div");
    const btn = document.getElementById("saludar");
    
    function saludarDiv () {
        alert("Hola! Soy el div");
    }
    
   div.addEventListener("click", saludarDiv);

   function saludarBoton (div){
    div.stopPropagation ("click", saludarDiv);
    alert("Hola!");
   }  

   btn.addEventListener ("click", saludarBoton);

});
