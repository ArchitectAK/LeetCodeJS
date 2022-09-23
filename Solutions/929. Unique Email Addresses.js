/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
  let actualEmails = [];
  
  for(let email of emails){
      let parts = email.split("@")
      let validEmail = parts[0].split("+")[0].replaceAll(".","") +"@"+ parts[1]
      if(actualEmails.indexOf(validEmail) == -1){
          actualEmails.push(validEmail);
      }
  }
  return actualEmails.length;
};