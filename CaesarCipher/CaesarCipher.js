function rot13(str) {
let top = 'ABCDEFGHIJKLM'
let bottom = 'NOPQRSTUVWXYZ';
top=top.split('');
bottom=bottom.split('')
let convertArr =[];
let regex= /\W/
  let copyStr= str.toUpperCase().split('')
  for(let x of copyStr){
    if(regex.test(x)){convertArr.push(x)}
    else{
      for( let i=0;i<top.length;i++){
        if(top[i]==x){
          convertArr.push(bottom[i])
        }
        if(bottom[i]==x){
          convertArr.push(top[i])
        }
      }
    }
  }
  convertArr=convertArr.join('');
  console.log(convertArr)
  return convertArr;
}
//FREE LOVE?
//FREE LOVE?
rot13("SERR YBIR?")