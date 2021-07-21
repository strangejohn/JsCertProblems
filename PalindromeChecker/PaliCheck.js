function palindrome(str) {
  let newStr=str
    .toLowerCase()
    .replace(/[\s\W_]/g,'')
    .split('');
  let compairStr = newStr.slice().reverse().join('');
  newStr=newStr.join('')
  if(compairStr==newStr){return true;}
  else{return false};
}

palindrome("_eye")