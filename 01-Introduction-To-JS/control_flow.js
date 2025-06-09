var score = 50;
// 90 and 100 -> 'A'
// 80 and 90 -> 'B'
// 70 and 80 -> 'C'
// 60 and 70 -> 'D'
// otherwise -> 'F'

if (score >= 90 && score <= 100) {
    console.log('A');
} else if (score >= 80 && score < 90) {
    console.log('B');
} else if (score >= 70 && score < 80) {
    console.log('C');
} else if (score >= 60 && score < 70) {
    console.log('D');
} else {
    console.log('F');
}

let day = 10;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid number provided");
}