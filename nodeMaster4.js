
// create code to call notes.txt file but using asynchronous method fs.readFile instead of fs.readFileSync method. 



var fs = require('fs');
 
var notes = fs.readFilySync(progres.argv[2], 'utf-8')

notes.split('');
var lineCount = 0;
for (var i in notes) {
	if (notes[i] == '\n') {
		lineCount++;
	}
}

console.log("LineCount: " + lineCount)