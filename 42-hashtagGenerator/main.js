function generateHashtag (str) {
  let arr = str.split(" ");
  let withCaptalize = arr.map(word =>word.charAt(0).toUpperCase() + word.substring(1)).join("")
  return withCaptalize
}
generateHashtag("str")
