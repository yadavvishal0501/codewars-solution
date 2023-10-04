// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// FUNDAMENTALSARRAYSDEBUGGING

//solution 1

function arrayPlusArray(arr1, arr2) {
    let sum = arr1.concat(arr2);
    return sum.reduce((initial,current)=>{
      return initial + current;
    })
}
  
//solution2
function arrayPlusArray(arr1, arr2) {
    arr1.push(...arr2)
return arr1.reduce((init,currnt)=> init+currnt);
}