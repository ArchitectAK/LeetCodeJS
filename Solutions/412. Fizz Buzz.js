/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
  let answer = [];
  for(let i = 1; i <= n; i++) {
      answer[i-1] = `${i}`
      if(i % 3 == 0) {
          answer[i-1] = 'Fizz'
      }
      if(i % 5 == 0){
          answer[i-1] = 'Buzz'
      }
      if(i % 15 == 0) {
          answer[i-1] = 'FizzBuzz'
      }
  }
  return answer;
};