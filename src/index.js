// 임의의 숫자
const randomNumber = getRandomNumber();

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

// 확인 버튼
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', () => {
    const inputNumber = document.getElementById('user-input').value;
    checkValidity(inputNumber);
})

// 입력한 숫자에 대한 유효성 검사
function checkValidity(inputNumber) {
    const arr = inputNumber.split("");

    // 숫자가 아닌 경우
    for (let i = 0; i < arr.length; i++) {
        if ('0' > arr[i] || arr[i] > '9') {
            alert('숫자를 입력해 주세요.');
            return;
        }
    }

    // 3자리가 아닌 경우
    if (arr.length != 3) {
        alert('3개의 숫자를 입력하세요.');
        return;
    }

    // 중복된 수가 있는 경우
    if (isDuplicate(arr)) {
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