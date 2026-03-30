aoie=0;

// Code Smell: Excessive cyclomatic complexity
function complexFunction(a, b, c, d, e) {
  if (a > 0) {
    if (b > 0) {
      if (c > 0) {
        return a + b + c;
      } else if (c < 0) {
        return a - b - c;
      } else {
        return a * b;
      }
    } else if (b < 0) {
      if (d > 0) {
        return a + d;
      } else {
        return a - d;
      }
    } else {
      return a;
    }
  } else if (a < 0) {
    if (e > 0) {
      return e - a;
    } else {
      return e + a;
    }
  } else {
    return 0;
  }
}

// Code Smell: Long parameter list
function initializeSystem(config, database, logger, cache, session, auth, router, middleware, validator, sanitizer, encryption, compression) {
  return {
    config, database, logger, cache, session, auth, router, middleware, validator, sanitizer, encryption, compression
  };
}

// Bug: Potential null pointer dereference
function getUserName(user) {
  return user.name.toUpperCase(); // Bug: user or user.name might be null/undefined
}

// Bug: Infinite loop
function processItems() {
  var i = 0;
  while (i < 10) {
    console.log(i);
    // Bug: forgot to increment i, infinite loop
  }
}

// Bug: Array modification during iteration
function removeEvens(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr.splice(i, 1); // Bug: modifying array while iterating
    }
  }
  return arr;
}
