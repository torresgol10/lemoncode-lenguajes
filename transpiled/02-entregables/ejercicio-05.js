console.log("************** DELIVERABLE 05 *********************");
var SlothMachine = /** @class */ (function () {
    function SlothMachine() {
        this.counterCoin = 0;
    }
    SlothMachine.prototype.play = function () {
        this.counterCoin++;
        var ruleta = [this.randomBoolean(), this.randomBoolean(), this.randomBoolean()];
        if (this.isWin(ruleta)) {
            console.log('Good luck next time!!');
        }
        else {
            console.log("Congratulations!!!. You won ".concat(this.counterCoin, " coins!!"));
            this.counterCoin = 0;
        }
    };
    SlothMachine.prototype.isWin = function (ruleta) {
        return ruleta.includes(false);
    };
    SlothMachine.prototype.randomBoolean = function () {
        return Math.random() >= 0.5;
    };
    return SlothMachine;
}());
var machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
