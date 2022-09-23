/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var licenseKeyFormatting = function(s, k) {
  // Remove existing dashes and convert any lowercase letters to uppercase
  const newStr =s.replaceAll('-', '').toUpperCase()
  
  // Convert string to an array so we can manipulate it
  const arr = newStr.split(''); 

  // Loop through array backwards and decrement by value of K
  for (let i = arr.length - 1 - k; i >= 0; i-= k) { 
      arr[i] = arr[i] + '-';
  }

  return arr.join('');
};