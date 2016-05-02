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

var oddAndEvenElements = document.querySelectorAll('.odd, .even');
console.log(oddAndEvenElements);

for (var i = 0; i < allListItems.length; i++) {
  console.log((allListItems[i]).innerText);
}

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText = i);
}

console.log(allListItems);

document.getElementById('main').style.backgroundColor = "goldenrod";

document.getElementsByClassName('odd')[0].style.backgroundColor = "navy";

var li = document.createElement('li');
console.log('li');

li.innerText = "another list item";
console.log(li);

firstUnorderedList.appendChild(li);
console.log(firstUnorderedList);


var anotherListElement = document.createElement('li');
anotherListElement.innerText = "prepend this";
firstUnorderedList.insertBefore(anotherListElement, firstUnorderedList.firstChild);
console.log(allListItems);

firstUnorderedList.removeChild(firstUnorderedList.lastChild);
