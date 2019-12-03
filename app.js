// returns a random color 
function getRandomColor() {
  let colors = ['red', 'green', 'blue', 'orange', 'pink'];

  let randomNum = Math.floor(Math.random() * 5);

  return colors[randomNum];
}

// changes div to a new color on page load
$('div').each(function () {
  $(this).css('background-color', getRandomColor());
});

// listen for window resize
$(window).resize(function () {
    $('div').each(function () {
      $(this).css('background-color', getRandomColor());
    });
});

