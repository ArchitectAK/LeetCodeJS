/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
  if (nums1.length > nums2.length){
      let temp = nums1
      nums1 = nums2
      nums2 = temp
  }
  let map = new Map()
  for (let num of nums1) {
          map.set(num, (map.get(num)||0) + 1)
  }
  let k = 0;
  for (let num of nums2) {
      if(map.get(num) > 0){
          nums1[k] = num
          k++
          map.set(num, map.get(num) - 1)
      }
  }
  
  return nums1.splice(0,k);
};