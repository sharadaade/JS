
// First, the code in try {...} is executed.

// If there were no errors, then catch (err) is ignored: the execution reaches the end of try and goes on, skipping catch.

// If an error occurs, then the try execution is stopped, and control flows to the beginning of catch (err). The err variable (we can use any name for it) will contain an error object with details about what happened.

// Syntax:
try {
  // code...
} catch (err) {
  // error handling
}

//An errorless example:
try {
  console.log('Start of try runs');  // (1) <--
  // ...no errors here
  console.log('End of try runs');   // (2) <--
} catch (err) {
  console.log('Catch is ignored, because there are no errors'); // (3)
}


// An example with an error: 
try {
  console.log('Start of try runs');  // (1) <--
  lalala; // error, variable is not defined!
  alert('End of try (never reached)');  // (2)
} catch (err) {
  console.log(`Error has occurred!`); // (3) <--
}



// Error object
// name
//     Error name. For instance, for an undefined variable that’s "ReferenceError".
// message
//     Textual message about error details.

// There are other non-standard properties available in most environments. One of most widely used and supported is:

// stack
//     Current call stack: a string with information about the sequence of nested calls that led to the error. Used for debugging purposes.

try {
  lalala; // error, variable is not defined!
} catch (err) {
  console.log(err.name); // ReferenceError
  console.log(err.message); // lalala is not defined
  console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)

  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  console.log(err); // ReferenceError: lalala is not defined
}



// try…catch…finally

// Wait, that’s not all.

// The try...catch construct may have one more code clause: finally.

// If it exists, it runs in all cases:

//     after try, if there were no errors,
//     after catch, if there were errors.


The extended syntax looks like this:

try {
//    ... try to execute the code ...
} catch (err) {
//    ... handle errors ...
} finally {
//    ... execute always ...
}

// Try running this code:

try {
  alert( 'try' );
  if (confirm('Make an error?')) BAD_CODE();
} catch (err) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}