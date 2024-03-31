function primeSelector(number) {
    for (let divider = 2; divider <= Math.sqrt(number); divider++) {
        if (number % divider === 0) {
            return false;
        }
    }
    return true;
}
/////checking if the number is divisible by 2

function primeNumbers(array) {
    return array.filter(primeSelector);
}
///using the filter method to return all true statements




