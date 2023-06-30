// Given two strings, return true if they are anagrams of one another

// For example: Mary is an anagram of Army





function anagram( x, y){
    if( x.length != y.length){ // checking the length of the string 
        return false;
    }

    //  converting string to array and sorting it after splitting it and then again join the sorted characters into string
    var a= x.split('').sort().join('');
     var b= y.split('').sort().join('');
    var res  = (a == b ); 
    return res;
}

console.log(anagram('mary','army'));