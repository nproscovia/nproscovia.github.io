class Duck {
    constructor(name) {
        this.flying = false;
        this.quacking = false;
        this.xpos = 0;
        this.ypos = 0;
        this.name = name;
    }

    takeOff() {
        this.flying = true;
    }

    startsQuacking() {
        this.quacking = true;
    }

    land() {
        this.flying = false;
    }

    stopQuacking() {
        this.quacking = false;
    }

    moveTo(x, y) {
        this.xpos = x;
        this.ypos = y;
        console.log(`Duck ${this.name} is ${this.flying ? "flying" : "swimming"} to ${x}, ${y} ${this.quacking ? "while quacking" : ""}`);
    }

}

module.exports = Duck;