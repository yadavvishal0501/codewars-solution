// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//solutions


// You can avoid the regex and also return early from the function once you have all the letters with something like this. It creates a set of all the letters and removes them as you find them. Once the set is empty you can return. If the loop finishes, you didn't remove everything. This only requires space for the alphabet set and since set operations are constant time



function isPanagram(string){
    let alpha = new Set('abcdefghijklmnopqrstuvwxyz');
    //makes a  object with a set of element with help of new keyword and Set function
    for(let s of string.toLowerCase()){
        alpha.delete(s);//deleting elements in object.
        if(alpha.size==0){
            return true;
        }
    }
        return false;
}

//another solution

function isPangram(string){
  //...
  let alphabets = 'abcdefghijklmnopqrstuvwxyz';
  return alphabets.split('').every(e=> string.toLowerCase().includes(e));
    
  }