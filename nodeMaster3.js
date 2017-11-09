// Create code to read text document in terminal using readFileSync


var fs = require('fs');

var notes = fs.readFile(process.argv[2], function(err, data) {
	notes.split('');
	var lineCount = 0
	for (var i in notes) {
		if (notes[i] == '\n') {
			lineCount++;
		}
	}
	console.log("lineCount: " + lineCount)
})
	
