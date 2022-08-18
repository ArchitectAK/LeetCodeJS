/**
 * @param {number[]} arr
 * @return {number}
 */
 var minSetSize = function(arr) {
  // Map Data structure to Count Integers Frequents
  const numFreq = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
      numFreq[arr[i]] ? numFreq[arr[i]]++ : (numFreq[arr[i]] = 1);
  }
  
  // Sort the Numbers of time that integer appeared in the array
  const sortedIntegerFeq = Object.values(numFreq).sort((a, b) => b - a);
  // get the minimum size of elements we want to remove by loop at the sorted keys and check if greated than or equal the half of array length
  for (let i = 0; i < sortedIntegerFeq.length; i++) {
      count += sortedIntegerFeq[i];
      if (count >= arr.length / 2) {
          return i + 1;
      }
  }
};