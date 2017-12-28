function convert(){

	var number = Number(document.getElementById('num').value);
	num1 = number;

	if (number < 0 || number > Math.pow(10,16)) {
		alert("Sorry out of range");
	} 

	else{
		
		var array = new Array(16);
		var i = 0;
		var condition = 'f';
		
		while(condition == 'f'){

			array[i] = number % 10 ;
			number = parseInt(number/10);
			++i;
			if (number == 0) {
				condition = 't';
			}

		}

		var b = new Array();
		
		for (var p = i-1, y = 0; p >= 0 ; p--, y++) {
		
			b[y] = array[p];
		
		}
		
		
		var answer = " ";

		if (b.length == 1) {
			answer = unit(b);
		} else if (b.length == 2){
			var a = b[0], c = b[1];
			answer = tens(a,c);
		} else if (b.length >= 3) {
			answer = codon(b);
		}

		answer = answer.toLowerCase();

		alert("\n"+num1+": "+answer+"\n");

	}
	
}
