const _radius = new WeakMap();

class Cirrcle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('Circle with radius ' + _radius.get(this));
    }
}

const c = new Cirrcle(10);
console.log(_radius.get(c));
c.draw();