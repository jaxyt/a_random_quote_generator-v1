/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing



//This is the quote database.
var quotes = [
  {
      quote: 'Get busy living or get busy dying.', 
      source: 'Stephen King', 
      citation: 'Shawshank Redemption', 
      year: 1994,
      categoryTags: ['movies', 'funny']
  },
  {
      quote: 'Great minds discuss ideas; average minds discuss events; small minds discuss people.', 
      source: 'Eleanor Roosevelt',  
      year: 1987,
      categoryTags: ['political figures']
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
      categoryTags: ['inspiration', 'political figures']
  },
  {
      quote: 'Every man loves justice at another man’s expense.', 
      source: 'Anonymous',
      citation: 'Forbes',
      categoryTags: ['irony', 'legal']
  },
  {
      quote: 'Humility is no substitute for a good personality.', 
      source: 'Fran Leibowitz', 
      citation: 'Metropolitan Life', 
      year: 1978
  }
];




function getRandomQuote(list) {
  var randomIndex = Math.floor(Math.random() * list.length); //This function generates a random number, between 1 and 0, then multiplies that number by the total amount of quotes in our database 
  return list[randomIndex] //The generated number is then used as the index of a quote within the database. the returned object is the quote at the generated index.
}

function randomColor() {
  var color = Math.floor(Math.random() * 256);
  return color;
}



function printQuote() {
  var randomQuote = getRandomQuote(quotes);
  var html = '';
  var quoted = '<p class="quote">' + randomQuote.quote + '</p>'; //I stored all of my html scripts into easily identified variables
  var sourced = '<p class="source">' + randomQuote.source;
  var cited = '<span class="citation">' + randomQuote.citation + '</span>';
  var dated = '<span class="year">' + randomQuote.year + '</span>';
  var close = '</p>';

  html += quoted + sourced; //the function checks for the citation and the year, independent of eachothers outcomes
  if (randomQuote.citation) {
    html += cited;
  }
  if (randomQuote.year) {
    html += dated;
  }
  html += close
  if (randomQuote.categoryTags) {
    var tags = randomQuote.categoryTags.join(', '); //checks for tags and adds it to the html variable
    html += '<p class="tags">' + tags + '</p>';
  }
  document.body.style.backgroundColor = "rgb(" + randomColor().toString() + "," + randomColor().toString() + "," + randomColor().toString() + ")"; //generates random color and sets the html pages background to that color
  document.getElementById('quote-box').innerHTML = html; //this sets the html within the div "quote-box" to the contents of my html variable.
}
setInterval(function() {printQuote();}, 7000); //changes quote every 7 seconds

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


