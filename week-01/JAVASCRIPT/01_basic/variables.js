// variables:
// koi si b chez store krne k liye hmen ek memory space chahiye hota hy

const accountId = 2437894;
let accountEmail = "far@google.com";
var accountPassword = "28932";
accountCity = "karachi";

// nodejs wghera me keyword define hen k console.log mile to output dikhana hy or agr const let ya var mile to iski value ko memory me store krwana hy

// memory ka name variable name se dy do or us me jo value rkhni hy wo iski value rkh do uske andr

// const ka mtlb hy k hm change nahi kr skte 

// accountId = 2;  // not allowed
console.log(accountId);

accountEmail = "hc@hc.com";
console.log(accountEmail);

accountPassword = "3281210";
console.log(accountPassword);

accountCity = "Lahore";
console.log(accountCity);


// prefer not to use var
// because of block scope and functional scope

let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
// yeh output tabular form me ly kr ata hy ek sth

