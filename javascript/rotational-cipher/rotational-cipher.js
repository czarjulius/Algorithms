//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class RotationalCipher {
  static rotate(str, key) {
    if (str.length === 0) return str
    let output = ''
    for (let i = 0; i < str.length; i++) {
      let char = str[i]
      if (char.match(/[a-z]/i)) {
        let charCode = str.charCodeAt(i)
        //uppercase
        if (charCode >= 65 && charCode <= 90) {
          char = String.fromCharCode(((charCode - 65 + key)%26) + 65)
        }
        //lowercase
        else if(charCode >= 97 && charCode <= 122){
          char = String.fromCharCode(((charCode - 97 + key)%26) + 97)
        }
      }
      output += char;
      
    }
    return output
  }
}
