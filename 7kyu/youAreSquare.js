// Solutions
// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

//solutions
var isSquare = function(n){
    if(n<0){
      return false;
    }
    let m = Math.sqrt(n);
    if(Math.floor(m)==m){
      return true;
    }else{
    return false;} // fix me
}
  
