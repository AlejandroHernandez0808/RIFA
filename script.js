const tablero = document.getElementById("tablero");
const disponiblestexto = document.getElementById("disponibles");
const vendidostexto = document.getElementById("vendidos");


function actualizarcontador (){
    const vendidos = marcados.length;
    const disponible = 100 - vendidos;

    vendidostexto.textContent = vendidos;
    disponiblestexto.textContent = disponible;
}

let marcados = JSON.parse(localStorage.getItem("numerosMarcados")) || [];

for(let i = 0; i < 100; i++){
    const numero = document.createElement("div");
    numero.classList.add("numero")

    const valor = i.toString().padStart(2,"0");
    numero.textContent = valor;

    if(marcados.includes(valor)){
        numero.classList.add("marcado");
    }

    numero.addEventListener("click", () => {
        if (numero.classList.contains("marcado")){
            numero.classList.remove("marcado");
            marcados = marcados.filter(n => n !== valor);
        } else{
            numero.classList.add("marcado");
            marcados.push(valor);
        }

        localStorage.setItem("numerosMarcados", JSON.stringify(marcados));
        actualizarcontador();
    });

    tablero.appendChild(numero);
}

    actualizarcontador()