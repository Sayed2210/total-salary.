	/*

	1. prompt for the user to enter total salary.
	2. if salary <= 2000 L.E => tax 10%
	3. if salary between 2001 and 5000 tax 15%
	4. if salary between 5001 and 10000 tax 20%
	5. if salary > 10000 tax 25%

	6. output:
		Total Salary: xxxL.E.
		Tax Percent: xx%
		Tax Amount: xxxL.E.
		Net Salary: xxxL.E.			

	*/
    function gettax(){
        if(totSalary<=2000) taxper = 0.1;
        else if (totSalary<=5000) taxper = 0.15;
        else if (totSalary<=1000) taxper = 0.2;
        else taxper = 0.25; 
        document.write(`
            <p>Total Salary: ${totSalary}L.E.</p>
            <p>Tax Percent: ${taxper*100}%</p>
            <p>Tax Amount: ${totSalary*taxper}L.E.</p>
            <p>Net Salary: ${totSalary-(totSalary*taxper)}L.E.</p>
        `);
    }
    var totSalary = Number(prompt('please enter total Salary'));
    var taxper;
    isNaN(totSalary) || totSalary<20 ? alert('invalid salary') : gettax();
    

