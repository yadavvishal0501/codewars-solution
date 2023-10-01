// Create a function that returns the sum of the digits formed from the first and last digits, all the way to the center of the number.

// Worked Example
// 2520 ➞ 72

// # The first and last digits are 2 and 0.
// # 2 and 0 form 20.
// # The second digit is 5 and the second to last digit is 2.
// # 5 and 2 form 52.

// # 20 + 52 = 72
// Examples
// 121 ➞ 13
// # 11 + 2

// 1039 ➞ 22
// # 19 + 3

// 22225555 ➞ 100
// # 25 + 25 + 25 + 25
// Notes
// If the number has an odd number of digits, simply add on the single-digit number in the center (see example #1).
// Any number which is zero-padded counts as a single digit (see example #2).


//SOLUTIONS
function closingInSum(n) {
    // first for even numbers;
   
    
    let div = 0;
      let pair=0 ;
      let sum=0;
      
    let numArr = String(n).split(''); ///get an array
    if(numArr.length%2==0){
        div += Math.floor(numArr.length/2);
      for(let j=1; j<div+1;j++){
      pair+= numArr[j-1]+numArr[numArr.length-j]
       }
       
      let Arr = pair.split('')
       Arr.shift();
       for(i=0;i<Arr.length;i+=2){
          sum+=parseInt(Arr[i]+Arr[i+1]);
       }
       
       return sum
       
    }else if(numArr.length==1){
        return parseInt(numArr[0]);
    }
    else if((numArr.length-1) %2==0){
              div += Math.floor(numArr.length/2);
              for(let j=1; j<div+1;j++){
      pair+= numArr[j-1]+numArr[numArr.length-j]
       }
          let Arr = pair.split('')
       Arr.shift()
       for(i=0;i<Arr.length;i+=2){
          sum+=parseInt(Arr[i]+Arr[i+1]);
       }
       return sum+parseInt(numArr.slice((Arr.length/2),-(Arr.length/2)).join(''));
    }
    
  
    
  }
  //   console.log(closingInSum(2))