var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"];

var superheroines = ["catwoman", "she-hulk", "mystique"];
superheroines.push("wonderwoman");

const cats = ["Milo","Garfield"]
const moreCats = ["Felix",...cats]

function addElementToBeginningOfArray(array,element){
 return [array,...element]
}
  
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
