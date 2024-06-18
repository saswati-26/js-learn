const accountId = 144553          //cannot be changed
let accountEmail = "disha@puchuu.com"       //can be changed
var accountPassword = "2622"         //can be changed
accountCity = "Jaleswar"            //can be changed
let accountState;

// accountId = 2        //not allowed

accountEmail = "pd@pd.com"
accountPassword = "272622"
accountCity = "Balasore"

console.log(accountId);

/*
Prefer not to user var: because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])