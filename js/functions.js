function saludar() {
    alert("Bienvenido a JavaScript desde un archivo externo ;)")
}

function calcular_Promedio() {
    let call1 = parseInt(prompt("Calificacion de Programacion Web: ", 100))
    let call2 = parseInt(prompt("Calificacoin de Lenguajes y automatas: "))
    let call3 = parseInt(prompt("Calificacion de Ingenieria de Softwware: "))
    
    let promedio = (call1 + call2 + call3) / 3
    alert("Tu promedio es: " + promedio)
}