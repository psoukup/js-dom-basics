console.log("sanity check");

var firstParagraph = document.getElementById('main');
console.log(firstParagraph)

var allUnorderedLists = document.getElementsByTagName('ul');
console.log(allUnorderedLists);

var firstUnorderedList = allUnorderedLists[0];
console.log(firstUnorderedList);

var allListItems = document.getElementsByTagName('li');
console.log(allListItems);

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i]);
}

var evenElements = document.getElementsByClassName('even');
console.log(evenElements)

var oddElements = document.getElementsByClassName('odd');
console.log(oddElements);

var firstEvenElement = evenElements[0];
console.log(firstEvenElement);

var firstOddElement = oddElements[0];
console.log(firstOddElement);

var main = document.querySelector('#main');
console.log(main);

var firstOddElement = document.querySelector('.odd');
console.log(firstOddElement);
