let max = 10;
let conOPUno, conOPDos, conPreguntas, contador = 0;
let op1 = document.getElementById('op1');
let op2 = document.getElementById('op2');
let op3 = document.getElementById('op3');
let conPregunta = document.getElementById('conPregunta');
let conButton = document.getElementById('conButton');
let imagenes = document.getElementById('imagenes');
let opciones = document.getElementById('seccion-opciones');

function ciencia() {
    if (document.getElementById('ciencias')) {
        remover();
        conButton.addEventListener('click', ciencia, false);
        conButton.style.display = 'block';
        imagenes.style.display = 'none';
        opciones.style.display = 'block';
        document.getElementById('contPuntos').style.display = 'block';
        document.getElementById('container').style.backgroundColor = '#119e80'
        op1.style.backgroundColor = '#119e80', op2.style.backgroundColor = '#119e80', op3.style.backgroundColor = '#119e80';
        op1.style.border = '#119e80', op2.style.border = '#119e80', op3.style.border = '#119e80';
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
  
        conPregunta.innerHTML = "<strong>" + preguntasCulturaGeneral[conPreguntas] + "</strong>";
        op1.innerHTML = "<strong>" + respuestas[conPreguntas - 1] + "</strong>";
        op2.innerHTML = "<strong>" + respuestas[conPreguntas] + "</strong>";
        op3.innerHTML = "<strong>" + respuestas[conPreguntas + 1] + "</strong>";
        
    }
};

function estudios() {
    if (document.getElementById('estudios')) {
        remover();
        conButton.addEventListener('click', estudios, false);
        conButton.style.display = 'block';
        imagenes.style.display = 'none';
        opciones.style.display = 'block';
        document.getElementById('contPuntos').style.display = 'block';
        document.getElementById('container').style.backgroundColor = '#1f70b3'
        op1.style.backgroundColor = '#1f70b3', op2.style.backgroundColor = '#1f70b3', op3.style.backgroundColor = '#1f70b3';
        op1.style.border = '#1f70b3', op2.style.border = '#1f70b3', op3.style.border = '#1f70b3';
        const preguntasCulturaGeneral = [
            /* 0 */    '¿Cual es la cultura más antigua de América del Sur?',
            /* 1 */    '¿Quiénes eran los aymaras?',
            /* 2 */    '¿En que se basaba la organización económica de los aymaras?',
            /* 3 */    '¿En que en fecha se declaró la independencia de la República de Bolivia?',
            /* 4 */    '¿Cuantos años duro la Confederación Peru–Boliviana??',
            /* 5 */    '¿Qué porcentaje de la riqueza mundial tiene Estados Unidos?',
            /* 6 */    '¿En qué continente está Ecuador?',
            /* 7 */    '¿Qué país tiene las mayores reservas petrolíferas?',
            /* 8 */    'Cuál es el gasto mundial en presupuestos militares de los gobiernos?',
            /* 9 */    '¿Cuándo acabó la II Guerra Mundial?',
            /* 10 */   '¿Desde cuándo tiene Irak armas químicas y biológicas?',
            /* 11*/    '¿Cuántos litros de agente naranja usó EEUU en Vietnam?'
        ]; 
        const respuestas = [
            /* 0 */    'Tiahuanacota',
            /* 1 */    'Grupo indigena ',
            /* 2 */    'Ganaderia',
            /* 3 */    'José.M Serrano',
            /* 4 */    '3 años',
            /* 5 */    '6%',
            /* 6 */    'Latinoamerica',
            /* 7 */    'Arabia Saudita',
            /* 8 */    'Más de un billón de euros',
            /* 9 */    '1945',
            /* 10 */   'Desde los años 80',
            /* 11*/    '35 millones de litros'
        ];

        function preguntasAleatorias(max) {
            return Math.floor(Math.random() * max);
        };

        respuestas[-1] = 'Domingo';
        respuestas[11] = 'Lunes';
        conPreguntas = preguntasAleatorias(max);

        conPregunta.innerHTML = "<strong>" + preguntasCulturaGeneral[conPreguntas] + "</strong>";
        op1.innerHTML = "<strong>" + respuestas[conPreguntas - 1] + "</strong>";
        op2.innerHTML = "<strong>" + respuestas[conPreguntas] + "</strong>";
        op3.innerHTML = "<strong>" + respuestas[conPreguntas + 1] + "</strong>";
    }
};

function deportes() {
    if (document.getElementById('estudios')) {
        remover();
        conButton.addEventListener('click', deportes, false);
        conButton.style.display = 'block';
        imagenes.style.display = 'none';
        opciones.style.display = 'block';
        document.getElementById('contPuntos').style.display = 'block';
        document.getElementById('container').style.backgroundColor = '#a38021';
        op1.style.backgroundColor = '#a38021', op2.style.backgroundColor = '#a38021', op3.style.backgroundColor = '#a38021';
        op1.style.border = '#a38021', op2.style.border = '#a38021', op3.style.border = '#a38021';
        const preguntasCulturaGeneral = [
            /* 0 */    '¿Cual jugador tiene 8 balones de oro?',
            /* 1 */    '¿Equipo que gano el primer mundial?',
            /* 2 */    '¿Cuánto dura un partido de fútbol?',
            /* 3 */    '¿Cuándo se celebró el primer mundial de fútbol?',
            /* 4 */    '¿Qué selección de fútbol ha ganado más Mundiales?',
            /* 5 */    '¿En qué ciudad se encuentra el estadio popularmente conocido como La Bombonera?',
            /* 6 */    '¿Cuál es el apodo del Leicester City?',
            /* 7 */    '¿Cuánto dura la prórroga en un partido de fútbol?',
            /* 8 */    '¿Quién ganó el mundial de fútbol de 2010?',
            /* 9 */    '¿Quién es el máximo goleador del FC Barcelona?',
            /* 10 */   '¿En qué club italiano jugó Diego Maradona?',
            /* 11*/    '¿De qué ciudad es el Chelsea Football Club?'
        ]; 
        const respuestas = [
            /* 0 */    'Messi',
            /* 1 */    'Argentina',
            /* 2 */    '90 minutos',
            /* 3 */    '1930',
            /* 4 */    'Brasil',
            /* 5 */    'Buenos Aires/Argentina',
            /* 6 */    'Los Foxes',
            /* 7 */    '30 minutos',
            /* 8 */    'España',
            /* 9 */    'Messi',
            /* 10 */   'Napoli',
            /* 11*/    'Fulham, Londres'
        ];

        function preguntasAleatorias(max) {
            return Math.floor(Math.random() * max);
        };

        respuestas[-1] = 'Domingo';
        respuestas[11] = 'Lunes';
        conPreguntas = preguntasAleatorias(max);

        conPregunta.innerHTML = "<strong>" + preguntasCulturaGeneral[conPreguntas] + "</strong>";
        op1.innerHTML = "<strong>" + respuestas[conPreguntas - 1] + "</strong>";
        op2.innerHTML = "<strong>" + respuestas[conPreguntas] + "</strong>";
        op3.innerHTML = "<strong>" + respuestas[conPreguntas + 1] + "</strong>";
    }
};

function cultura() {
    if (document.getElementById('ciencias')) {
        remover();
        conButton.addEventListener('click', cultura, true);
        conButton.style.display = 'block';
        imagenes.style.display = 'none';
        opciones.style.display = 'block';
        document.getElementById('contPuntos').style.display = 'block';
        document.getElementById('container').style.backgroundColor = '#ac4c33'
        op1.style.backgroundColor = '#ac4c33', op2.style.backgroundColor = '#ac4c33', op3.style.backgroundColor = '#ac4c33';
        op1.style.border = '#ac4c33', op2.style.border = '#ac4c33', op3.style.border = '#ac4c33';
        const preguntasCulturaGeneral = [
            /* 0 */    '¿En que año llegó Cristóbal Colón a América?',
            /* 1 */    '¿Cuál es el lugar más frío de la tierra?',
            /* 2 */    '¿Quién escribió La Odisea?',
            /* 3 */    '¿Cómo se llama la capital de Mongolia?',
            /* 4 */    '¿Cuál es el río más largo del mundo?',
            /* 5 */    '¿Cómo se llamaba la Reina del Reino Unido?',
            /* 6 */    '¿En qué continente está Ecuador?',
            /* 7 */    '¿Qué tipo de animal es la ballena?',
            /* 8 */    '¿Cuantos huesos tiene el cuerpo humano?',
            /* 9 */    '¿Cuándo acabó la II Guerra Mundial?',
            /* 10 */   '¿Dónde se encuentra la Sagrada Familia?',
        ]; 
        const respuestas = [
            /* 0 */    '1492',
            /* 1 */    'Antartida',
            /* 2 */    'Homero',
            /* 3 */    'Ulan Bator',
            /* 4 */    'Nilo',
            /* 5 */    'Isabel',
            /* 6 */    '¿Latinoamerica',
            /* 7 */    'Mamifero',
            /* 8 */    '206',
            /* 9 */    '1945',
            /* 10 */   'Barcelona',
        ];

        function preguntasAleatorias(max) {
            return Math.floor(Math.random() * max);
        };

        respuestas[-1] = 'Domingo';
        respuestas[11] = 'Lunes';
        conPreguntas = preguntasAleatorias(max);
  
        conPregunta.innerHTML = "<strong>" + preguntasCulturaGeneral[conPreguntas] + "</strong>";
        op1.innerHTML = "<strong>" + respuestas[conPreguntas - 1] + "</strong>";
        op2.innerHTML = "<strong>" + respuestas[conPreguntas] + "</strong>";
        op3.innerHTML = "<strong>" + respuestas[conPreguntas + 1] + "</strong>";
        
    }
};

op1.addEventListener('click', fallar,  true);
op2.addEventListener('click', acertar, true);
op2.addEventListener('click', fallar, true);

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
            op2.style.color = '#000';
    }
    contador ++;
    document.getElementById('puntos').innerHTML = "<span>" + " " + contador + "</span>";
}

function removerPuntaje() { 
    contador = 0;
}

function remover() {
    conButton.addEventListener('click', remover, true);
    op1.style.backgroundColor = 'transparent';
    op2.style.backgroundColor = 'transparent';
    op2.style.color = '#fff';
    op3.style.backgroundColor = 'transparent';
}
