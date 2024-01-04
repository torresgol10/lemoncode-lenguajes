console.log("************** DELIVERABLE 05 *********************");
class SlothMachine {
    private counterCoin: number = 0;

    public play(): void {
        this.counterCoin++

        const ruleta = [this.randomBoolean(), this.randomBoolean(), this.randomBoolean()]

        if (this.isWin(ruleta)) {
            console.log('Good luck next time!!')
        } else {
            console.log(`Congratulations!!!. You won ${this.counterCoin} coins!!`)
            this.counterCoin = 0
        }

    }

    private isWin(ruleta: boolean[]): boolean {
        return ruleta.includes(false)
    }

    private randomBoolean(): boolean {
        return Math.random() >= 0.5;
    }
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
