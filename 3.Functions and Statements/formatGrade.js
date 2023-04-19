function formatGrade(grade){
    switch (true) {
        case grade<3.00:
            return `Fail (2)`;
        case 3.00<= grade&& grade<3.50:
            return `Poor (${grade.toFixed(2)})`;
        case 3.50 <= grade && grade <4.50:
            return `Good (${grade.toFixed(2)})`;
        case 4.50 <=grade && grade < 5.50:
            return `Very good (${grade.toFixed(2)})`;

        case grade>=5.50:
            return `Excellent (${grade.toFixed(2)})`;
        default:
            return "Error"
    }
}

console.log(formatGrade(3.33))