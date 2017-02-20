// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max, lines, perLine) {
	
	if((!max) || (!lines)){ //check for no numbers entered on the screen
		var numbers = document.getElementById('numbers'); 
		numbers.innerHTML = '<p>Please ensure both fields are populated</p>';
		return;
	}

	var newContent = '<br><h3>Lotto Numbers: </h3><table>';
	
	for(var j = 0; j < lines; j++){
		var line = [];
		newContent += '';
		newContent += '<tr><td>Line ';
		newContent += (j+1);
		newContent += ':</td>';
		for(var i = 0; i < perLine; i++){
			var x = Math.ceil(Math.random() * (max - min) + min);
			if(i == 0){
				line.push(x);	
			}else{
				if(line.indexOf(x)>-1){ //check if number already selected.
					i--; 
					/*bring value of i back by 1, so it will repeat this cycle 
					of the iteration again and on this repeat hopefully chose 
					a random number not alreay selected. But if it does by 
					chance select the same random number again or another that 
					exists, then that is ok as it will be caught an rerun this 
					cycle of the iteration again*/
					continue; 
					/*stops the current iteration and goes onto the next iteration 
					of this nested loop, not the outer one*/
				}else{
					line.push(x);
				}
			}
			newContent += '<td>';
			newContent += x;
			newContent += '</td>';
		}
		newContent += '</tr>';
	}
	newContent += '</table>';
	document.getElementById('numbers').innerHTML = newContent;
}
