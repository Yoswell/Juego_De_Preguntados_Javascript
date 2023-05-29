let max = 10;
let conOPUno, conOPDos, conPreguntas, contador = 0;
let op1 = document.getElementById('op1');
let op2 = document.getElementById('op2');
let op3 = document.getElementById('op3');
let conPregunta = document.getElementById('conPregunta');
let conButton = document.getElementById('conButton');

function ciencia() {
    remover();
    const preguntasCulturaGeneral = [
        /* 0 */    '¿Cuál es el animal más grande que habita la Tierra?',
        /* 1 */    '¿Qué órgano del cuerpo humano consume más energía?',
        /* 2 */    '¿En qué galaxia se encuentra la Tierra?',
        /* 3 */    '¿Cuál es la fórmula química del agua?',
        /* 4 */    '¿Son los humanos carnívoros, omnívoros o herbívoros? ',
        /* 5 */    '¿Cuál es el único satélite natural de la Tierra? ',
        /* 6 */    '¿Cuál es la edad del universo?',
        /* 7 */    '¿Podrías seguir viviendo si la Tierra dejase de girar?',
        /* 8 */    '¿Cuantos huesos tiene el cuerpo humano?',
        /* 9 */    '¿Cómo se llama a la muerte de cada miembro de una especie? ',
        /* 10 */   '¿Cuál es el planeta más cercano al Sol?',
    ]; 
    const respuestas = [
        /* 0 */    'Ballena',
        /* 1 */    'Cerebro',
        /* 2 */    'Via Lactea',
        /* 3 */    'H20',
        /* 4 */    'Omnívoros',
        /* 5 */    'La Luna',
        /* 6 */    '13.mil.millones',
        /* 7 */    'No',
        /* 8 */    '206',
        /* 9 */    'Extinción',
        /* 10 */   'Mercurio',
    ];

    function preguntasAleatorias(max) {
        return Math.floor(Math.random() * max);
    };

    respuestas[-1] = 'Domingo';
    respuestas[11] = 'Lunes';
    conPreguntas = preguntasAleatorias(max);
  
    conPregunta.style.fontSize = "1.5rem";
    conPregunta.innerHTML = preguntasCulturaGeneral[conPreguntas];
    op1.innerHTML = "<strong>" + respuestas[conPreguntas - 1] + "</strong>";
    op2.innerHTML = "<strong>" + respuestas[conPreguntas] + "</strong>";
    op3.innerHTML = "<strong>" + respuestas[conPreguntas + 1] + "</strong>";
};

function fallarUno() {
    if (op1.onclick) {
        op1.style.backgroundColor = '#eb0505';
    }
}

function fallarDos() {
    if (op3.onclick) {
        op3.style.backgroundColor = '#eb0505';
    }
}

function acertar() {
    if (op2.onclick) {
        op2.style.backgroundColor = '#1add34';
        op2.style.color = '#111113';
    }
    contador ++;
    document.getElementById('puntos').innerHTML = "<span>" + " " + contador + "</span>";
}

function removerPuntaje() { 
    contador = 0;
    document.getElementById('puntos').innerHTML = "<span>" + " " + contador + "</span>";
}

function remover() {
    conButton.addEventListener('click', remover, false);
    op1.style.backgroundColor = '#fff';
    op2.style.backgroundColor = '#fff';
    op2.style.color = '#111113';
    op3.style.backgroundColor = '#fff';
}
