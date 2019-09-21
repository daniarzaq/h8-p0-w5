function cariPelaku(str) {
    // you can only write your code here!
    var result = 0;
    var newArr = str.split('')
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === 'a' && newArr[i+1] === 'b' && newArr[i+2] === 'c') {
            result++;
        }
    }
    return result
  }
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2