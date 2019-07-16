/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
  Quotes variable contains quotes that will be used by the getRandomQuote function to display random quotes.
***/
let quotes = [
    {
      quote:'Be the change that you wish to see in the world.',
      source:'Mahatma Gandhi',
    },
    {
      quote:'Nothing in this world is worth having or worth doing unless it means effort, pain, difficulty.',
      source:'Theodore Roosevelt',
      citation:'American Ideals in Education',
      year:1915
    },
    {
      quote:'It is better to be hated for what you are than to be loved for what you are not.',
      source:'Andre Gide',
      citation:'Autumn Leaves'
    },
    {
      quote:'If you only read the books that everyone else is reading, you can only think what everyone else is thinking.',
      source:'Haruki Murakami',
      citation:'Norwegian Wood'
    },
    {
      quote:'Failures, repeated failures, are finger posts on the road to achievement. One fails forward toward success.',
      source:'C.S. Lewis'
    },
    {
      quote:"I'm the one that's got to die when it's time for me to die, so let me live my life the way I want to.",
      source:'Jimi Hendrix',
      citation:'Jimi Hendrix-Axis:Bold as Love',
      year:1989
    }
];



/***
  The `getRandomQuote` function creates a variable to store a random number
   and returns a random quote object from the `quotes` array.
***/
function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
}



/***
  The `printQuote` function calls the 'getRandomQuote' function and assigns it to
  the randomQuote variable.  The randomQuote is passed to the html string and printed to
  the page.
***/
function printQuote() {
    let randomQuote = getRandomQuote();
    console.log(randomQuote);
    let html = '';
    html = '<p class="quote">' + randomQuote['quote'] + '</p>';
    html += '<p class="source">' + randomQuote['source'];
    if (randomQuote['citation'] !== undefined) {
      html += '<span class="citation">' + randomQuote['citation'] + '</span>';
    }  else if (randomQuote['year'] !== undefined) {
        html += '<span class="year">' + randomQuote['year'] + '</span>';
    }    
html += '</p>';
document.getElementById('quote-box').innerHTML = html;

}



/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
