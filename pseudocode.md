Calculator Pseudocode JS - Joshua Gulliver

Set an empty array named entries,
Set variable named total to equal 0,

Set a string variable named temp to equal  ‘ ‘,
Set a button with an ‘on click’ event and call a function with nothing in parenthesis bracket
	Set a variable named val to equal a this.text function

//Got a number, add to temp
Set an if statement, if it is not equal to a number (!isNan) for the variable val in parenthesis bracket , or the variable val is equal to ‘.’
	set temp with an addition assignment (+=) to add to val
	set $(#answer).val(temp.substring(0,10));



// Got some symbol other than equals, add temp to our entries
   // then add our current symbol and clear temp
Otherwise (else if), if the value is equal to AC
	set entries array to be empty, 
	set temp variable to be empty string, 
            set total variable to “0”


// Clear last entry
If it’s not AC and is “CE” 
	then reset the temp variable to be an empty string

// Change multiply symbol to work with eval
If it’s not CE either but is “x” 
	then push temp to entries array
	then push the * (multiply) value to entries array
            set temp variable to be empty string

// Change divide symbol to work with eval
If it’s not x but is “÷” 
	then push temp to entries array
	then push the divide value to entries array 
	set temp to an empty string

// Got the equals sign, perform calculation
If the value is “=” 
	then push temp to entries
	
create a variable named nt equalling to the first number in entries array
	create for loop, looping through everything in entries array
	create variable called nextNum which should get the next number in entries array [ i+1 ]
	create variable called symbol which equals “entries[ i ]”
	create “else if” statements for each symbol (+, -, /) to calculate each equation

// Swap the '-' symbol so text input handles it correctly
create if statement that, if (nt is less than 0)
	nt equals Math.abs(nt) + ‘-‘;

set $(“#answer”).val(nt);
set entries to an empty array
set temp to an empty string

// Push number
create else statement
	push temp to entries array
            push val to entries array
            set temp to an empty string
	








	
