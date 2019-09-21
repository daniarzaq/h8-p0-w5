function kaliTerusRekursif(angka) {
    if (angka > 0 && angka <= 9) return angka;
    else {
        var n = angka.toString(); 
        var arr= (''+n).split('');
        var result = 1;
        for (var i of arr) {
             result *= i
        }
        if (!result) return 0
        return kaliTerusRekursif(result);
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6