/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let a = nums1.concat(nums2);
    let n = a.length;
    a.sort((a, b) => a - b);
    if (n % 2 == 0) {

        var z = n / 2;

        var e = a[z];

        var q = a[z - 1];

        var ans = (e + q) / 2;

        return ans;

    }

    // If length if array is odd
    else {
        var z = Math.floor(n / 2);
        return a[z];

    }

};