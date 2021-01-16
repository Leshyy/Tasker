export const utilService = {
    getRandomInt,
    makeId,
    getRandomColor
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

function getRandomColor() {
    var colors = ['green', 'chocolate', 'blue', 'purple', 'red']
    var num = getRandomInt(0, 5)
    console.log('colors[num] is:', colors[num]);
    return colors[num]

}

