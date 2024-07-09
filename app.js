let reset = document.querySelector(".reset");
let inputs = document.querySelectorAll("input");
let firstName = document.querySelector(".firstName");
let lastName = document.querySelector(".lastName");
let birthday = document.querySelector(".birthday");
let age = document.querySelector(".age");
let gender = document.querySelector(".gender")
let email = document.querySelector("#email");
let positions = document.getElementsByName("dev");
let lang = document.querySelectorAll(".lang");
let password = document.querySelector(".password");
let confirm = document.querySelector(".confirm");
let form = document.querySelector("form");

function resetFunc() {
    inputs.forEach(element => {
        element.value = "";
    });
}

form.onsubmit = function(event){
    event.preventDefault();

let user = {
    firstname: "",
    lastname: "",
    birthdate:"",
    age:"",
    gender:"",
    email:"",
    positions:"",
    languages:[],
}

    user.firstname = firstName.value;
    user.lastname = lastName.value;
    user.birthdate = birthday.value;
    user.age = age.value;
    user.gender = gender.value;
    user.email = email.value;

    positions.forEach(e => {
        if (e.checked) {
            user.positions = e.value;
        }
    });
    lang.forEach(e => {
        if (e.checked) {
            user.languages.push(e.value);
        }
    });

    if(password.value==confirm.value){
        console.log(user);
    }else{
        alert("wrong password!")
    }

}