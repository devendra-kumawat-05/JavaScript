const accountId = 144532;
let accountEmail = "devendrakumawat@gmail.com";
var accountPassword = "123444";
accountCity = "Jaipur";

// accountId = 2; //not allowed

accountEmail = "dk@gmail.com";
accountPassword = "56565";
accountCity = "sikar";


console.log(accountId);

/*  Prefer not to use VAR
    because of issue in block scope and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity]);