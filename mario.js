
printPyramid(5);
// TODO #2
// Take in user input for the height


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

}
let rows = 8;

let str = "";

for(let i=0; i>1; i--){  
  for(let j=0; j<i; j++){
    str += "\xa0\xa0";
  }
  for(let j=0; j>=i; j--){
    str += "#"
  }

  console.log(str);
}