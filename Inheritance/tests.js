// Exercise 1
describe('String.filter', () => {
    it('return a string without the banned word ', () => {
        assert.strictEqual('you', 'are you'.filter('are'));
    });
});

// Exercise 2
describe('Array BubbleSortt', () => {
    it('sorts an array ', () => {
        expect([8, 1, 6, 2].bubbleSort()).to.have.same.members([1, 2, 6, 8]);
    });
});  



// Exercise 3
describe('teacher person Inheritance', () => {
    it('teacher derived from person class', () => {
        const ann = new Teacher();
        ann.initialize('ann', 50);
        assert.strictEqual(ann.teach('fpp'), 'ann is teaching fpp');
    });
});
