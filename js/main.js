//Code to fill the catagory select box 

//let status=(form.querySelector('select[name="status"]')).value;
const income= ['Maintenance','water','Settle Court Rent','FD Interest Amount'];
const expenditure=['Security Salary','Gardener Salary','Admin Salary','Panjayathu Maintenance','Electricity Board','Infrastructure','Regular Maintenance'];
let revenueType=document.getElementById('revenueType');
let catagory = document.getElementById('catagory');
revenueType.addEventListener('change', function() {
    //This line removes the previosly added options on change event
    document.querySelectorAll('#catagory option').forEach(option => option.remove());
   
    if (revenueType.value === 'I') {
        
        for(i=0;i<income.length;i++){
            let opt = document.createElement('option');
            opt.value = income[i];
            opt.innerHTML = income[i];
            catagory.appendChild(opt);    
        }// end for loop
        
     }
     else { //revenueType.value === 'E'     expenditure
        for(i=0;i<expenditure.length;i++){
            let opt = document.createElement('option');
            opt.value = expenditure[i];
            opt.innerHTML = expenditure[i];
            catagory.appendChild(opt); 
        }          
     }
})

$(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
  
    date_input.datepicker({
        format: 'mm/dd/yyyy',
      
        todayHighlight: true,
        autoclose: true,
        orientation:  "top auto"

    })
});

 