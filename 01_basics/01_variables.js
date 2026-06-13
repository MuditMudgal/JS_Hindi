const accountId = 142233
let accountEmail = "mudit@google.com"
var accountPassword = "12345"
accountCity = "jaipur"

// accountId = 2

accountEmail = "sunidhi@gmail.com"
accountPassword = "21212121"
accountCity  = "Bengaluru"

/*
prefer not to use var
because of issue in block scope and functional scope 
*/

console.log("hello ji");


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);