//Cambiar modo nocturno
const modoNocturno = () => {
    const boton = document.querySelector('#boton');
    const parteSuperior = document.querySelector("div.parte--superior");
    const lineaTitilar = document.querySelector(".linea--titilar");
    const numeroCuenta = document.querySelector(".numero--cuenta");
    const numeroResultado = document.querySelector(".numero--resultado");
    const parteInferior = document.querySelector("div.parte--inferior");
    const teclas = document.querySelectorAll("p.teclas");
    const teclasColores = document.querySelectorAll("p.teclasColor");
    const teclaIgual = document.querySelector(".teclaIgual");

    boton.addEventListener("click", () => {
        boton.classList.toggle("active");
        parteSuperior.classList.toggle("parte--superior-dark");
        numeroCuenta.classList.toggle("numero--cuenta-dark");
        numeroResultado.classList.toggle("numero--resultado-dark")
        parteInferior.classList.toggle("parte--inferior-dark");
        teclaIgual.classList.toggle("teclaIgual-dark");
        lineaTitilar.classList.toggle("linea--titilar-dark");

        teclas.forEach(element => {
            element.classList.toggle("teclas-dark");
        });

        teclasColores.forEach(element => {
            element.classList.toggle("teclasColores-dark");
        });
    })
}

let valorTecla;
const teclaNumeros = document.querySelectorAll("p.numeros");
const teclaSignos = document.querySelectorAll(".signo");
const punto = document.getElementById("punto");
const teclaIgual = document.getElementById("teclaIgual");
const operacion = document.getElementById("num");
const lineaTitilar = document.querySelector(".linea--titilar");
const reset = document.querySelector("#reset");
const borrarUnaTecla = document.getElementById("borrarTecla");

const resultado = document.getElementById("resultado");


const resultadoTotal = () => {

    let resultadoFinal;


    operacion.innerHTML = operacion.innerHTML.replaceAll("×", "*");
    operacion.innerHTML = operacion.innerHTML.replaceAll("−", "-");
    operacion.innerHTML = operacion.innerHTML.replaceAll("÷", "/");

    resultadoFinal = eval(operacion.innerHTML);
    resultado.innerHTML = resultadoFinal;


    if ((resultado.innerHTML.trim().length > 7) && (resultado.innerHTML.trim().length < 12)) {
        resultado.style.fontSize = "50px";
        resultado.style.bottom = "35px";
    }
    else if ((resultado.innerHTML.trim().length > 11) && (resultado.innerHTML.trim().length < 15)) {
        resultado.style.fontSize = "35px";
        resultado.style.bottom = "30px";
    }
    else if (resultado.innerHTML.trim().length > 14) {
        let primerosDoceNumeros = resultado.innerHTML.substring(0, 12);
        let numeroContador = resultado.innerHTML.trim().length - 15;
        resultado.innerHTML = primerosDoceNumeros + "e+" + numeroContador;
        resultado.style.bottom = "30px";
        resultado.style.fontSize = "35px";
    }

    
    operacion.innerHTML = operacion.innerHTML.replaceAll("*", "×");
    operacion.innerHTML = operacion.innerHTML.replaceAll("-", "−");
    operacion.innerHTML = operacion.innerHTML.replaceAll("/", "÷");


    teclaIgual.addEventListener("click", () => {
        operacion.innerHTML = resultado.innerHTML;
    });
}

const agregarNumero = () => {
    teclaNumeros.forEach(el => {
        el.addEventListener("click", () => {
            valorTecla = parseInt(el.innerHTML);
            operacion.innerHTML = operacion.innerHTML + valorTecla;
            resultado.style.bottom = "50px";
            resultadoTotal();
        })
    });
}

const agregarSigno = () => {
    teclaSignos.forEach(el => {
        el.addEventListener("click", () => {
            valorTecla = el.innerHTML;
            operacion.innerHTML = operacion.innerHTML + valorTecla;
        });
    });
}

const agregarPunto = () => {
    punto.addEventListener("click", () => {
        valorTecla = punto.innerHTML;
        operacion.innerHTML = operacion.innerHTML + valorTecla;
        resultado.style.bottom = "50px";
    });
}

const resetaerOparacionResultado = () => {
    reset.addEventListener("click", () => {
        operacion.innerHTML = "";
        resultado.innerHTML = "0";
        resultado.style.bottom = "20px";
        resultado.style.fontSize = "65px";
    })
}

const borrarTecla = () => {
    borrarUnaTecla.addEventListener("click", () => {
        let borrar = operacion.innerHTML.slice(0, -1)
        operacion.innerHTML = borrar;

        resultadoTotal();
        if (operacion.innerHTML === "") {
            resultado.style.bottom = "20px";
            resultado.style.fontSize = "65px";
            resultado.innerHTML = "0";
        }
    });
}


borrarTecla();
resetaerOparacionResultado();
agregarNumero();
agregarSigno();
agregarPunto();
modoNocturno();

