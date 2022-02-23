const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function () {
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function () {
    return drivers.slice(-2,drivers.length)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return (fare) => fare * multiplier;
}

const fareDoubler = function (fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = (fare) => createFareMultiplier(3)(fare);

function selectDifferentDrivers (arrayOfDrivers, returnFn) {
    return returnFn();
}
