// Create a function Named Triangle which takes 3 parameters, say A, B and C denoting the 3 sides of a triangle.
// Use Callback function, create a method to check if the triangle is Equilateral or not.



function  equitriangle(a,b,c) {
    if(a == b && b == c && a == c){
      console.log("true");
    }
    else{
      console.log("false");
    }
}
    function sides(a,b,c,res){
      res(a,b,c);
    
}

// undefined
// sides(10,10,10,equitriangle);
// VM2884:3 true