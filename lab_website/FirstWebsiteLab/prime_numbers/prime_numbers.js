function prime_number(a){
	if(!a){ //check for no number entered on the screen
		alert("Please enter a number in the field provided in order to proceed.");
		return;
	}
	
	var b = parseInt(a) - 1;
	var isPrime = true;
	for(var i = b; i > 1; i--){
		if((a%i) === 0){
		isPrime = false;
		break;
	  }
	}

	alert("Prime number - true/false: "+isPrime);
}

/* For loop: You already know a number is divisable 
   by itself and 1, so iterate for the values between
   1 and itself - That is why you have b as a starting
   point - If number entered is 11, then start from 10
   for your calculation, and loop till you reach 2,
   i > 1. If any produce a remainder of 0 in the 
   calculation you exit the loop, as it is not a 
   prime number */

