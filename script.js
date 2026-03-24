let aumento = 0;

const sum = document.getElementById("sum");
const rest = document.getElementById("rest");
const contador = document.querySelector("p");
const box = document.getElementById("caja");

const actualizarContador = () => {
    contador.textContent = `contador ${aumento}`;
    box.style.color = aumento >= 10 ? "white" : "black";
    box.style.backgroundColor = aumento >= 10 ? "red" : "white";
};

sum.addEventListener("click", () => {
    aumento++;
    actualizarContador();
});
rest.addEventListener("click", () => {
    aumento--;
    actualizarContador();
});
