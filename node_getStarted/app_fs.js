//Using fs in node

const fs = require('fs');

//using writeFileSync - creates/ overwrites text
fs.writeFileSync('testFile.txt', 'Hello World from FS ');

//using appendFileSync to append in an existing file
fs.appendFileSync('testFile.txt', 'and from an appended text');
