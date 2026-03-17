import BaseballGame from './model.js';
import InputView from './views/InputView.js'
import OutputView from './views/OutputView.js';

export default class BaseballController {
    constructor() {
        this.model = new BaseballGame();
        this.inputView = new InputView();
        this.outputView = new OutputView();

        this.init();
    }

    init() {
        this.inputView.bindSubmitEvent(this.onSubmit.bind(this));
        this.outputView.bindRestartEvent(this.onRestart.bind(this));
    }

    onSubmit(inputNumber) {
        try {
            this.model.checkValidity(inputNumber);
            
            const score = this.model.play(this.model.randomNumber, inputNumber);
            this.outputView.showResult(score.ball, score.strike);
            
        } catch (error) {
            this.outputView.showError(error.message);
            this.inputView.clearInput();
        }
    }

    onRestart() {
        this.model.init();
        this.inputView.clearInput();
        this.outputView.clearResult();
    }
}