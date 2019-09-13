let pantallaInicial, pantallaFranquicias, pantallaHistorial, pantallaPlatillosD, pantallaPlatillosK;

let pantalla;
function setup() {
    pantallaInicial = loadImage('../lib/inicio/fondoInicial.png');
    pantallaHistorial = loadImage('../lib/inicio/fondoHistorial');
    pantallaFranquicias = loadImage('../lib/franquicia/fondoInicial.png');
    pantallaPlatillosD = loadImage('../lib/franquicia/platillosDominos.png');


    pantalla = 0;
}

//Hola si se va a poder
//hola lo voy aintentar
function draw() {
    switch (pantalla) {
        case 0:
            Image(pantallaInicial, 0, 0);
            break;
        case 1:
            Image(pantallaInicial, 0, 0);
            break;
        case 2:
            Image(pantallaInicial, 0, 0);
            break;
        case 3:
            Image(pantallaFranquicias, 0, 0);
            break;
        case 4:
            Image(pantallaHistorial, 0, 0);
            break;
        case 5:
            Image(pantallaPlatillosD, 0, 0);
            break;
    }

}