/**
 * using the random method to generate a random sequence and
 * use that to shuffle the cards
 */

function shuffleSequence () {
  var shuffledNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (var i = shuffledNumbers.length - 1; i > 0; i -= 1) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = shuffledNumbers[i];
    shuffledNumbers[i] = shuffledNumbers[j];
    shuffledNumbers[j] = temp;
  }
  return shuffledNumbers;
}


/** With closure to retain the cards order */

var reArrange = (function() {
    var sortedCards,
         wrapper;
    function rearrangeCards(arr) {
        wrapper = document.getElementsByClassName("num-panel");
        var items = wrapper[0].children;
        var elements = document.createDocumentFragment();
        if (!sortedCards) {
            sortedCards = wrapper[0].innerHTML;
        }
        arr.forEach(function(idx) {
            elements.appendChild(items[idx-1].cloneNode(true));
        });
        wrapper[0].innerHTML = null;
        wrapper[0].appendChild(elements);
    }
    return {
      shuffle: function() {
        var shuffledNumbers = shuffleSequence();
        rearrangeCards(shuffledNumbers);
      },

      sort: function() {
        if (sortedCards) {
            wrapper = document.getElementsByClassName("num-panel");
            wrapper[0].innerHTML = sortedCards;
        }
      }
    };
  })();