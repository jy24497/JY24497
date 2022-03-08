function sumOfSquareAreas(a, b) {
    return (a * a) + (b * b);
}

var sum = sumOfSquareAreas(5,10);
var sumagain = sumOfSquareAreas(1,4);
var sumFinal = sumOfSquareAreas(3, 7);

console.log(sum);
console.log(sumagain);
console.log(sumFinal);

function gradeCalculator(homeworkAvg, quizAvg, examAvg) {
    return (homeworkAvg * 0.1) + (quizAvg * 0.15) + (examAvg * 0.75);
}

var grade1 = gradeCalculator(75, 90, 100);
var grade2 = gradeCalculator(60, 80, 90);
var grade3 = gradeCalculator(100, 95, 100);
