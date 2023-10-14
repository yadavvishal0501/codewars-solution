// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

//solutions
function sortArray(array) {
    var odd = array.filter(e=>{
        if(e%2!==0){
            return e;
        }
    }).sort((x,y)=>{
        return x-y;
    });
    let i=0;
    let newArr = [];
    array.forEach(e=>{
        if(e%2==0){
            newArr.push(e);
        }else {
            newArr.push(odd[i])
            i++
        }
    })
    return newArr
  }
  function sortArray(arr){
     
  var odd = arr.filter(x=> x%2).sort((a,b)=> a-b);
  return arr.map(x=> x%2 ? odd.shift():x)
  
  }