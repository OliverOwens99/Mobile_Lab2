var sentence = "Hello World!!!!!!!!";
// function countingString(sentence:string) {
// let count:number = sentence.length;
// return count;
// }
// console.log(countingString(sentence));
var space = false;
function NoSpaces(sentence, space) {
    var count = 0;
    if (space == false) {
        count = sentence.replace(" ", "").length;
    }
    else {
        count = sentence.length;
    }
    return count;
}
console.log(NoSpaces(sentence));
