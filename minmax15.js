
// 15. Write a function to find the maximum and minimum elements in an array.
// arr = [10,3,15,-1,9,6]


function minmax(array){
    var max = array [0];
    var min = array [0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
          min = array[i];
        }
    
        if (array[i] > max) {
          max = array[i];
        }
      }
    
      return { min, max }; // Return an object with the minimum and maximum values
    
        
}
const array = [10,3,15,-1,9,6];
const { min, max } = minmax(array);
console.log(max,min);
