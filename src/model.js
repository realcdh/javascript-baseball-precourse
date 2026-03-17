import {isDuplicate, checkValidity} from './utils/validation.js';

export default class BaseballGame {
    constructor() {
        this.randomNumber = this.getRandomNumber();
    }

    getRandomNumber() {
        const tempArr = [];

        while (tempArr.length < 3) {
            const tempNumber = MissionUtils.Random.pickNumberInRange(1, 9);
            tempArr.push(tempNumber);

            if(isDuplicate(tempArr)) {
                tempArr.pop();
            }
        }

        console.log("RandomNumber: "+ tempArr)
        return tempArr;
    }

    checkValidity(inputNumber) {
        checkValidity(inputNumber);
    }

    play(randomNumber, inputNumber) {
        let ball = 0, strike = 0;

        // 볼 개수 확인
        for (let i = 0; i < randomNumber.length; i++) {
            for (let j = 0; j < inputNumber.length; j++) {
                if (randomNumber[i] == inputNumber[j]) {
                    ball++;
                }
            }
        }

        // 스트라이크 개수 확인
        for (let i = 0; i < randomNumber.length; i++) {
            if (randomNumber[i] == inputNumber[i]) {
                strike++;
            }
        }

        return {ball, strike};
    }
}