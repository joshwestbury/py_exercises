// Write a program to save a web page. Prompt the user for a URL for the web page he wants to save, and for the filename to save to. For example:
//
// $ node save_web_page.js
// URL: https://css-tricks.com/creating-book-cover-using-javascript-p5-js/
// Save to file: cover-book.html
// Saved to file cover-book.html
// As result cover-book.html should have the HTML source code from the entered URL.
//
// Trigger an error by running the program with an invalid URL, ensure the error is properly displayed. Trigger an error by running the program with an output file in a non-existent directory ,such as thisdirdoesntexist/output.txt, ensure that the error is properly displayed.
//

var request = require('request');
var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Input URL: ", function(inputUrl) {
    rl.question("Save to file: ", function(saveFile) {
        rl.close();
        fs.writeFile(saveFile, inputUrl, function (error) {
            if (error) {
                console.error(error.message);
                return;
            }
            console.log('It worked!: ');
        });
    })
})
