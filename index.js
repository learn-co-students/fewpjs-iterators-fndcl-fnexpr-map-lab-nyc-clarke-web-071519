import { workerData } from "worker_threads";

// const tutorials = [
//   "what does the this keyword mean?",
//   "What is the Contutorialuctor OO pattern?",
//   "implementing Blockchain Web API",
//   "The Test Driven Development Workflow",
//   "What is NaN and how Can we Check for it",
//   "What is the difference between stopPropagation and preventDefault?",
//   "Immutable State and Pure Functions",
//   "what is the difference between == and ===?",
//   "what is the difference between event capturing and bubbling?",
//   "what is JSONP?"
// ];

// const finalArr = [];

// tutorials.forEach(title => {
//   finalArr.push(title.split(" "));
// });

// finalArr.forEach(splitSentence => {
//   splitSentence.forEach(word => {
//     word.toUpperCase();
//   });
// });

// const titleCased = () => {
//   return tutorials.map(tutorial => {
//     tutorial = tutorials.split(" ");
//     for (var i = 0; i < tutorial.length; i++) {
//       tutorial[i] = tutorial[i][0].toUpperCase() + tutorial[i].slice(1);
//     }
//     return tutorial.join(" ");
//   });
// };

const tutorials = [
  "what does the this keyword mean?",
  "What is the Contutorialuctor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?"
];

function titleCased() {
  return tutorials.map(function(tutorial) {
    tutorial = tutorial.split(" ");
    for (var i = 0; i < tutorial.length; i++) {
      tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);
    }
    return tutorial.join(" ");
  });
}
titleCased();
