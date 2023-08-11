document.addEventListener("DOMContentLoaded", () => {
    const div = document.querySelector("div");
    div.addEventListener("click", (event) => {
        alert("Hola! Soy el div");{
        event.stopPropagation();
    }
})
});

