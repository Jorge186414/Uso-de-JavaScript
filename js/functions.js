function saludar() {
    alert("Bienvenido a JavaScript desde un archivo externo ;)");
}

function calcular_Promedio() {
    let call1 = parseInt(prompt("Calificacion de Programacion Web: ", 100));
    var call2 = parseInt(prompt("Calificacoin de Lenguajes y automatas: "));
    let call3 = parseInt(prompt("Calificacion de Ingenieria de Softwware: "));

    var call2 = 70;
    if (true) {
        let call1 = 0;
        alert ("Calificacion 1 dentro del scope del if es de: " + call1)
    }

    let promedio = (call1 + call2 + call3) / 3;
    alert("Tu promedio es: " + promedio);
}

const confirmar = () => {
    let respueta = confirm("Vas a recursar Programacion Web?");
    if (respueta) {
        alert("Animo! Que existe el verano :)");
    } else {
        alert("Felicidades, pero aun no termina el semestre ...");
    }
};
