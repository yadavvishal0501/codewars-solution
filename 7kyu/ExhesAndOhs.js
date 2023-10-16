// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

//solutions

function XO(str) {
    return str.split('').filter(s=> s.toLowerCase()=='o').length == str.split('').filter(s=> s.toLowerCase()=='x').length; 
  }
  function XO(str) {
    let b= str.split('').filter(s => s.toLowerCase()=='o');
    let c = str.split('').filter(s => s.toLowerCase()=='x')
    return c.length == b.length
  }