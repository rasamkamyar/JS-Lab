function passGenerator() {
  pass = "";
  for (let i = 0; i <= 2; i++) {
    pass += String.fromCharCode(Math.floor(Math.random() * 25 + 65));
    pass += String.fromCharCode(Math.floor(Math.random() * 25 + 97));
    pass += Math.floor(Math.random() * 10);
  }

  if ((pass.length = 8)) {
    console.log(pass);
  }

  //   return pass;
}

function generatePassword() {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
