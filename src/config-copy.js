var content = "6a2f41a3-c54c-fce8-32d2-0324e1c32e22";

// var content = "6a2f41a3-c54c-fce8-32d2-0324e1c32e22";

REVIEW
//REVIEW

// Security Vulnerability: Hardcoded credentials
const password = "admin123"; // Hardcoded password
const apiKey = "sk_live_51234567890abcdef"; // Hardcoded API key
const dbConnection = "mongodb://admin:password123@localhost:27017"; // Hardcoded credentials

// Security Vulnerability: Sensitive data exposure
function logUserData(user) {
  console.log("User credentials:", user.password, user.ssn); // Exposing sensitive data
}

// Code Smell: Identical functions (code duplication)
function calculateTotalPrice(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
}

function calculateOrderTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
}

// Code Smell: Commented-out code
// function oldImplementation() {
//   const data = fetchData();
//   processData(data);
//   return data;
// }
// 
// var oldConfig = {
//   setting1: true,
//   setting2: false
// };
//
// if (oldCondition) {
//   doSomething();
// }
