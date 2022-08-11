/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if(s === '')
        return;
    
    let n = s.length;
    let maxLength = 1, start = 0;
  
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let flag = 1;
  
            // Check palindrome
            for (let k = 0; k < (j - i + 1) / 2; k++)
                if (s[i + k] != s[j - k])
                    flag = 0;
  
            // Palindrome
            if (flag!=0 && (j - i + 1) > maxLength) {
                start = i;
                maxLength = j - i + 1;
            }
        }
    }
    
    
    return s.substring(start, start + maxLength);
};