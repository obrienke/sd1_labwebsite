function odds(){
	var x = parseInt(document.getElementById("total").value);
	var y = parseInt(document.getElementById("picks").value);

	var divisor = 1;
	var dividend = x;

	/*if number of picks is 6, then loop 5 times
	  then on first loop divisor will be 1 * 2,
	  on second loop it will be 2 * 3, on third loop
	  6 * 4, on fourth loop, 24 * 5, and on fitth loop
	  120 * 6 giving 720. 
	  if numbers available to choose from is 47,
	  then on first loop dividend will be 47 * 46, on 
	  second loop it will be (2,162 * 45), on 
	  third loop it will be 97,290 * 44, on
	  fourth loop it will be 4,280,760 * 43, on 
	  fifth loop it will be 184,072,680 * 42,
	  which gives 7,731,052,560 */
	  
	for(var i = 1; i < y; i++){
		divisor = divisor * (i+1);
		dividend = dividend * (x-i);
	}
	
	var result = "<p>Odds of winning lotto are 1 in ";
	result += (dividend/divisor).toLocaleString(); 
	/* continuing with above example, 47 numbers to choose from and pick 6,
	   this would give 7,731,052,560 / 720 = 10,737,573. 
	
	/*toLocaleString() formats number into string. 
	Includes commas (e.g. 3500 becomes 3,500)*/

	result += "</p>";

	document.getElementById("found").innerHTML = result;
}


