const goodColor = "#4C5B6D";
const badColor = "rgb(255, 102, 102)";

function passCheck() {
    let pass1 = document.getElementById('pass');
    let pass2 = document.getElementById('passv');

    if (pass1.length < 8) {
        pass1.style.borderColor = badColor;
    }

    if (pass1.value == pass2.value) {
        pass2.style.borderColor = goodColor;
    } 
    else {
        pass2.style.borderColor = badColor;
    }
}

function emailCheck() {
    let email = document.getElementById("email");

    if (email.value.match(/[\w\d\.]+@\w+\..+/)){
        email.style.borderColor = goodColor;
    } 
    else {
        email.style.borderColor = badColor;
    }
}

function phoneCheck(){
    let phone  = document.getElementById("phone");
    if(phone.value.match(/^(\+\d{9,13})$/)){
        phone.style.borderColor = goodColor;
    }
    else{
        phone.style.borderColor = badColor;
    }
}

function basicValidation() {
    let name = document.forms["regist"]["name"].value;
    let email = document.forms["regist"]["email"].value;
    let password1 = document.forms["regist"]["pass"].value;
    let password2 = document.forms["regist"]["vPass"].value;
    let address = document.forms["regist"]["address"].value;
    let topic = document.forms["regist"]["topic"].value;
    let phone = document.forms["regist"]["phone"].value;
    let gender = document.forms["regist"]["gender"].value;
    
    if (name != "" && email != "" && address != "" && gender != "" && phone != "" && topic != "" && password1 != "" && password2 != "" && phone.length <= 13 && phone.length >= 10) {
        return true;
    } else {
        alert('You must fill all required form!');
        return false;
    }
}