function numberGenerator(value1, value2) {
    const answer = [];
    if (value1 <= value2) {
        for (let value = value1; value<= value2; value++) {
            answer.push(value);
        }
    } else {
        for (let value = value1; value >= value2; value--) {
            answer.push(value);
        }
    }
    return answer;
}
console.log(numberGenerator(1,2))