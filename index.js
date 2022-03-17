function roll() //decide who won
{
  var first = random_num();
  var second = random_num();
  document.querySelector(".left-dice-img").src = "images/dice"+first+".png";
  document.querySelector(".right-dice-img").src = "images/dice"+second+".png";
  if (first > second)
  {
    document.querySelector("h1").textContent = "Player 1 won!";
  }
  else if (first === second)
  {
    document.querySelector("h1").textContent = "Tie!";
  }
  else
  {
    document.querySelector("h1").textContent = "Player 2 won!";
  }
}

function random_num() //create a random number between 1 and 6
{
  var n = Math.random();
  n = ((n*100) % 6) + 1; //reduce n between 1-6
  return Math.floor(n);
}
