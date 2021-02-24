// axios.defaults.headers.common['X-Auth-Token'] =
//    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

//Constants for Category and subCatagory
const income = ['Choose catagory..', 'Maintenance', 'water', 'Settle Court Rent', 'FD Interest Amount'];
const expenditure = ['Choose catagory..', 'Security Salary', 'Gardener Salary', 'Admin Salary', 'Panjayathu Maintenance', 'Electricity Board', 'Infrastructure', 'Regular Maintenance'];

//On Click of submit button the post request is sent using Axios
$("#submitBtn").on("click", () => {

  console.log('post request');

  //Code added to get multiple records
  let totalRows = $('.table-data tr').length;
  console.log("totalRows....");
  console.log(totalRows);
  let tableDataIntoArray = [];
  for (i = 0; i < totalRows; i++) {
    //let rowIndex=($('.table-data tr').index());
    //console.log(rowIndex);
    let date = $(`#date_${i}`).val();
    let category = $(`#catagory_${i}`).val();
    let subcategory = $(`#subCatagory_${i}`).val();
    let details = $(`#details_${i}`).val();
    let amount = $(`#amount_${i}`).val();
    console.log(date);
    let data = {
      date,
      category,
      subcategory,
      details,
      amount
    };
    console.log(data);
    tableDataIntoArray.push(data);
  }
  console.log(tableDataIntoArray);
  console.log('convert to jSON.....');
  console.log(JSON.stringify(tableDataIntoArray));
  let data = JSON.stringify(tableDataIntoArray);
  //End here


  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }
  };


  axios
    .post('http://www.example.org/inc-exp-record', data, axiosConfig)
    .then(res => console.log(res))
    .catch(err => console.error(req));


}); // Ends of onClick event submit button 


//Jquet code for the datepicker
$(document).ready(function () {
  $(".table-data").append(renderNewRow(0));
  let date_input = $('input[name="date_0"]'); //our date input has the name "date"
  renderDate(date_input);
  fillsubCatagorySelectBox(0);

});

//add row code on 22Feb2021

$(document).on('click', ".add-new", function (e) {
  // alert( $('.table-data tr').index());
  let row_index = $('.table-data tr').length;
  let newRow = renderNewRow(row_index);
  $(".table-data").append(newRow);
  let date_input = $(`input[name="date_${row_index}"]`);
  renderDate(date_input);
  fillsubCatagorySelectBox(row_index);
});

// Delete row on delete button click
$(document).on("click", ".delete", function () {
  // alert($(this).parents("tr").index()) ;
  $(this).parents("tr").remove();
  $(".add-new").removeAttr("disabled");
});

function renderNewRow(index) {
  let newRow =
    `<tr id="row${index}">
        <td>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-calendar "></i></span>
            </div>
            <input class="form-control datepick" autocomplete="off" id="date_${index}" name="date_${index}" placeholder="MM/DD/YYYY" type="text" />
          </div>
        </td>
        <td>
          <select id="catagory_${index}" name="catagoryType_${index}" class="form-control">
          <option selected>Choose Catagory..</option>
          <option value="I">Income</option>
          <option value="E">Expenditure</option>
        </select>
      </td>
        <td>
          <select id="subCatagory_${index}" name="subCatagoryName_${index}"  class="form-control">
            <option selected>Choose SubCatagory..</option>
          </select>
        </td>
        <td><input type="text" class="form-control" name ="details_${index}" id="details_${index}" autocomplete="off" placeholder="Details Of Income here"></td>
        <td><input type="text" class="form-control" id="amount_${index}" autocomplete="off" placeholder="Amount here"></td>
        <td> 
       
          <i class="fas fa-trash delete" id="trash_${index}"></i>
        </td>
      </tr>`

  return newRow;
}

function renderDate(date_input) {
  date_input.datepicker({
    format: 'mm/dd/yyyy',
    todayHighlight: true,
    autoclose: true,
    orientation: "top auto"

  });
}


//Code to fill the subcatagory select box 
function fillsubCatagorySelectBox(row_index) {
  let catagoryType = document.getElementById('catagory_' + row_index);
  let subCatagory = document.getElementById('subCatagory_' + row_index);
  catagoryType.addEventListener('change', function () {
    //This line removes the previosly added options on change event

    // document.querySelectorAll('#subCatagory option').forEach(option => option.remove());
    document.querySelectorAll(`#subCatagory_${row_index} option`).forEach(option => option.remove());

    if (catagoryType.value === 'I') {

      for (i = 0; i < income.length; i++) {
        let opt = document.createElement('option');
        opt.value = income[i];
        opt.innerHTML = income[i];
        subCatagory.appendChild(opt);
      } // end for loop

    } else { //catagoryType.value === 'E'     expenditure
      for (i = 0; i < expenditure.length; i++) {
        let opt = document.createElement('option');
        opt.value = expenditure[i];
        opt.innerHTML = expenditure[i];
        subCatagory.appendChild(opt);
      }
    }
  });
}
//Code to fill SubCatagory Select Box Ends here