/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

function calculateCarpet() {
  // 👇 Write your code here 👇
 
    console.log("click");

  // Get the width of Room 1 and assign to a variable
  let room1Width = getRoomWidth(1);
  
  // Get the length of Room 1 and assign to a variable
  let room1Length = getRoomLength(1);

  // Get the width of Room 2 and assign to a variable
  let room2Width = getRoomWidth(2);
  
  // Get the length of Room 2 and assign to a variable
  let room2Length = getRoomLength(2);

  // Calculate the area of Room 1
  let room1Area = room1Width * room1Length;

  // Calculate the area of Room 2
  let room2Area = room2Width * room2Length;

  // Add the areas together and assign the result to a variable 
  let totalArea = room1Area + room2Area;

  // Multiply the total by 1.1 and assign to a variable
  let carpetTotal = totalArea * 1.1;

  // Show the result using showResult()
  showResult(carpetTotal);

  
}
calculateCarpetTest();

/* LEVEL UP! (optional) 
	1. Function explanations:

  calculateCarpet() is a function that calculates the total cost of a carpet installation.


	2. Custom styles added: 

  To customize my page I began by going into index.html and changing the header image to that of an actual cowboy rug. I then went into CSS and changed the background colors for all sections to match the aesthetic of the cowboy rug. I went on to add a border radius to all sections to make it feel like the rounded finish of a rug.


*/
