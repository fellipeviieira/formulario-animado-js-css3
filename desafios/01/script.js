const btnEnviar = document.querySelector(".btn-enviar");
const form = document.querySelector("form");

/*Eventos Pós Clique no botão*/

btnEnviar.addEventListener("click", (event) => { 
    event.preventDefault();

    const fields = [ ...document.querySelectorAll(".input-block input")]

    fields.forEach(field => {
        if (field.value == "") form.classList.add("validate-error")
    });

    const formError = document.querySelector(".validade-error")
    if (formError) {
        formError.addEventListener("animationend", event => {
            if (event.animationName == "error") {
            formError.classList.remove("validate-error");
            }
        });
    }
    else {
        form.classList.add("form-hide");
    }
});

form.addEventListener("animationstart", event => {
    if (event.animationName == "down") {
        document.querySelector("body").style.overflow = "hidden"
    }
})

form.addEventListener("animationend", () => {
    if (event.animationName == "down")
    form.style.dysplay = "none";
    document.querySelector("body").style.overflow = "none"
});

/*Background*/

const ulSquares = document.querySelector("ul.squares");

for (let i = 0; i < 11; i++) {
    const li = document.createElement("li");

    const random = (min, max) => Math.random() * (max - min) + min;

    const size = Math.floor(random(10, 120));

    const position = random (1, 99);

    const delay = random (5, 0.1);
    
    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `${size}px`;

    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`;

    ulSquares.appendChild(li);
}