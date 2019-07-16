/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


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
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
};



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
function printQuote(){
    let randomQuote = getRandomQuote();
    let html = ' ';
    html += '<p class="quote">' + randomQuote['quote'] + '</p>';
    html += '<p class="source">' + randomQuote['source'];
    if (randomQuote['citation'] !== undefined) {
      html += '<span class="citation">' + randomQuote['citation'] + '</span>';
    }  else if (randomQuote['year'] !== undefined) {
        html += '<span class="year">' + randomQuote['year'] + '</span>';

}
html += '</p>';
html += document.getElementById('quote-box').innerHTML;
}



/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
