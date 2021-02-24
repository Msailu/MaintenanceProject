// const axios = require("axios");
//Code to fill the catagory select box

const income = [
  "Choose catagory..",
  "Maintenance",
  "water",
  "Settle Court Rent",
  "FD Interest Amount",
];
const expenditure = [
  "Choose catagory..",
  "Security Salary",
  "Gardener Salary",
  "Admin Salary",
  "Panjayathu Maintenance",
  "Electricity Board",
  "Infrastructure",
  "Regular Maintenance",
];
let catagoryType = document.getElementById("catagory");
let subCatagory = document.getElementById("subCatagory");
catagoryType.addEventListener("change", function () {
  //This line removes the previosly added options on change event

  document
    .querySelectorAll("#subCatagory option")
    .forEach((option) => option.remove());

  if (catagoryType.value === "I") {
    for (i = 0; i < income.length; i++) {
      let opt = document.createElement("option");
      opt.value = income[i];
      opt.innerHTML = income[i];
      subCatagory.appendChild(opt);
    } // end for loop
  } else {
    //catagoryType.value === 'E'     expenditure
    for (i = 0; i < expenditure.length; i++) {
      let opt = document.createElement("option");
      opt.value = expenditure[i];
      opt.innerHTML = expenditure[i];
      subCatagory.appendChild(opt);
    }
  }
});

$("#submitBtn").on("click", () => {
  console.log("post request");

  let date = $("#date").val();
  let category = $("#catagory").val();
  let subcategory = $("#subCatagory").val();
  let amount = $("#amount").val();

  let data = {
    date,
    category,
    subcategory,
    amount,
  };

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };
  //   alert(JSON.stringify(data, null, 4));
  //   alert(JSON.stringify(axiosConfig, null, 4));

  axios
    .post("http://www.example.org/inc-exp-record", data, axiosConfig)
    .then((res) => console.log(res))
    .catch((err) => {
      if (err.response) {
        alert("response");
        // client received an error response
      } else if (err.request) {
        // client never received a response, or request never left
      } else {
        // anything else
      }
    });
});

// INTERCEPTING REQUESTS & RESPONSES
// axios.interceptors.request.use(
//     config => {
//       console.log(
//         `${config.method.toUpperCase()} request sent to ${
//           config.url
//         } at ${new Date().getTime()}`
//       );

//       return config;
//     },
//     error => {
//       return Promise.reject(error);
//     }
//   );

$(document).ready(function () {
  var date_input = $('input[name="date"]'); //our date input has the name "date"

  date_input.datepicker({
    format: "mm/dd/yyyy",
    todayHighlight: true,
    autoclose: true,
    orientation: "top auto",
  });
});
