//removing the 'construction' div from the document
//let removeElement = document.getElementById("construction");
//removeElement.remove();

//let height = document.getElementById("height").value;

// let button = document.querySelector("button");
//   button.addEventListener("click", () => {
//     printPyramid(userInput());
//   });

// TODO #2
// Take in user input for the height

function userInput() {

  let rows = document.getElementById("height").value;
  return rows;
}
//printPyramid(userInput());

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
  document.getElementById("pyramid").innerHTML = "";
    // TODO #1
    // print that pyramid!
  
  let brick = document.getElementById("brickSymbol").value;

  let str = "";
  for(let i=height; i>=1; i--) {
    str = "";
    for(let j=0; j<=i; j++) {
      str += ".";
    }
    for(let j=height; j>=i-1; j--) {
      str += brick;
    }
    //creating the location for the pyramid to go into HTML document
    let para = document.createElement("p");
    let node = document.createTextNode(str);
    para.appendChild(node);
    let element = document.getElementById("pyramid");
    element.appendChild(para);
  }
  return str;
}

// document.getElementById("brickSymbol").addEventListener("change", window.location.reload(false));