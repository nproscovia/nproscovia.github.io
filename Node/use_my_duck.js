const MyDuck = require('./duck');
let duck1 = new MyDuck(1);
duck1.takeOff();
duck1.startsQuacking();
duck1.moveTo(1, 3);
duck1.stopQuacking();
duck1.land();
duck1.moveTo(5, 6);

let duck2 = new MyDuck(2);
duck2.takeOff();
duck2.startsQuacking();
duck2.moveTo(1, 3);
duck2.stopQuacking();
duck2.land();
duck2.moveTo(4, 5);