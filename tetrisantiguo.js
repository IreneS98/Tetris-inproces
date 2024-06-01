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

const listaPiezas = ["cuadrado","te","ele","eleInvertida","zeta","zetaInvertida"];


function conseguirPiezaRandom(){
    const nombreConseguido = listaPiezas[Math.floor(Math.random()*listaPiezas.length)] //te da el nombre de una pieza
    pieza.current = pieza[nombreConseguido]

} 


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
    ],
    "ele": [
        [1, 0],
        [1, 0],
        [1, 1]
    ],
    "eleInvertida":[
        [0, 1],
        [0, 1],
        [1, 1]
    ], 
    "zeta":[
        [1, 1, 0],
        [0, 1, 1]
    ], 
    "zetaInvertida":[
        [0, 1, 1],
        [1, 1, 0]
    ]
        
}


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


/* function finDePartida() {
    alert("Fin de la partida");
    reiniciarPartida();
}

function reiniciarPartida() {
    // Reiniciar el tablero
    for (let y = 0; y < altoDeBloque; y++) {
        for (let x = 0; x < anchoDeBloque; x++) {
            board[y][x] = 0;
        }
    }

    // Generar una nueva pieza aleatoria
    const keys = Object.keys(piezas);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    pieza = {
        position: { x: Math.floor(anchoDeBloque / 2) - 1, y: 0 },
        current: pieza[randomKey]
    };

    update();
} */


async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function colision(positionX, positionY, auxPieza) {
    return auxPieza.some((row, y) => {
        return row.some((value, x) => {
            const piezaY = y + positionY;
            const piezaX = x + positionX;
                        // Verificar si la pieza está fuera de los límites del tablero

            // Verifica si la posición está fuera del tablero verticalmente o horizontalmente
            if (piezaY >= board.length || piezaX >= board[0].length || piezaX < 0) {
                return true;
            }

            row.forEach((value, piezaX) => {
                if (value == 0){
                    board[positionY + piezaY][positionX + piezaX] = value;
                }
            });
 

            // Verifica colisión con las piezas en el tablero
            return value !== 0 && board[piezaY]?.[piezaX] !== 0;
        });
    });
}


function colisionCurrent() {
    return colision(pieza.position.x, pieza.position.y, pieza.current);
}

conseguirPiezaRandom();
update();
