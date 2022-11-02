let email = document.getElementById('email');
let massage = document.getElementById('errmass');
let submit = document.getElementById('sub');


document.forms[0].onsubmit = function(e)
{
    emailValid = false;
    if(email.value ===""){
        massage.classList.remove('hide')
        email.style.border = "1px solid red"
        e.preventDefault()
    }
}