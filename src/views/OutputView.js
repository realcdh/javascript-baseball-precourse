export default class OutputView {
    constructor() {
        this.result = document.getElementById('result');
        this.restartBtn = document.getElementById('game-restart-button');
        
        this.restartBtn.style.display = "none";
    }

    // 정답 출력
    showResult(ball, strike) {
        if (ball == 3 && strike == 3) {
            this.restartBtn.style.display = "block";
            this.result.innerHTML = "<h4>🎉정답을 맞추셨습니다🎉</h4><br><div>게임을 새로 하시겠습니까?</div><br>";
            return;
        }

        if (ball == 0 && strike == 0) {
            this.result.innerHTML = "낫싱";
            return;
        }

        if ((ball == 0 || ball - strike == 0) && strike != 0) {
            this.result.innerHTML = strike + "스트라이크";
            return;
        }

        if (ball != 0 && strike == 0) {
            this.result.innerHTML = ball + "볼";
            return;
        }

        this.result.innerHTML = ball - strike + "볼 " + strike + "스트라이크";
        return;
    }

    showError(errorMessage) {
        alert(errorMessage);
    }

    clearResult() {
        this.result.innerHTML = "";
        this.restartBtn.style.display = "none";
    }

    // 재시작 버튼 클릭 이벤트 바인딩
    bindRestartEvent(handler) {
        this.restartBtn.addEventListener("click", () => {
            handler();
        });
    }
}