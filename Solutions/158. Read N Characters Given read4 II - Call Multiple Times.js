/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
 var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  
  // create an internal buffer to pass in as an argument to read4. When everytime read4 is called,
 // it will store up to 4 characters that it readfrom the hidden file.
  const internalBuffer = []; 
  
  return function(buf, n) {
    // 1. we add to our internal buffer when its empy.
    // 2. we remove from the internal buffer as long as n > 0.
    // 3. if we empty the internal buffer and n > 0. We refill it again until n < 0
    for(n; n > 0; n--) { 
      if (internalBuffer.length === 0) { 
      // we add to our buffer our initial 4 characters
      read4(internalBuffer)
    }; 
    // if we call read4 and the internal buffer remains empty
    // this means that there is nothing left to read from the hidden file.
    if(internalBuffer.length === 0) { break } 
          
    buf.push(internalBuffer.shift()) // remove from the internal buffer
    }
  }
};