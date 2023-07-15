var quotes=["Live as if you were to die tomorrow. Learn as if you were to live forever.","To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.","It is better to be hated for what you are than to be loved for what you are not.","Two things are infinite: the universe and human stupidity; and I'm not sure about the universe","Be yourself and do not be copy from other"]
viewQuotes=[];
function displayQuotes()
{
  var randomIndex = Math.floor(Math.random() * quotes.length);
  //not repeat the number
  while (quotes[randomIndex] === document.getElementById("Quotes").innerHTML || String.prototype.includes(quotes[randomIndex],displayQuotes)) {
    randomIndex = Math.floor(Math.random() * quotes.length);
  }
    viewQuotes.push(quotes[randomIndex]);
  document.getElementById("Quotes").innerHTML = quotes[randomIndex];
}



