// DESCRIPTION:
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// solution

function disemvowel(str) {
    const arr = str.split('');
   const newA = arr.filter(e=>{
       let E = e.toLowerCase();
       return E !== 'a' && E!=='e' && E!=='i' && E!=='o'&& E!=='u';
   });
     return newA.join('');
}
   

   function disemvowel(str) {
    return  str.replace(/[aeiou]/gi,'')//character class for vowels 
   }