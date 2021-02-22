//creating the location for the pyramid to go into HTML document
var para = document.createElement("p");
var node = document.createTextNode(printPyramid(rows));
para.appendChild(node);
var element = document.getElementById("pyramid");
element.appendChild(para);

//removing the 'construction' div from the document
var removeElement = document.getElementById("construction");
removeElement.remove();

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
    
    // TODO #1
    // print that pyramid!

  var str = "";
  for(var i=rows; i>=1; i--) { 
    for(var j=0; j<=i; j++) {
      str += " ."
    }
    for(var j=rows; j>=i-1; j--) {
      str += "#";
    }
      
    str += "</br>"
  }
  document.write(str);
  return str;
}



