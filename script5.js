const checkForSpam = function(message) {
  const text = message;
  const words = message.toLowerCase();
  const word = "sale";
  const wordd = "spam";
  const indexOf1 = words.includes(word);
  const indexOf2 = words.includes(wordd);


  if (indexOf1 || indexOf2) {
    return console.log(text + " " +true);
  } else {
    return console.log(text + " " +false);
  }
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true