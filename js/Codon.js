function codon(numArray){
	var result = " ";
	var n = nn = test = 0;
	var trans = [ " ", " thousands, ", " million, ", " billion, ", "trillion, ", "quadrillion, "];
	var mod = numArray.length % 3;
	var div = parseInt(numArray.length / 3);

	var b = new Array(3);
	for (var i = 0; i < 3; i++) {
		b[i] = 0 ;
	}


	for (var i = 0; i < div + 1 ; i++) {

			if(i == 0 && mod != 0){
				for (var y = 0; y < mod; y++){
					
					b[3 - mod + y] = numArray[y];

				} 
				if (mod == 1) {

					result = result + unit(b[2]) + trans[div - n];

				} else if (mod == 2){

					result = result + tens(b[1], b[2]) + trans[div - n];

				}

				++n;
				++nn;

			} else{ 

				if ( nn == 1 && mod != 0) {   
				--i;
				++nn;
				}

				if ( mod != 0 && n == 1 && test == 0) {
					--n;
					++test;
				}


				if( div == i){
					break;
				}

				for (var y = 0; y < 3; y++) {

					b[y] = numArray[(y+mod+(i*3))];
				
				} 
				
				if ( b[0] == 0 && b[1] == 0 && b[2] == 0 ) {

					result = result + " ";

				} else if (b[0] == 0 && b[1] == 0 && b[2] != 0){
					
					result = result +  " and "+ unit(b[2]) + trans[ div - n -1 ];
					
				} else if (b[0] == 0 && b[1] != 0){
					
					result = result +  " and "+ tens(b[1],b[2]) + trans[ div - n -1 ];
					
				} else if (b[0] != 0 && b[1] == 0 && b[2] != 0){
					
					result = result +  unit(b[0])+" hundred and "+ unit(b[2]) + trans[ div - n - 1 ];
					
				} else if (b[0] != 0 && b[1] == 0 && b[2] == 0){
                	
					result = result +  unit(b[0])+" hundred " + trans[ div - n - 1];
                	
				} else if (b[0] != 0 && b[1] != 0){
				 	
					result = result +  unit(b[0])+" hundred and " + tens(b[1],b[2]) + trans[ div - n - 1 ];
				 	
				}

				++n;

			}

	}

	return result;

}
