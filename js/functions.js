function saludar() {
    alert("Bienvenido a JavaScript desde un archivo externo ;)");
}

function calcular_Promedio() {
    let call1 = parseInt(prompt("Calificacion de Programacion Web: ", 100));
    var call2 = parseInt(prompt("Calificacoin de Lenguajes y automatas: "));
    let call3 = parseInt(prompt("Calificacion de Ingenieria de Softwware: "));

    const PI = 3.14
    const IVA = 16
    const GRAVEDAD = 9.8

    console.log(`Valor de PI es ${PI}`)

    var call2 = 70;
    if (true) {
        let call1 = 0;
        alert("Calificacion 1 dentro del scope del if es de: " + call1)
    }

    let promedio = (call1 + call2 + call3) / 3;
    // Imprimiendo utilizando Template String
    alert(`Tu promedio es: ${promedio} continuar con la ${call1}, ${call2}, ${call3}`);
}

const confirmar = () => {
    let respueta = confirm("Vas a recursar Programacion Web?");
    if (respueta) {
        alert("Animo! Que existe el verano :)");
    } else {
        alert("Felicidades, pero aun no termina el semestre ...");
    }
};

const objetos = () => {
    const laptop = {
        marca: "Lenovo",
        procesador: "Intel Core i5",
        ram: "32GB",
        almacenamiento: "1 TB",
        usos: ["Jugar", "Programar", "Escuchar musica", "Trabajar"],
        tipo_disco: "SSD"
    }

    // Imprimir los valores del objeto
    console.log(laptop)
    // Imprimir un valor en especifico del objeto
    console.log(`Marca: ${laptop.marca}
    Procesador: ${laptop.procesador}
    Memoria Ram: ${laptop.ram}
    Tipo de Almacenamiento: ${laptop.tipo_disco}
    Almacenamiento: ${laptop.almacenamiento}
    Usos: ${laptop.usos}`)

    // Agregar un elemento al objejo
    laptop.tam_pantalla = ("15.2 pulgadas")
    console.log(laptop)
}

const calcularTiempo = () => {
    let minutos_atleta_1 = parseInt(prompt("Minutos del atleta 1: "))
    let segundos_atleta_1 = parseInt(prompt("Segundos del atleta 1: "))
    if (segundos_atleta_1 > 59) {
        alert("Segundos del atleta 1 no validos, ingresar un valor valido")
        let segundos_atleta_1 = parseInt(prompt("Segundos del atleta 1: "))
    }

    let minutos_atleta_2 = parseInt(prompt("Minutos del atleta 2: "))
    let segundos_atleta_2 = parseInt(prompt("Segundos del atleta 2: "))
    if (segundos_atleta_2 > 59) {
        alert("Segundos del atleta 2 no validos, ingresar un valor valido")
        let segundos_atleta_2 = parseInt(prompt("Segundos del atleta 2: "))
    }

    var minutos = minutos_atleta_1 + minutos_atleta_2
    var segundos = segundos_atleta_1 + segundos_atleta_2
    var horas = 0
    if (minutos > 59) {
        horas = horas + Math.floor(minutos / 60)
        minutos = (minutos % 60)
    }

    if (segundos > 59) {
        minutos = minutos + Math.floor(segundos / 60)
        segundos = segundos % 60
    }

    // Formatear numeros para la impresion
    var horas_formateadas
    var minutos_formateados
    var segundos_formateados
    // Formateo de horas
    if (horas < 10) {
        horas_formateadas = '0' + horas.toString()
    } else {
        horas_formateadas = horas.toString()
    }
    // Formateo de minutos
    if (minutos < 10) {
        minutos_formateados = '0' + minutos.toString()
    } else {
        minutos_formateados = minutos.toString()
    }
    // Formateo de segundos
    if (segundos < 10) {
        segundos_formateados = '0' + segundos.toString()
    } else {
        segundos_formateados = segundos.toString()
    }

    console.log(`${horas_formateadas}:${minutos_formateados}:${segundos_formateados}`)

}
