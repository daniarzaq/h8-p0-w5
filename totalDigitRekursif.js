function totalDigitRekursif(angka) {
    // you can only write your code here!
    var cek = angka % 10;
    var result = cek;
    if(angka >= 10) {
        var sisa = Math.floor(angka / 10);
        result += totalDigitRekursif(sisa); 
    }
    return result;

  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5


  