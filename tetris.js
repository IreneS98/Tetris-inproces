// Inicio del canvas
const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const anchoDeBloque = 14;
const altoDeBloque = 30;
const tamanyoBloque = 30;

canvas.width = tamanyoBloque * anchoDeBloque;
canvas.height = tamanyoBloque * altoDeBloque;

contexto.scale(tamanyoBloque, tamanyoBloque);

//Cuadrado 
const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
];

const pieza = {
    "position": { x: 6, y: 0 },
    "cuadrado": [
        [1, 1],
        [1, 1]
    ],
    "current": [
        [1],
        [1],
        [1],
        [1]
    ],
    "te": [
        [0, 1],
        [1, 1],
        [0, 1]
    ]
}


// rectangulo
// [1]
// [1]
// [1]
// [1],

// ele 
// [1, 0]
// [1, 0]
// [1, 1],

// eleInvertida
// [0, 1]
// [0, 1]
// [1, 1],

// zeta
// [1, 1, 0]
// [0, 1, 1],

// zetaInvertida
// [0, 1, 1]
// [1, 1, 0],

// Te
// [0, 1, 0]
// [1, 1, 1]


// Inicio del tetris game loop

async function update() {
    draw();
    await sleep(1000);

    pieza.position.y++;
    if (colisionCurrent()) {
        pieza.position.y--; // Revertir si hay colisión
    }

    window.requestAnimationFrame(update);
}

function draw() {
    contexto.fillStyle = '#000';
    contexto.fillRect(0, 0, canvas.width, canvas.height);

    board.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value == 1) {
                contexto.fillStyle = 'red';
                contexto.fillRect(x, y, 1, 1);
            }
        });
    });


    pieza.current.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                contexto.fillStyle = 'blue';
                contexto.fillRect(x + pieza.position.x, y + pieza.position.y, 1, 1);
            }
        });
    });
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowLeft') {
        pieza.position.x--;
        if (colisionCurrent()) {
            pieza.position.x++; // Revertir si hay colisión
        }
        draw();
    } else if (event.code === 'ArrowRight') {
        pieza.position.x++;
        if (colisionCurrent()) {
            pieza.position.x--; // Revertir si hay colisión
        }
        draw();
    } else if (event.code === 'ArrowDown') {
        pieza.position.y++;
        if (colisionCurrent()) {
            pieza.position.y--; // Revertir si hay colisión
        }
        draw();
    } else if (event.code === 'ArrowUp') {
        rotate();
        draw();
    }
});

function rotate() {
    const auxPieza = rotarPieza(pieza.current);
    const diffAltura = auxPieza.length - pieza.current.length;
    if (!colision(pieza.position.x, pieza.position.y, auxPieza)) {
        pieza.current = auxPieza;
    }
}

function rotarPieza(pieza) {
    /* [
        [0, 1], i: 0
        [1, 1], i: 1
        [0, 1] i: 2
    ] length: 3*/

    /* [
        [0,1], i: 0
        [] i: 1
    ] */

    /* [j:0, j:1, j:2
        [0, 1, 0], i:0
        [1, 1, 1] i:1
    ] */

    const n = pieza.length; // altura pieza
    const m = pieza[0].length; // anchura pieza (todas las filas deberían tener el mismo número de columnas)
    const piezaAux = [];

    for (let i = 0; i < m; i++) { // i = fila
        piezaAux[i] = [];
        for (let j = 0; j < n; j++) { // j = posición dentro de la fila (columna)
            piezaAux[i][j] = pieza[n - 1 - j][i];
        }
    }

    return piezaAux;
}


async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function colision(positionX, positionY, auxPieza) {
    return auxPieza.some((row, y) => {
        return row.some((value, x) => {
            // Verificar si la pieza está fuera de los límites del tablero
            const piezaY = y + positionY;
            const piezaX = x + positionX;

            // Verifica si la posición está fuera del tablero verticalmente o horizontalmente
            if (piezaY >= board.length || piezaX >= board[0].length || piezaX < 0) {
                return true;
            }

            // Verifica colisión con las piezas en el tablero
            return value !== 0 && board[piezaY]?.[piezaX] !== 0;
        });
    });
}

function colisionCurrent() {
    return colision(pieza.position.x, pieza.position.y, pieza.current);
}





/*   function update(time = 0) {
    // Calcula el tiempo transcurrido desde la última actualización
    const deltaTime = time - lastTime;
    lastTime = time;

    // Incrementa el contador de caídas con el tiempo transcurrido
    dropCounter += deltaTime;

    // Comprueba si es el momento de mover la pieza hacia abajo
    if (dropCounter > dropInterval) {
        // Mueve la pieza hacia abajo
        pieza.position.y++;

        // Comprueba si la pieza colisiona
        if (colisiona()) {
            // Si colisiona, mueve la pieza hacia arriba (deshace el movimiento)
            pieza.position.y--;

            // Fusiona la pieza con el tablero
            fusionarPieza();

            // Limpia las líneas completas del tablero
            limpiarLineas();

            // Genera una nueva pieza aleatoria
            pieza = randomPiece();

            // Comprueba si la nueva pieza colisiona (lo que indicaría el fin del juego)
            if (colisiona()) {
                // Reinicia el juego si la nueva pieza colisiona
                resetGame();
            }
        }
        // Reinicia el contador de caídas
        dropCounter = 0;
    }

    // Dibuja el estado actual del juego en la pantalla
    draw();

    // Solicita una nueva llamada a update para el siguiente frame de animación
    window.requestAnimationFrame(update);
} 
 */
update();
