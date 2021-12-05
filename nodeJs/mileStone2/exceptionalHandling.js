/**
 * Documenter : E.K.Jithendiran
 * Date       : 03-11-2021
 * 
 * Exception handling
 */
/*
throw statement
Use the throw statement to throw an exception. A throw statement specifies the value to be thrown
throw expression;
*/
/*
You may throw any expression, not just expressions of a specific type. The following code throws several exceptions of varying types:

throw 'Error2';   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw {toString: function() { return "I'm an object!"; } };
*/

try {
    console.log("Executed"); //Executed
    throw 'myException'; // generates an exception
    console.log("not executed");

} catch (error) {

    console.log(error); //myException

}
finally {
    console.log("Always executed");//Always executed
}