function num_to_letter(num) {
    var letters = 'zabcdefghijklmnopqrstuvwxyz';
    var NUMBER_OF_LETTERS = 26;
    if (num / NUMBER_OF_LETTERS > 1) {
        var first_letter = letters.charAt((Math.ceil(num / NUMBER_OF_LETTERS))-1);
        var second_letter = letters.charAt(num % NUMBER_OF_LETTERS);
        return first_letter + second_letter;
    }else {
        return letters.charAt(num);
    }
}

module.exports = num_to_letter;
