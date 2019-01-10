function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var index = 0;
  
  return function() {
		index++;
		if (index > list.length) index = 1;
		return list[index-1];
		
  }
}
  
  var rollLoadedDie = makeLoadedDie();
	
  // console.log(rollLoadedDie());  // 5
  // console.log(rollLoadedDie());  // 4
  // console.log(rollLoadedDie());  // 6
	
	
	var countdownGenerator = function (x) {
		countdownNum = x;
		
		return function(x) {
			returnString = '';
			if (countdownNum === -1) returnString = 'Rockets already gone, bub!';
			if (countdownNum === 0){ 
				countdownNum = -1;
				returnString = 'Blast Off!';
			}	
			if (countdownNum > 0) {
				countdownNum--;
				returnString = 'T-minus ' + (countdownNum + 1) + '...';
			} console.log(returnString);	
		}
	};
	
	var countdown = countdownGenerator(3);
	countdown(); // T-minus 3...
	countdown(); // T-minus 2...
	countdown(); // T-minus 1...
	countdown(); // Blast Off!
	countdown(); // Rockets already gone, bub!
	countdown(); // Rockets already gone, bub!