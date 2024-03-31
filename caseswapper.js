function caseSwapper(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        const char = input.charAt(i);
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}