class Input {
    constructor(posX, posY) {
        this.focus = false;
        this.text = "";
        this.posX = posX;
        this.posY = posY;
    }

    paint() {
        if (this.focus) {
            stroke(255, 0, 0)

        } else {
            stroke(0);
        }
        fill(255)
        rect(this.posX,this.posY, 200, 30);
        fill(0);
        textSize(16);
        text(this.text, this.posX + 10, this.posY + 20);
        
    }
    getText(){
        return this.text;
    }
    getPosX() {
        return this.posX;
    }
    setPosX(posX) {
        this.posX = posX;
    }
    getPosY() {
        return this.posX;
    }
    setPosY(posY) {
        this.posY = posY;
    }
    getFocus() {
        return this.focus;
    }
    setFocus(focus) {
        this.focus = focus;
    }
    setText(text){
        this.text = text;
    }
}