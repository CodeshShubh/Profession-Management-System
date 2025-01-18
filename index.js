document.addEventListener("DOMContentLoaded", () => {
  let employeesArr = [];

  let name = document.getElementById("fullname");
  let profession = document.getElementById("profession");
  let age = document.getElementById("age");
  let addBtn = document.getElementById("add_user");
  let employee_list = document.querySelector(".employee_list"); // Move this outside the click event
  let totalEmployees = document.getElementById("total_employe"); // Added for total employee updates
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      name.value.trim() !== "" ||
      profession.value.trim() !== "" ||
      age.value.trim() !== ""
    ) {
      let fullName = name.value;
      let empProfession = profession.value;
      let userAge = age.value;

      console.log(`${fullName} ${empProfession} ${userAge}`);
      const employeeObj = {
        id: employeesArr.length + 1,
        fullName: fullName.trim(),
        empProfession: empProfession.trim(),
        userAge: userAge.trim(),
      };

      employeesArr.push(employeeObj);

      let p = document.getElementById("warning");
      p.style.color = "green";
      p.textContent = `Success : Employees Added`;

    //   let total_employe = document.getElementById("total_employe");
    totalEmployees.textContent = `You have ${employeesArr.length} Employees`;

    //   let employee_list = document.querySelector(".employee_list");

      employee_list.innerHTML += `
              <div id="append_data" data-id="${employeeObj.id}">
                 <div class="data">
              <p>${employeeObj.id}</P>
              <p>Name : ${employeeObj.fullName}</P>
              <p>Profession : ${employeeObj.empProfession}</P>
              <p>Age : ${employeeObj.userAge}</P>
                 </div>
                 <button class="delete-btn"  data-id="${employeeObj.id}" >Delete User</button>
              </div>
            `;      

      // empty input section after click
      name.value = "";
      profession.value = "";
      age.value = "";
    } else {
      let p = document.getElementById("warning");
      p.style.color = "red";
      p.textContent = `Error : Please Make sure All the fields are filled before adding in an
      employee !`;
    }
  });


  employee_list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const id = parseInt(e.target.getAttribute("data-id"));

      // Remove the employee from the array
      employeesArr = employeesArr.filter((emp) => emp.id !== id);

      // Update the displayed list
      const employeeDiv = document.querySelector(`#append_data[data-id="${id}"]`);
      if (employeeDiv) {
        employeeDiv.remove();
      }

      // Update the employee count
      totalEmployees.textContent = `You have ${employeesArr.length} Employees.`;
      if (employeesArr.length === 0) {
        totalEmployees.textContent = "You have 0 Employees.";
      }
    }
  });


});
