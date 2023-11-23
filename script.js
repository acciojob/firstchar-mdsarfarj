function firstChar(text) {
  // your code here
	if (text === null || text === '') {
        return '';
    }

    // Iterate through the characters in the string
    for (let i = 0; i < text.length; i++) {
        // Return the first non-space character
        if (text[i] !== ' ') {
            return text[i];
        }
    }

    // If the string contains only spaces, return an empty string
    return '';
	
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
