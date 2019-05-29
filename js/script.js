/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

var quotes = [
  {
      quote: 'Get busy living or get busy dying.', 
      source: 'Stephen King', 
      citation: 'Shawshank Redemption', 
      year: 1994
  },
  {
      quote: 'Great minds discuss ideas; average minds discuss events; small minds discuss people.', 
      source: 'Eleanor Roosevelt',  
      year: 1987
  },
  {
      quote: 'Those who dare to fail miserably can achieve greatly.', 
      source: 'John F. Kennedy', 
      citation: 'US Inaugural Address', 
      year: 1989
  },
  {
      quote: 'It is hard to fail, but it is worse never to have tried to succeed.', 
      source: 'Theodore Roosevelt', 
  },
  {
      quote: 'Every man loves justice at another man’s expense.', 
      source: 'Anonymous',
      citation: 'Forbes'
  },
  {
      quote: 'Humility is no substitute for a good personality.', 
      source: 'Fran Leibowitz', 
      citation: 'Metropolitan Life', 
      year: 1978
  }
];


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote(list) {
  var randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex]
}


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  var randomQuote = getRandomQuote(quotes);
  var html = '';
  
  if (randomQuote.year && randomQuote.citation) {
    
  } else if (randomQuote.year) {
    
  } else if (randomQuote.citation) {
    
  } else {

  }
}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.