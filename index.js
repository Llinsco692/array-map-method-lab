const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// Lookup object for exceptions (lowercase keys map to correct casing)
const exceptionsLookup = {
  "api": "API",
  "oo": "OO",
  "jsonp": "JSONP",
  "nan": "NaN",
  "==": "==",
  "===": "===",
  "stoppropagation": "StopPropagation",
  "preventdefault": "PreventDefault"
};

function titleCased() {
  return tutorials.map((title) => {
    return title
      .split(" ")
      .map((word) => {
        // Split word into core (letters/numbers/=) and suffix (punctuation)
        const [core, suffix] = word.match(/^([\w=]*)(\W*)/).slice(1, 3);
        const lowerCore = core.toLowerCase();
        
        // Replace core if it matches an exception, then add suffix back
        if (exceptionsLookup.hasOwnProperty(lowerCore)) {
          return exceptionsLookup[lowerCore] + suffix;
        }
        // Capitalize first letter and lowercase rest for the core
        const processedCore = core.charAt(0).toUpperCase() + core.slice(1).toLowerCase();
        return processedCore + suffix;
      })
      .join(" ");
  });
}

console.log(titleCased());