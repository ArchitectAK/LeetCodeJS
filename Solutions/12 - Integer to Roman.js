/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
  const romanVal = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }

  const combinations = {
      IV: 4,
      IX: 9,
      XL: 40,
      XC: 90,
      CD: 400,
      CM: 900
  }

let romans =  {...combinations, ...romanVal};
  let totalRomanVals = Object.values(romans).sort((a,b) => a - b);

  let digit = '';
  while(num !== 0) {
  let range = totalRomanVals.filter(n => n <= num);
      let sub = range[range.length - 1];
      for (let num in romans) {
          if (romans[num] === sub) {
              digit += num;
          }
      }
      num = num - sub;
  }
  return digit;
};