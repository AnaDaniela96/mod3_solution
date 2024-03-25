// Array of names
var names = ["John", "Jane", "Joe", "Alice", "Bob"];

// Loop over the array of names
for (var i = 0; i < names.length; i++) {
    // Get the current name
    var name = names[i];
    
    // Check if the name starts with 'j' or 'J'
    if (name.charAt(0) === 'j' || name.charAt(0) === 'J') {
        // If yes, print "Goodbye JSomeName"
        console.log("Goodbye " + name);
    } else {
        // If no, print "Hello SomeName"
        console.log("Hello " + name);
    }
}
