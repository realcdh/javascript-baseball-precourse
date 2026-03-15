export default class BaseballGame {
    play(randomNumber, inputNumber) {
        let ball = 0, strike = 0;

        ball = checkBall(randomNumber, inputNumber);
        strike = checkStrike(randomNumber, inputNumber);

        return msg(ball, strike);
    }
}

// 볼 개수 확인
function checkBall(randomNumber, inputNumber) {
    let ball = 0;
    for (let i = 0; i < randomNumber.length; i++) {
        for (let j = 0; j < inputNumber.length; j++) {
            if (randomNumber[i] == inputNumber[j]) {
                ball++;
            }
        }
    }

    return ball;
}

// 스트라이크 개수 확인
function checkStrike(randomNumber, inputNumber) {
    let strike = 0;

    for (let i = 0; i < randomNumber.length; i++) {
        if (randomNumber[i] == inputNumber[i]) {
            strike++;
        }
    }

    return strike;
}

// 정답 출력
function msg(ball, strike) {
    if (ball == 3 && strike == 3) {
        restartBtn.style.display = "block";
        return "<h4>🎉정답을 맞추셨습니다🎉</h4><br><div>게임을 새로 하시겠습니까?</div><br>";
    }

    if (ball == 0 && strike == 0) {
        return "낫싱"
    }

    if ((ball == 0 || ball - strike == 0) && strike != 0) {
        return strike + "스트라이크";
    }

    if (ball != 0 && strike == 0) {
        return ball + "볼";
    }

    return ball - strike + "볼 " + strike + "스트라이크";
}

// 임의의 숫자
let randomNumber = getRandomNumber();
console.log(randomNumber);

// 임의의 숫자 3자리 생성
function getRandomNumber() {
    const tempArr = [];

    while (tempArr.length < 3) {
        const tempNumber = MissionUtils.Random.pickNumberInRange(1, 9);
        tempArr.push(tempNumber);

        if(isDuplicate(tempArr)) {
            tempArr.pop();
        }
    }

    return tempArr;
}

// 인스턴스 호출
const baseballGame = new BaseballGame();

// 확인 버튼
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const inputNumber = document.getElementById('user-input').value.split("");
    checkValidity(inputNumber);

    result.innerHTML = baseballGame.play(randomNumber, inputNumber);
})

// 입력한 숫자에 대한 유효성 검사
function checkValidity(inputNumber) {
    // 숫자가 아닌 경우
    for (let i = 0; i < inputNumber.length; i++) {
        if ('0' > inputNumber[i] || inputNumber[i] > '9') {
            alert('숫자를 입력해 주세요.');
            return;
        }
    }

    // 3자리가 아닌 경우
    if (inputNumber.length !== 3) {
        alert('3개의 숫자를 입력하세요.');
        return;
    }

    // 중복된 수가 있는 경우
    if (isDuplicate(inputNumber)) {
        alert('중복 없이 입력해 주세요.');
        return;
    }
}

// 중복 검사
function isDuplicate(arr)  {
    const isDup = arr.some(function(x) {
        return arr.indexOf(x) !== arr.lastIndexOf(x);
    });
    
    return isDup;
}

// 결과 출력 div
const result = document.getElementById('result');

// 재시작 버튼
const restartBtn = document.getElementById('game-restart-button');
restartBtn.style.display = "none";
restartBtn.addEventListener("click", () => {
    randomNumber = getRandomNumber(); // 새 정답 생성
    result.textContent = "";
    document.getElementById('user-input').value = "";
    restartBtn.style.display = "none";
    console.log("[restart] new randomNumber:", randomNumber);
});