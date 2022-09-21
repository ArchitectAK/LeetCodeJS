/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
  let sortedAccounts = accounts.map(account => {
      let sum = 0;
      account.map(money => sum += money)
      return sum;
  }).sort((a,b) => b-a)
  console.log(sortedAccounts)
  return sortedAccounts[0];
};