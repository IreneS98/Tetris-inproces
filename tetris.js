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
const board =[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,0,0,1,1],
];

const pieza = {
    "position": {x: 6, y: 0},
    "cuadrado": [
        [1, 1],
        [1, 1]
    ]
}
    
    
    // rectangulo
    // [1]
    // [1]
    // [1]
    // [1],

    // ele 
    // [1]
    // [1]
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

function update(){
    draw();
    window.requestAnimationFrame(update);
}

function draw(){
    contexto.fillStyle = '#000';
    contexto.fillRect(0, 0, canvas.width, canvas.height);

    board.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value == 1){
                contexto.fillStyle = 'red';
                contexto.fillRect(x, y, 1, 1);
            }
        });
    });

    
    pieza.cuadrado.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value){
                contexto.fillStyle = 'blue';
                contexto.fillRect(x + pieza.position.x, y + pieza.position.y, 1, 1);
            }
        });
    });
}

document.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowLeft'){
        pieza.position.x--;
    }else if(event.code === 'ArrowRight'){
        pieza.position.x++;
    }else if(event.code === 'ArrowDown'){
        pieza.position.y++;
    }
}); 


update();
