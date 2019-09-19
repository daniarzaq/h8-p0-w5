function changeVocals (str) {
    //code di sini
    var resVocal = '';
    var strArr = [];
    var vocal = ['A', 'I', 'U', 'E', 'O', 'a', 'i', 'u', 'e', 'o'];
        for (var i = 0; i < str.length; i++) {
                strArr.push(str[i])
        }

        for (var j = 0; j < strArr.length; j++) {
            for (var k = 0; k < vocal.length; k++) {
                if (strArr[j] === vocal[k]) {
                   var change = String.fromCharCode(strArr[j].charCodeAt(0) + 1);
                   
                   strArr.splice(j, 1 , change)
                }
            }
            resVocal += strArr[j]
        }
        
       return resVocal
  }
  
  function reverseWord (str) {
     var resRev = ''
    for (var i = str.length - 1; i >= 0; i--) {
        resRev += str[i]
    }
    return resRev
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var strArr = [];
    var resLoUp = '';
    for (var i = 0; i < str.length; i++) {
        strArr.push(str[i])
        }

    for (var j = 0; j < strArr.length; j++) {
        if ( strArr[j] == strArr[j].toUpperCase()) {
            var changeUp = strArr[j].toLowerCase();
            strArr.splice(j, 1 , changeUp)
        } else {
            var changeLo = strArr[j].toUpperCase();
            strArr.splice(j, 1 , changeLo)
        }
        resLoUp += strArr[j]
    }

    return resLoUp
  }
  
  function removeSpaces (str) {
    //code di sini
    var strArr = [];
    var resRem = '';
    for (var i = 0; i < str.length; i++) {
        strArr.push(str[i])
        }
    
        for (var j = 0; j < strArr.length; j++) {
            if (strArr[j] === ' '){
                strArr.splice(j, 1)
            }
            resRem += strArr[j]
        }
    return resRem
  }
  
  function passwordGenerator (name) {
    //code di sini

    if (name.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter'

    else {
        
    var vowels = changeVocals(name);
    var reverse = reverseWord(vowels);
    var loUp = setLowerUpperCase(reverse);
    var generate = removeSpaces(loUp);
    
    return generate

    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'