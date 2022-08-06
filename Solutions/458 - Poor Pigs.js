/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
 var poorPigs = function(buckets, minutesToDie, minutesToTest) {

    /**
     * One pig drinks one row’s bucket water each die time, another one drinks one column’s bucket water each die time.
     * So we can find out the poisonous bucket in the 5 x 5 = 25 buckets.
     * If there are 3 pigs, we can build a 5x5x5 matrix, so it can check 5 x 5 x 5 = 125 buckets.
     * And so on.
     */

    let totalTime = Math.ceil(minutesToTest/minutesToDie)  + 1;
    let numberOfPoorPigs = 0;
    while ((Math.pow(totalTime, numberOfPoorPigs)) < buckets) {
        ++numberOfPoorPigs;
    }
    
    return numberOfPoorPigs;  
};

// Test Case = > buckets = 1000, minutesToDie = 15, minutesToTest = 60
// 5^0 = 1 whihc is less 1000, hence number of poor pings = 1
// 5^1 = 5 whihc is less  1000, hence number of poor pings = 2
// 5^2 = 25 whihc is less  1000, hence number of poor pings = 3
// 5^3 = 125 whihc is less  1000, hence number of poor pings = 4
// 5^4 = 600 whihc is less  1000, hence number of poor pings = 5
// 5^5 = 3000 whihc is NOT LESS  1000, hence number of poor pings = 5
// So answer is 5.