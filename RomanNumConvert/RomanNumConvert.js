let romanMatrix = {
  '':0,
  'I':1,
  'II':2,
  'III':3,
  'IV':4,
  'V':5,
  'VI':6,
  'VII':7,
  'VIII':8,
  'IX':9,
  'X':10,
  'XX':20,
  'XXX':30,
  'XL':40,
  'L':50,
  'LX':60,
  'LXX':70,
  'LXXX':80,
  'XC':90,
  'C':100,
  'CC':200,
  'CCC':300,
  'CD':400,
  'D':500,
  'DC':600,
  'DCC':700,
  'DCCC':800,
  'CM':900,
  'M':1000,
  'MM':2000,
  'MMM':3000
}
function convertToRoman(num) {
  if(num===0){return ''};
 let digits = String(+num).split("").reverse();
 let brokenD = [];
 for(let i =0;i<digits.length;i++){
  if(i==0){brokenD.unshift(digits[i])}
  else{brokenD.unshift((digits[i])*Math.pow(10,i))} 
 }
 for(let i=0;i<brokenD.length;i++){
  for (let [keys,values] of Object.entries(romanMatrix)){
    if(brokenD[i]==values){brokenD[i]=keys}
  }
 }
 brokenD=brokenD.join('')
console.log(digits)
console.log(brokenD)
 return brokenD;
}

convertToRoman(3999)