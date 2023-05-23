// IMPORTANT!! LocalStorage Data
// Key of array in LS (studnets)
// Array of Students  
//let students;

// Check if there is data in LS
//if (localStorage.students != null) {
  //  students = JSON.parse(localStorage.students)
//} else {
  //  students = [];
//}


//Edit Student JS

class Student {
    constructor( address,phone, landline, email, level, gpa, dep, status) {
        this.address = address;
        this.phone = phone;
        this.landline = landline;
        this.email = email;
        this.level = level;
        this.gpa = gpa;
        this.department = dep;
        this.status = status;
    }
}

const email = document.getElementById("email");
const emailError = email.nextElementSibling;
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;




const address = document.getElementById("address");
const addressError = address.nextElementSibling;


const phone = document.getElementById("phone");
phone.placeholder = 'ex:01113653431';
const phoneError = phone.nextElementSibling;
const phoneRegExp = /^\+?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const landline = document.getElementById("landline");
landline.placeholder = 'ex:201113654331'
const landlineError = landline.nextElementSibling;
const landlineRegExp = /^\+?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;


const level = document.getElementById("level");
const levelError = level.nextElementSibling;
const levelRegExp = /^([1-4]{1})$/


const gpa = document.getElementById("gpa");
const gpaError = gpa.nextElementSibling;
const gpaRegExp = /^([1-4]{1})\.?([0-9]{1})?([0-9]{1})?$/


const status = document.querySelector("input[name='status']:checked");
const statusError = document.getElementById("status-error");


const dep = document.getElementById("department");




// This defines what happens when the user types in the field
email.addEventListener("input", () => {
    const isValidEmail = emailRegExp.test(email.value);

    if (isValidEmail) {
        setNoError(email);
    } else {
        email.className = "invalid";
    }
});



phone.addEventListener("input", () => {
    const isValidPhone = phoneRegExp.test(phone.value);

    if (isValidPhone) {
        setNoError(phone);
    } else {
        phone.className = "invalid";
    }
});

landline.addEventListener("input", () => {

    //landline.value = landline.value.replace(/\D/g, '');

    const isValidLandline = landlineRegExp.test(landline.value);
    if (isValidLandline) {
        setNoError(landline);
    } else {
        landline.className = "invalid";
    }
});



level.addEventListener("input", () => {
    const isValidLevel = levelRegExp.test(level.value);

    if (isValidLevel) {
        setNoError(level);
    } else {
        level.className = "invalid";
    }
});



gpa.addEventListener("input", () => {
    const isValidGpa = gpaRegExp.test(gpa.value);
    const firstDigitNum = Number(gpa.value[0]);
    const afterDotDigitNum = Number(gpa.value[2]);
    const lastDigitNum = Number(gpa.value[3]);


    if (isValidGpa) {
        setNoError(gpa);
    } else {
        gpa.className = "invalid";
    }

    if (firstDigitNum == 4 && (afterDotDigitNum > 0 || lastDigitNum > 0) ) {
        gpa.className = "invalid";
        gpaError.textContent = "GPA can't be greater than 4";
        gpaError.className = "error";
    }

    else if( firstDigitNum<0){
        gpa.className = "invalid";
        gpaError.textContent = "GPA can't be less than 0";
        gpaError.className = "error";
    }


});



address.addEventListener("input", () => {
    if (!isEmpty(address)) {
        setNoError(address);
    }
    // add elseeeeee!!!!!
});


// Save Edit Student Button


const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    var flag = true;
    e.preventDefault();


    if (!isEmpty(address)) {
        flag = false;
    }


    if (!isEmpty(phone)) {
        const isValidPhone = phoneRegExp.test(phone.value);

        if (!isValidPhone) {
            phone.className = "invalid";
            phoneError.textContent = "Not a valid format ex: 01113654225";
            phoneError.className = "error";
        } else {
            setNoError(phone);
        }
    } else {
        flag = false;
    }

    if (!isEmpty(landline)) {
        const isValidLandline = landlineRegExp.test(landline.value);

        if (!isValidLandline) {
            landline.className = "invalid";
            landlineError.textContent = "Not a valid format ex: 0237451264";
            landlineError.className = "error";
        } else {
            setNoError(landline);
        }
    } else {
        flag = false;
    }


    if (!isEmpty(email)) {
        const isValidEmail = emailRegExp.test(email.value);
        if (!isValidEmail) {
            email.className = "invalid";
            emailError.textContent = "I expect an email, darling!";
            emailError.className = "error";
        } else {
            setNoError(email);
        }
    } else {
        flag = false;
    }


    if (!isEmpty(level)) {
        const isValidLevel = levelRegExp.test(level.value);

        if (!isValidLevel) {
            level.className = "invalid";
            levelError.textContent = "Not valid level! From 1 to 4";
            levelError.className = "error";
        } else {
            setNoError(level);
        }

    } else {
        flag = false;
    }


    if (!isEmpty(gpa)) {
        flag = false;
    }




    const statusDiv = document.getElementById('status-radio');
    if (!document.getElementById('active').checked && !document.getElementById('inactive').checked) {
        flag = false;
        statusError.textContent = "Must Select a Status!";
        statusError.className = "error";
        // statusDiv.className = "invalid";
    }
    else {
        statusError.textContent = "";
        statusError.className = "error";
        // statusDiv.className = "valid";
    }




    // validate form before creating 

    if (!flag) {
        return;
    }
    


});







function isEmpty(field) {
    const fieldError = field.nextElementSibling;
    if (field.value.length === 0) {
        field.className = "invalid";
        fieldError.textContent = "Cann't be Empty!";
        fieldError.className = "error";
        return true;
    } else {
        setNoError(field);
    }
}


function validateName(name) {
    const isValid = nameRegExp.test(name.value);
    const nameError = name.nextElementSibling;

    if (!isValid) {
        name.className = "invalid";
        nameError.textContent = "No numbers or special charachters(ex:/,*,&)";
        nameError.className = "error";
        return false;
    } else {
        name.className = "valid";
        nameError.textContent = "";
        nameError.className = "error";
    }
    return true;
}

function setNoError(field) {
    const fieldError = field.nextElementSibling;
    field.className = "valid";
    fieldError.textContent = "";
    fieldError.className = "error";
}