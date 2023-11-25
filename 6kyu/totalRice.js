//my problem is that i want 1 rice and 64 square of chess if we double the rice on each square what is the total rice upto 64 squares
// so we wamt the while loop for this
// total rice
//36893488147419103000 - thirty-six quintillion eight hundred ninety-three quadrillion four hundred eighty-eight trillion one hundred forty-seven billion four hundred nineteen million one hundred three thousand
// total rice in kilos -
//737869762948382.1"-seven hundred thirty-seven trillion eight hundred sixty-nine billion seven hundred sixty-two million nine hundred forty-eight thousand three hundred eighty-two and one tenth
let rice = 1;
let squares = 64;
let count = 0;
while(count<= squares){
    rice = rice*2;
    count++
}

console.log(rice);
//wieght of one rice is 0.05 grams so total wieght is 
console.log(rice*0.00002)


