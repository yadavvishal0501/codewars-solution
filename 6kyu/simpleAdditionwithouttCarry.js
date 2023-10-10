//

//solutions

function additionWithoutCarrying(param1,param2) {
  
    param1 = String(param1);
    param2 = String(param2);
   let c= param1.length>param2.length ? param1 : param2;
   let d = param1.length>param2.length ? param2: param1;
   d=('00000'+d).slice(-c.length).split('').map(Number)
   c = c.split('').map(Number);
  //  console.log(c);
  let e = c.map((num,index)=>{
  return  (num + d[index])%10 ;
  })
  
  return Number(e.join(''))
  
  
  
  
  
  
}
  
function additionWithoutCarrying(param1,param2) {
  
    param1 = String(param1);
    param2 = String(param2);
   let c= param1.length>param2.length ? param1 : param2;
   let d = param1.length>param2.length ? param2: param1;
   d=('00000'+d).slice(-c.length).split('').map(Number)
   c = c.split('').map(Number);
  //  console.log(c);
  let e = c.map((num,index)=>{
  return  (num + d[index])%10 ;
  })
  
  return Number(e.join(''))
  
  
  
  
  
  
}
  

function additionWithoutCarrying(a, b) {
    
    let aString = a.toString();
    let bString = b.toString();
  
  
    if (aString.length > bString.length) {
        bString = addZeros(bString, aString.length);
    } else if (bString.length > aString.length) {
        aString = addZeros(aString, bString.length);
    }
  
    const numA = aString.split('').map(num => parseInt(num));
    const numB = bString.split('').map(num => parseInt(num));
    let result = '';
    for (let i = 0; i < numA.length; i++) {
        let sum = numA[i] + numB[i]
        if (sum >= 10) sum = sum - 10;
        result += sum.toString()
    }
    return parseInt(result);
  
    function addZeros(string, length) {
        let result = string;
        while (result.length < length) {
            result = `0${result}`;
        }
        return result;
    }
}