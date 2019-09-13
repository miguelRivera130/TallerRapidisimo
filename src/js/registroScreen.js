let arrayInputs1;
let sizeArray1;
class RegistroScreen {

    constructor() {
        arrayInputs1 = [];
        sizeArray1 = 2;
        let incrementPosY = 0;
        for (let i = 0; i < sizeArray1; i++) {
            arrayInputs[i] = new Input(80, 440 + incrementPosY);
            incrementPosY += 50;
        }

        console.log(arrayInputs1);
    }

   paint(){
       for (let i = 0; i < arrayInputs1.length; i++) {
            arrayInputs1[i].paint();
        }

    }

    focusInputs(mouseX,mouseY) {
        for (let i = 0; i < arrayInputs1.length; i++) {

            console.log("1",mouseX >= arrayInputs1[i].getPosX() && mouseX <= arrayInputs1[i].getPosX() + 200);
            console.log("2",mouseY >= arrayInput1[i].getPosY() && mouseY <= arrayInputs1[i].getPosY() + 30);

            console.log(mouseY);
            if (mouseX >= arrayInputs1[i].getPosX() && mouseX <= arrayInputs1[i].getPosX() + 200
                && mouseY >= arrayInputs1[i].getPosY() && mouseY <= arrayInputs1[i].getPosY() + 50) {
                arrayInputs1[i].setFocus(true);
                console.log(arrayInputs1[i].getFocus());

            } else {
                arrayInputs1[i].setFocus(false);
                console.log(arrayInputs1[i].getFocus());
            }
        }
    }

    writeTextInput(key) {
        for (let i = 0; i < arrayInputs1.length; i++) {
            if (arrayInputs1[i].getFocus() && arrayInputs1[i].getText().length < 15) {
                arrayInputs1[i].setText(arrayInputs1[i].getText() + key);
            }
        }
    }

    eraseTextInput() {

        for (let i = 0; i < arrayInputs1.length; i++) {
            if (arrayInputs1[i].getFocus() && arrayInputs1[i].getText().length - 1 >= 0) {
                let indice = arrayInputs1[i].getText().length - 1;
                arrayInputs1[i].setText(arrayInputs1[i].getText().substring(0, indice));
            }
        }

    }
}