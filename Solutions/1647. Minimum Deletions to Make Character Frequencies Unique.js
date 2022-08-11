/**
 * @param {string} s
 * @return {number}
 */
 var minDeletions = function(s) {
  const frequencyObj = {};
  let numOfSubtractions = 0;
  for (let letter of s) {
      frequencyObj[letter] = (frequencyObj[letter] ? frequencyObj[letter] : 0) + 1;

  }
  
  const frequencyArr = Object.values(frequencyObj).sort((a, b) => b - a);
  
  let maxAllowedFrequency = frequencyArr[0];
  for (let frequency of frequencyArr) {
      if (frequency > maxAllowedFrequency) {
          if (maxAllowedFrequency > 0) {
              numOfSubtractions += frequency - maxAllowedFrequency;
          }
          else {
              numOfSubtractions += frequency;
          }
      }
      maxAllowedFrequency = Math.min(maxAllowedFrequency - 1, frequency - 1);

  }
  
  return numOfSubtractions;
};
