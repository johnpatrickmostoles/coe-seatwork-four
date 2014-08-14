var countBs = function(word,character){
	var count = 0;
	for(var i=0; i<word.length; i++){
		if(word[i]===character){
			count++;
		}
	}
	return count;
}

console.log(countBs("Jakekekekekekekek","e"));