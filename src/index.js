// 임의의 숫자
const randomNumber = getRandomNumber();

// 임의의 숫자 3자리 생성
function getRandomNumber() {
    let tempArr = [];

    while (tempArr.length < 3) {
        let tempNumber = MissionUtils.Random.pickNumberInRange(1, 9);

        if (checkOverLap(tempArr, tempNumber)) {
            tempArr.push(tempNumber);
        } else {
            continue;
        }
    }

    return tempArr;
}

// 생성된 임의의 숫자 중 중복 검사
function checkOverLap(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return false;
        }
    }

    return true;
}