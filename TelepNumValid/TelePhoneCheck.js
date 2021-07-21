function telephoneCheck(str) {
  str=str.replace(/[\s]/g, '')
  let regex= /^([1]*)(\d{3}|([()]\d{3}[()]))([-]*)(\d{3})([-]*)(\d{4})$/
  return regex.test(str);
}
telephoneCheck("(555)5(55?)-5555")
telephoneCheck("1 456 789 4444")
telephoneCheck("10 (757) 622-7382")