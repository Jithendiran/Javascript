/**
 * Doumenter : Jithendiran
 * Date      : 22-10-2021
 */
let str = "Please locate where 'locate' occurs!";
str.indexOf("locate")    // Returns 7

let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("locate")    // Returns 21

//Both methods accept a second parameter as the starting position for the search:

let str = "Please locate where 'locate' occurs!";
str.indexOf("locate", 15)    // Returns 21

//The search() method searches a string for a specified value and returns the position of the match:

let str = "Please locate where 'locate' occurs!";
str.search("locate")     // Returns 7

// regex
//The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g)    // Returns an array [ain,ain,ain]

/**
 * Modifier 	Description
 *   g	        Perform a global match (find all matches rather than stopping after the first match)
 *   i	        Perform case-insensitive matching
 *   m	        Perform multiline matching
 */

/*
 Metacharacter	Description
.	            Find a single character, except newline or line terminator
\w	            Find a word character
\W	            Find a non-word character
\d	            Find a digit
\D	            Find a non-digit character
\s	            Find a whitespace character
\S	            Find a non-whitespace character
\b	            Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
\B	            Find a match, but not at the beginning/end of a word
\0	            Find a NULL character
\n	            Find a new line character
\f	            Find a form feed character
\r	            Find a carriage return character
\t	            Find a tab character
\v	            Find a vertical tab character
\xxx            Find the character specified by an octal number xxx
\xdd            Find the character specified by a hexadecimal number dd
\udddd	        Find the Unicode character specified by a hexadecimal number dddd
 */

/*
Quantifier	Description
n+	            Matches any string that contains at least one n
n*	            Matches any string that contains zero or more occurrences of n
n?	            Matches any string that contains zero or one occurrences of n
n{X}	        Matches any string that contains a sequence of X n's
n{X,Y}	        Matches any string that contains a sequence of X to Y n's
n{X,}	        Matches any string that contains a sequence of at least X n's
n$	            Matches any string with n at the end of it
^n	            Matches any string with n at the beginning of it
?=n	            Matches any string that is followed by a specific string n
?!n	            Matches any string that is not followed by a specific string n
*/

/*
Method	    Description
compile()	    Deprecated in version 1.5. Compiles a regular expression
exec()	        Tests for a match in a string. Returns the first match
test()	        Tests for a match in a string. Returns true or false
toString()	    Returns the string value of the regular expression
*/