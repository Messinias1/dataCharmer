var fs = require('fs');

var readEmployeeSalaries = fs.readFile('employeeSalary.txt', 'utf8', function(err, data) {
    if (err) throw (err);

    var array_salary = data.split();
    console.log(array_salary);
    
    var arr = array_salary;

var newArr = [];
while(arr.length) newArr.push(arr.splice(0,1));

console.log(newArr);

    for (var i = 0; i < newArr.length; i++) {
        console.log('The data on line', i + 1, "is:", newArr[i].pop());
    }
});