/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function (start, end) {
  if (start.replace(/X/g, '') !== end.replace(/X/g, '')) return false;

  let l = 0, r = start.length - 1;

  for (let i = 0; i < start.length; i++) {
    if (start[i] === 'L') {
      while (end[l] !== 'L') {
        l++;
      }
      if (l++ > i) {
        return false;
      }
    }
  }

  for (let i = start.length; i >= 0; i--) {
    if (start[i] === 'R') {
      while (end[r] !== 'R') {
        r--;
      }
      if (r-- < i) {
        return false;
      }
    }
  }
  return true;
};