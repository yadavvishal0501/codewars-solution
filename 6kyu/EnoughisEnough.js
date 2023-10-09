// solutions
// first approach a systematic vast traditional looping method
//array hai repeated number of elements 
// aur mujhe ek input milega number mai ki kitne bar repeat hone chaihye elements .
//problem ye hai ki ek number ko konsi method use kare mujhe lagta hai filter method lagake dekte hai

function deleteNth(arr,n){
    while(true){
        for(var i=0;i<arr.length;++i){//double looping on single array
            var count = 0;
            for(var j=0;j<arr.length;++j){
                if(arr[i]==arr[j]){
                    ++count;
                
                if(count>n){
                    arr.splice(j,1);
                    break;
                }
            }
        }
            if(j!== arr.length) break;
            
        }
        if(i === arr.length) break;    
}
        return arr;
}

//another method is using reduce
//reduce have four param first initalvalue or array , currentvalue,index of value, array to reduce,
// initial value can be set at end of function or it is default first value of array reduce function can also be used on  objects.
//there many otheer things to known like .set method


function deleteNth(arr,x){
    const finalArr = arr.reduce((DeletedArr,currentValue,currentIndex,arr)=>{
        if(x>0){
            if(!DeletedArr.includes(currentValue)){
                DeletedArr.push(currentValue);
            }
            else if(DeletedArr.filter(el=> el ===currentValue).length < x){
                DeletedArr.push(currentValue);
            }
        }
        return DeletedArr
    },[])
    return finalArr
      
    }
    console.log(deleteNth([1,1,3,3,3,7,2,2,2,2],2))


