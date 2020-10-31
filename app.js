//step 1 i defined the variables below
let fname, hour, salary, xtrahour, overtime, totalSalary


// step 2 i added an event listener to the submit button
document.querySelector('.submit').addEventListener('click', function(){
    // step 3 stored the input data for name inside a variable
    fname =  document.querySelector('.names').value


    // no of hours
// step 4 i stored theinput data fr hur inside a variable and made sure its a number.
    hour =  document.querySelector('.hours').value
    if (isNaN(hour)) {
        // step 5 i made sure t return an errr message if the variable is not a number
      hour = 'ERRORR!!! Enter A Number'
console.log('enter number');
// step 5 i made sure hurs wuld not exceed four hence an error message
    } else if (hour > 4) {
        hour = 'ERR0R!!! '
        console.log('number of hours can not be more than 4');

        //step 6 the calculation of hour and salary
    } else {
        hour  = (hour*1000)
        salary = hour*30
        status = true
        console.log(salary);}

// overtime calculation

// step 7 similar to the above step
    xtrahour =  document.querySelector('.extra-time').value
    if (isNaN(xtrahour)) {
        xtrahour = 'ERRORR!!! '
console.log('enter a number');
    } else if (xtrahour > 19) {
xtrahour= 'ERROR!!! '
    } else{
        xtrahour  = (xtrahour*200)
        overtime = xtrahour*30
        console.log(overtime);
    
    }
// step 8 i added both the salary and over time together
    totalSalary = (salary + overtime)

    console.log(totalSalary);
// step 9 this is where i manipulated the DOM
    document.querySelector('.overtime').textContent = ` ${fname}Your Total extra hour payment Due For The Month Is ${overtime} Naira`
    document.querySelector('.salary').textContent = ` ${fname}Your Total Salary Due For The Month Is ${salary} Naira`
    document.querySelector('.totalpayment').textContent = ` ${fname}Your payment Due For The Month Is ${totalSalary} Naira`

})



