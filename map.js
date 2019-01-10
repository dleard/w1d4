var words = ["ground", "control", "to", "major", "tom"];

function map(array, func) {
	returnArr = []
	array.forEach(function(item) {
		returnArr.push(func(item));
	})
	console.log(returnArr);
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});