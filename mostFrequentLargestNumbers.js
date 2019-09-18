function sorting(arrNumber) {
    // code di sini
    var jumlah = {};
    var angka, pj = arrNumber.length;
    for (let i = 0; i < pj; i++) {
        
        angka = arrNumber[i];

        if (!jumlah[angka]) {
            jumlah[angka] = 1;
        } else {
            jumlah[angka]++;
        }
        
    }
    return jumlah
   
    
  }
  
  function getTotal(arrNumber) {
    // code di sini
    var arrKey = Object.keys(arrNumber);
    var lastArr = arrKey.length - 1;
    var lkey = arrKey[lastArr];
    
    var last = arrNumber[lkey];
   
    return '\'angka paling besar adalah ' + lkey + ' dan jumlah kemunculan sebanyak ' + last +' kali\''
    
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    if (arrNumber.length === 0) {
        return '\'\' '
    } else {
    var listSort = sorting(arrNumber);   
    var countHighest = getTotal(listSort);
    return countHighest;
    }
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''