// Create a function Employee, having id, name, basic_Salary as arguments.

// Compute HRA, DA, TA, GS, NS.

// HRA is 30% of Basic Salary.
// DA is 10% of Basic Salary.
// TA is 20% of Basic Salary.

// GS = Basic Salary + HRA + DA + TA;

// TAX DEDUCTION is 10% of GS.

// NS = GS - TAX DEDUCTION.

// NOte : Use Basic Salary in Lexical Scope 
// Print salary slip of the employee.



function  employee(id , name , basic_sal) {
    // to calculate the hra , da , ta

    var hra = 0.3 * basic_sal;
    var da  = 0.1 * basic_sal;
   
    var ta = 0.2 *  basic_sal;
    var gs = basic_sal + hra + da + ta;
    var taxDeduction = 0.1 * gs; 

    var ns = gs - taxDeduction; 

    console.log("Salary Slip");
    console.log( id);
    console.log(name);
    console.log( basic_sal);
    console.log( hra);
    console.log( da);
    console.log( ta);
    console.log( gs);
    console.log( taxDeduction);
    console.log( ns);
}
employee(1, "John", 5000);
employee(2, "karan", 9000);
employee(3, "paul", 18500);
employee(4, "david", 6800);