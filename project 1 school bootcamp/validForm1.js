// const form = document.getElementById("form");
// const closeButton = document.getElementById("formicon");


//form inputs for validation

let formFirstName = document.getElementById("firstName")
let formLastName = document.getElementById("lastName")
let formMail = document.getElementById("formMailInput")
let formPass1 = document.getElementById("password")   //formPassInput1
let formPass2 = document.getElementById("passwordConfirm")   //formPassInput2


// function formClose() {
//     form.style.display = "none";

// }

// closeButton.addEventListener("click", formClose)



const submit = document.getElementById("formSubmit").addEventListener("click", function myFunction(event) {
    let userValue1 = formFirstName.value
    let userValue2 = formLastName.value
    let mailValue = formMail.value
    let passValue1 = formPass1.value
    let passLegth = passValue1.length
    let passValue2 = formPass2.value
    if (userValue1 == "") {
        event.preventDefault()
        alert("Please write your first name")
        return false;
    }
    else if (userValue2 == "") {
        event.preventDefault()
        alert("Please write your last name")
        return false;
    }
    else if (mailValue == "") {
        event.preventDefault()
        alert("Please write your email")
        return false;
    }
    else if (passValue1 == "") {
        event.preventDefault()
        alert("Please write a valid password")
    }
    else if (passLegth < 12) {
        event.preventDefault(
            alert("You have to write 12 char min")
        )
    }
    else if (passValue2 !== passValue1) {
        event.preventDefault()
        alert("Your password dont match. Please retype your password")
    }
}
if(document.getElementById('piano').checked) {

  }else if(document.getElementById('guitar').checked) {
    
  }else if(document.getElementById('violin').checked) {
    
  }else if(document.getElementById('drums').checked) {
    
  }else if(document.getElementById('vocals').checked) {
    
  }else(document.getElementById('').checked){
      event.preventDefault()
      alert("Please choose the instrument you want to learn")
  }
)