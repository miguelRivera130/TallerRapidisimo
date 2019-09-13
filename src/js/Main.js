let pantallaInicial, pantallaFranquicias, pantallaHistorial, pantallaPlatillosK,
    mensajeRecuperacion, mensajeRegistro, botonRegistro, botonAceptar, envioCodigoUno, envioCodigoDos,
    dominosBaner, karensBaner, platillosDominos, platillosKaren, pizzaChampiñones, pizzaHawaina, pizzaPeperoni,
    pizzaVegetariana, agregarExtras, extra4, extra2, extraskarens, extra3, extra1, flechaRegreso, pagoDominos,
    pagoKarens, extrasDominos, sinExtras, validacionPedidoDominos, validacionPedidoKarens, reciboDominos, reciboKarens;
let extra1Act, extra2Act, extra3Act, extra4Act, extra1Act1, extra2Act1, extra3Act1, extra4Act1;
let actAgregarExtras;
let total = 0;
let pizza1 = 40000, pizza2 = 38500, pizza3 = 38500, pizza4 = 38500;
let pextra1 = 7000, pextra2 = 12000, pextra3 = 4000, pextra4 = 4000;
let loginScreen, registroScreen;
let pantalla;
let ext1 = "", ext2 = "", ext3 = "", ext4 = "", resumen = "", pizza = "", pizzeriaVar;
function setup() {
    createCanvas(375, 800);
    pantallaInicial = loadImage("data/fondoInicial.png");
    pantallaHistorial = loadImage("data/fondoHistorial.png");
    pantallaFranquicias = loadImage("data/fondoFranquicias.png");
    botonIngresoI = loadImage("data/botonIngreso.png");
    mensajeRegistro = loadImage("data/mensajeRegistro.png");
    mensajeRecuperacion = loadImage("data/mensajeRecuperacion.png");
    botonAceptar = loadImage("data/botonAceptar.png");
    botonRegistro = loadImage("data/botonRegistro.png");
    envioCodigoUno = loadImage("data/envioDeCodigoUno.png");
    dominosBaner = loadImage("data/dominosPizza.png");
    karensBaner = loadImage("data/karenPizza.png");
    platillosDominos = loadImage("data/platillosDominos.png");
    platillosKaren = loadImage("data/platillosKaren.png");
    pizzaChampiñones = loadImage("data/pizzaChampiñones.png");
    pizzaHawaina = loadImage("data/PizzaHawaiana.png");
    pizzaPeperoni = loadImage("data/pizzaPeperoni.png");
    pizzaVegetariana = loadImage("data/pizzaVegetariana.png");
    agregarExtras = loadImage("data/agregarExtras.png");
    extrasDominos = loadImage("data/extrasDominos.png");
    extra1 = loadImage("data/extraUno.png");
    extra2 = loadImage("data/extraDos.png");
    extra3 = loadImage("data/extraTres.png");
    extra4 = loadImage("data/extraCuatro.png");
    extraskarens = loadImage("data/extrasKaren.png");
    flechaRegreso = loadImage("data/flechaRegreso.png");
    pagoDominos = loadImage("data/pagoDominos.png");
    pagoKarens = loadImage("data/pagoKarens.png");
    sinExtras = loadImage("data/sinExtras.png");
    validacionPedidoDominos = loadImage("data/validacionPedido.png");
    validacionPedidoKarens = loadImage("data/validacionPedidoK.png");
    reciboDominos = loadImage("data/reciboDominos.png")
    reciboKarens = loadImage("data/reciboKaren.png")

    pantalla = 0;
    extra1Act = false;
    extra2Act = false;
    extra3Act = false;
    extra4Act = false;

    extra1Act1 = false;
    extra2Act1 = false;
    extra3Act1 = false;
    extra4Act1 = false;

    actAgregarExtras = false;
    loginScreen = new LoginScreen;
    
    pizzeriaVar = ""
}
function draw() {
    console.log(mouseX, mouseY);
    //console.log(total);
    switch (pantalla) {

        case 0:
            //pantalla inicio
            image(pantallaInicial, 0, 0);
            image(botonIngresoI, 0, 0, 375, 800);
            image(mensajeRecuperacion, 0, 0, 375, 800);
            image(mensajeRegistro, 0, 0, 375, 800);
            loginScreen.paint();
            break;
        case 1:
            //pantalla de registro
            image(pantallaInicial, 0, 0);
            image(botonRegistro, 0, 0, 375, 800);
            image(botonRegistro, 0, 0, 375, 800);
            loginScreen.paint();
            break;
        case 2:
            //pantalla de recuperacion
            image(pantallaInicial, 0, 0);
            image(botonAceptar, 0, 0, 375, 800);
            image(envioCodigoUno, 0, 0, 375, 800);
            loginScreen.paint();
            break;
        case 3:
            // pantalla franquicias
            image(pantallaFranquicias, 0, 0, 375, 800);
            image(dominosBaner, 0, 0, 375, 800);
            image(karensBaner, 0, 100, 375, 800);
            break;
        case 4:
            //pantala historial
            image(pantallaHistorial, 0, 0, 375, 800);
            break;

        case 5:
            // platillos dominos 
            image(platillosDominos, 0, 0, 375, 800);
            image(pizzaChampiñones, 0, 0, 375, 800);
            image(pizzaHawaina, 0, 100, 375, 800);
            image(pizzaPeperoni, 0, 200, 375, 800);
            image(pizzaVegetariana, 0, 300, 375, 800);
            image(flechaRegreso, 0, 0, 375, 800);

            break;
        case 6:
            //platilos karens
            image(platillosKaren, 0, 0, 375, 800);
            image(pizzaChampiñones, 0, 0, 375, 800);
            image(pizzaHawaina, 0, 100, 375, 800);
            image(pizzaPeperoni, 0, 200, 375, 800);
            image(pizzaVegetariana, 0, 300, 375, 800);
            image(flechaRegreso, 0, 0, 375, 800);

            break;
        case 7:
            // extras dominos
            image(extrasDominos, 0, 0, 375, 800);
            image(sinExtras, 0, 0, 375, 800);
            if (extra1Act == true) {
                image(extra1, 0, 0, 375, 800);
            }
            if (extra2Act == true) {
                image(extra2, 0, 0, 375, 800);
            }
            if (extra3Act == true) {
                image(extra3, 0, 0, 375, 800);
            }
            if (extra4Act == true) {
                image(extra4, 0, 0, 375, 800);
            }
            if (extra1Act == true || extra2Act == true || extra3Act == true || extra4Act == true) {
                image(agregarExtras, 0, 0, 375, 800);
            }
            image(flechaRegreso, 0, 0, 375, 800);

            break;
        case 8:
            // extras karens
            image(extraskarens, 0, 0, 375, 800);
            image(sinExtras, 0, 0, 375, 800);
            if (extra1Act1 == true) {
                image(extra1, 0, 0, 375, 800);
            }
            if (extra2Act1 == true) {
                image(extra2, 0, 0, 375, 800);
            }
            if (extra3Act1 == true) {
                image(extra3, 0, 0, 375, 800);
            }
            if (extra4Act1 == true) {
                image(extra4, 0, 0, 375, 800);
            }
            if (extra1Act1 == true || extra2Act1 == true || extra3Act1 == true || extra4Act1 == true) {
                image(agregarExtras, 0, 0, 375, 800);
                actAgregarExtras = true;
            }
            image(flechaRegreso, 0, 0, 375, 800);
            break;
        case 9:
            //pago dominos
            image(pagoDominos, 0, 0, 375, 800);
            image(flechaRegreso, 0, 0, 375, 800);
            break;
        case 10:
            //pago karens
            image(pagoKarens, 0, 0, 375, 800);
            image(flechaRegreso, 0, 0, 375, 800);

            break;
        case 11:
            // validacion pedido dominos
            image(validacionPedidoDominos, 0, 0, 375, 800);
            break;
        case 12:
            // validacion pedido karens
            image(validacionPedidoKarens, 0, 0, 375, 800);
            break;
        case 13:
            // recibo dominos
            image(reciboDominos, 0, 0, 375, 800);
            image(flechaRegreso, 0, 0, 375, 800);
            text("PIZZERIA =" + pizzeriaVar +pizza + ext1  + ext2 + ext3 +  ext4 + " \ntotal = " + total, 90,443);
            break;
        case 14:
            //recibo karens
            image(reciboKarens, 0, 0, 375, 800);
            image(flechaRegreso, 0, 0, 375, 800);
            text("PIZZERIA =" + pizzeriaVar +pizza + ext1  + ext2 + ext3 +  ext4 + " \ntotal = " + total, 90,443);  

            break;
    }
}
function keyPressed(){
    if(key != "Backspace"){
        loginScreen.writeTextInput(key);
    }else{
        loginScreen.eraseTextInput();
    }
}
function mousePressed() {
    loginScreen.focusInputs(mouseX,mouseY);
    





    // click ingreso
    if (pantalla === 0 && mouseX > 122 && mouseY > 657 && mouseX < 260 && mouseY < 687) {
        pantalla = 3;
    }
    // click de pantalla de registro 
    if (pantalla === 0 && mouseX > 128 && mouseY > 723 && mouseX < 253 && mouseY < 732) {
        pantalla = 1;
    }
    // registrarse
    if (pantalla === 1 && mouseX > 120 && mouseY > 653 && mouseX < 250 && mouseY < 700) {
        pantalla = 3;
    }
    // click pantalla de recuperacion contraseña
    if (pantalla === 0 && mouseX > 128 && mouseY > 751 && mouseX < 248 && mouseY < 771) {
        pantalla = 2;
    }
    // recuperar contrase a franquisicas
    if (pantalla === 2 && mouseX > 120 && mouseY > 653 && mouseX < 253 && mouseY < 696) {
        pantalla = 0;
    }
    //pantalla historial
    if (pantalla === 3 && mouseX > 195 && mouseY > 117 && mouseX < 300 && mouseY < 143) {
        pantalla = 4;
    }
    //pantalla franquicias
    if (pantalla === 4 && mouseX > 84 && mouseY > 120 && mouseX < 187 && mouseY < 148) {
        pantalla = 3;
    }



    //pantalla dominos
    /*if (pantalla === 3 && mouseX > 14 && mouseY > 206 && mouseX < 356 && mouseY < 270) {
        pantalla = 5;
    }*/
    // pizza champiñones
    if (pantalla === 5 && mouseX > 19 && mouseY > 211 && mouseX < 353 && mouseY < 278) {
        pantalla = 7;
        total += pizza1;
        pizza = "pizza con champiñones = "+pizza1;
    }
    // pizza hawaina
    if (pantalla === 5 && mouseX > 19 && mouseY > 312 && mouseX < 353 && mouseY < 376) {
        pantalla = 7;
        total += pizza2;
        pizza = "pizza con hawaina = " + pizza2;
    }
    // pizza peperoni
    if (pantalla === 5 && mouseX > 19 && mouseY > 413 && mouseX < 353 && mouseY < 480) {
        pantalla = 7;
        total += pizza3;
        pizza = "pizza con peperoni =" + pizza3;
    }
    // pizza vegetariana
    if (pantalla === 5 && mouseX > 19 && mouseY > 512 && mouseX < 353 && mouseY < 577) {
        pantalla = 7;
        total += pizza4;
        pizza = "pizza con vegetariana = " + pizza4;
    }










    // pantalla de platillos karens

    // pizza champiñones
    if (pantalla === 6 && mouseX > 19 && mouseY > 211 && mouseX < 353 && mouseY < 278) {
        pantalla = 8;
        total += pizza1;
        pizza = "pizza con champiñones";
    }
    // pizza hawaina
    if (pantalla === 6 && mouseX > 19 && mouseY > 312 && mouseX < 353 && mouseY < 376) {
        pantalla = 8;
        total += pizza2;
        pizza = "pizza con hawaina";
    }
    // pizza peperoni
    if (pantalla === 6 && mouseX > 19 && mouseY > 413 && mouseX < 353 && mouseY < 480) {
        pantalla = 8;
        total += pizza3;
        pizza = "pizza con peperoni";
    }
    // pizza vegetariana
    if (pantalla === 6 && mouseX > 19 && mouseY > 512 && mouseX < 353 && mouseY < 577) {
        pantalla = 8;
        total += pizza4;
        pizza = "pizza con vegetariana";
    }












    // click eleccion extra uno dominos
    //extra 1
    if (extra1Act === false && pantalla === 7 && mouseX > 44 && mouseY > 403 && mouseX < 157 && mouseY < 497) {
        extra1Act = true;
        total += pextra1;
        ext1 = "\nextra parmesano= " + pextra1;
    } else if (extra1Act === true && pantalla === 7 && mouseX > 44 && mouseY > 403 && mouseX < 157 && mouseY < 497) {
        extra1Act = false;
        total -= pextra1;
        ext1 = "";
    }
    //extra 2
    if (extra2Act == false && pantalla === 7 && mouseX > 210 && mouseY > 400 && mouseX < 320 && mouseY < 495) {
        extra2Act = true;
        total += pextra2;
        ext2 = "\nextra bordes de queso = " + pextra2;
    } else if (extra2Act == true && pantalla === 7 && mouseX > 210 && mouseY > 400 && mouseX < 320 && mouseY < 495) {
        extra2Act = false;
        total -= pextra2;
        ext2 = "";
    }
    //extra 3
    if (extra3Act === false && pantalla === 7 && mouseX > 44 && mouseY > 524 && mouseX < 160 && mouseY < 617) {
        extra3Act = true;
        total += pextra3;
        ext3 = "\nextra de tomates = " + pextra3;
    } else if (extra3Act === true && pantalla === 7 && mouseX > 44 && mouseY > 524 && mouseX < 160 && mouseY < 617) {
        extra3Act = false;
        total -= pextra3;
        ext3 = "";
    }
    //extra 4
    if (extra4Act === false && pantalla === 7 && mouseX > 210 && mouseY > 524 && mouseX < 325 && mouseY < 617) {
        extra4Act = true;
        total += pextra4;
        ext4 = "\nextra peperoni = " + pextra4;
    } else if (extra4Act === true && pantalla === 7 && mouseX > 210 && mouseY > 524 && mouseX < 325 && mouseY < 617) {
        extra4Act = false;
        total -= pextra4;
        ext4 = "";
    }

    // sin extras o sin extras
    if (pantalla == 7 && mouseX > 92 && mouseY > 672 && mouseX < 280 && mouseY < 724) {
        pantalla = 9;
    }








    // click eleccion extra uno karens
    //extra 1
    if (extra1Act1 == false && pantalla === 8 && mouseX > 44 && mouseY > 403 && mouseX < 157 && mouseY < 497) {
        extra1Act1 = true;
        total += pextra1;
        ext1 = "\nextra parmesano= " + pextra1;
    } else if (extra1Act1 == true && pantalla === 8 && mouseX > 44 && mouseY > 403 && mouseX < 157 && mouseY < 497) {
        extra1Act1 = false;
        total -= pextra1;
        ext1 = "";
    }
    //extra 2
    if (extra2Act1 == false && pantalla === 8 && mouseX > 210 && mouseY > 400 && mouseX < 320 && mouseY < 495) {
        extra2Act1 = true;
        total += pextra2;
        ext2 = "\nextra bordes de queso = " + pextra2;
    } else if (extra2Act1 == true && pantalla === 8 && mouseX > 210 && mouseY > 400 && mouseX < 320 && mouseY < 495) {
        extra2Act1 = false;
        total -= pextra2;
        ext2 = "";
    }
    //extra 3
    if (extra3Act1 === false && pantalla === 8 && mouseX > 44 && mouseY > 524 && mouseX < 160 && mouseY < 617) {
        extra3Act1 = true;
        total += pextra3;
        ext3 = "\nextra de tomates = " + pextra3;
    } else if (extra3Act1 === true && pantalla === 8 && mouseX > 44 && mouseY > 524 && mouseX < 160 && mouseY < 617) {
        extra3Act1 = false;
        total -= pextra3;
        ext3 = "";
    }
    //extra 4
    if (extra4Act1 === false && pantalla === 8 && mouseX > 210 && mouseY > 524 && mouseX < 325 && mouseY < 617) {
        extra4Act1 = true;
        total += pextra4;
        ext4 = "\nextra peperoni = " + pextra4;
    } else if (extra4Act1 === true && pantalla === 8 && mouseX > 210 && mouseY > 524 && mouseX < 325 && mouseY < 617) {
        extra4Act1 = false;
        total -= pextra4;
        ext4 = "";
    }
    // sin extras o agregar extras
    if (pantalla == 8 && mouseX > 92 && mouseY > 672 && mouseX < 280 && mouseY < 724) {
    }
    // sin extras o sin extras
    if (pantalla == 8 && mouseX > 92 && mouseY > 672 && mouseX < 280 && mouseY < 724) {
        pantalla = 10;
    }

    
}
function mouseReleased() {
    // selecion dominos
    if (pantalla === 3 && mouseX > 14 && mouseY > 206 && mouseX < 356 && mouseY < 270) {
        pantalla = 5;
        pizzeriaVar = "DOMINO'S\n"
    }
    //selecicion karens
    if (pantalla === 3 && mouseX > 14 && mouseY > 311 && mouseX < 355 && mouseY < 384) {
        pantalla = 6;
        pizzeriaVar = "KAREN'S\n"
    }









    // flechita pa atras
    if (pantalla === 5 && mouseX > 10 && mouseY > 15 && mouseX < 34 && mouseY < 52) {
        pantalla = 3;
        total = 0;
    }
    if (pantalla === 6 && mouseX > 10 && mouseY > 15 && mouseX < 34 && mouseY < 52) {
        pantalla = 3;
        total = 0;
    }
    if (pantalla === 7 && mouseX > 10 && mouseY > 15 && mouseX < 34 && mouseY < 52) {
        pantalla = 5;
        total = 0;
    }
    if (pantalla === 8 && mouseX > 10 && mouseY > 15 && mouseX < 34 && mouseY < 52) {
        pantalla = 6;
        total = 0;
    }
    if (pantalla === 14 && mouseX > 10 && mouseY > 15 && mouseX < 34 && mouseY < 52) {
        pantalla = 3;

    }
    if (pantalla === 13 && mouseX > 10 && mouseY > 15 && mouseX < 34 && mouseY < 52) {
        pantalla = 3;

    }
    if (pantalla === 9 && mouseX > 10 && mouseY > 15 && mouseX < 34 && mouseY < 52) {
        pantalla = 7;

    }
    if (pantalla === 10 && mouseX > 10 && mouseY > 15 && mouseX < 34 && mouseY < 52) {
        pantalla = 8;

    }





    // seleccion tarjetas
    //dominos
    if (pantalla === 9 && mouseX > 109 && mouseY > 310 && mouseX < 263 && mouseY < 412) {
        pantalla = 11;

    }
    if (pantalla === 9 && mouseX > 109 && mouseY > 520 && mouseX < 263 && mouseY < 617) {
        pantalla = 11;

    }
    //karens
    if (pantalla === 10 && mouseX > 109 && mouseY > 310 && mouseX < 263 && mouseY < 412) {
        pantalla = 12;

    }
    if (pantalla === 10 && mouseX > 109 && mouseY > 520 && mouseX < 263 && mouseY < 617) {
        pantalla = 12;

    }

    // recibo dominos
    if (pantalla === 11 && mouseX > 84 && mouseY > 665 && mouseX < 282 && mouseY < 726) {
        pantalla = 13;

    }
    //recibo karens
    if (pantalla === 12 && mouseX > 84 && mouseY > 665 && mouseX < 282 && mouseY < 726) {
        pantalla = 14;

    }
}



