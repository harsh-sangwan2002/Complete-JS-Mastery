let ladder = {

    count: 0,
    up: function () {
        this.count++;
        return this;
    },
    down: function () {
        this.count--;
        return this;
    },
    showStep: function () {
        return this.count;
    }
}

ladder.up() // 1
ladder.up() // 2
ladder.down() // 1
ladder.showStep() // 1

console.log(ladder.up().up().up().down().showStep());