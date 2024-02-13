let givenName = '';
let ageInYears = 30;
let cityOfRecidence = 'Finnsnes, Senja';
let Birthday = '26.Februar';

function pressForName() {
    givenName = 'Trine Brandser';
    document.getElementById('showName').innerHTML = givenName;

    console.log(pressForName);
}

function pressForAge() {
    showAge.innerHTML = `${ageInYears}`;
}

function pressForBirthday() {
    showBirthDay.innerHTML = `${Birthday}`
}

function pressForCity() {
    showCity.innerHTML = `${cityOfRecidence}`
}