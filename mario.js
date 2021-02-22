// TODO #2
// Take in user input for the height

var rows = parseInt(prompt("how tall do you want the pyramid? "));

printPyramid(rows);

/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */

function printPyramid(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");
    
    // TODO #1
    // print that pyramid!

    var str = "";
    for(var i=rows; i>=1; i--) { 
      for(var j=0; j<=i; j++) {
        str += "\xa0"
      }
      for(var j=rows; j>=i-1; j--) {
        str += "#";
      }
        
      str = str + "\n"
    }
    console.log(str);
}



