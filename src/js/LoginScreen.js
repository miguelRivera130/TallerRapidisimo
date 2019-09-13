let arrayInputs;
let sizeArray;
class LoginScreen {

    constructor() {
        arrayInputs = [];
        sizeArray = 2;
        let incrementPosY = 0;
        for (let i = 0; i < sizeArray; i++) {
            arrayInputs[i] = new Input(91, 510 + incrementPosY);
            incrementPosY += 50;
        }

        console.log(arrayInputs);
    }

   paint(){
       for (let i = 0; i < arrayInputs.length; i++) {
            arrayInputs[i].paint();
        }

    }

    focusInputs(mouseX,mouseY) {
        for (let i = 0; i < arrayInputs.length; i++) {

            console.log("1",mouseX >= arrayInputs[i].getPosX() && mouseX <= arrayInputs[i].getPosX() + 200);
            console.log("2",mouseY >= arrayInputs[i].getPosY() && mouseY <= arrayInputs[i].getPosY() + 30);

            console.log(mouseY);
            if (mouseX >= arrayInputs[i].getPosX() && mouseX <= arrayInputs[i].getPosX() + 89
                && mouseY >= arrayInputs[i].getPosY() && mouseY <= arrayInputs[i].getPosY() + 510) {
                arrayInputs[i].setFocus(true);
                console.log(arrayInputs[i].getFocus());

            } else {
                arrayInputs[i].setFocus(false);
                console.log(arrayInputs[i].getFocus());
            }
        }
    }

    writeTextInput(key) {
        for (let i = 0; i < arrayInputs.length; i++) {
            if (arrayInputs[i].getFocus() && arrayInputs[i].getText().length < 15) {
                arrayInputs[i].setText(arrayInputs[i].getText() + key);
            }
        }
    }

    eraseTextInput() {

        for (let i = 0; i < arrayInputs.length; i++) {
            if (arrayInputs[i].getFocus() && arrayInputs[i].getText().length - 1 >= 0) {
                let indice = arrayInputs[i].getText().length - 1;
                arrayInputs[i].setText(arrayInputs[i].getText().substring(0, indice));
            }
        }

    }
}