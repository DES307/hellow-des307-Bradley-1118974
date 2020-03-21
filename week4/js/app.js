function pokemon() {

    let studentName = document.getElementsByClassName("st");

    studentName[1].style.backgroundColor = 'red';
    studentName[1].style.fontSize = "30px";

    document.getElementById("message").textContent = 'you have selected ' + studentName[1].textContent;
}

// Week 4

function login() {
    //let button = document.getElementById("login");
    let button = document.querySelector("#login")
    let alert = document.querySelector('.alert-success');
    let listGenerate = document.querySelector('.list');

    button.innerHTML = 'Logged In   <i class="far fa-check-circle tick"></i>';
    button.style.color = 'green';

    //alert.style.display = 'contents';

    if (alert.style.contains = 'none') {
        alert.style.display = 'contents';
        console.log('it worked');
    } else {
        console.log('random');
    }

    for (let i = 0; i < 100; i++) {
        listGenerate.innerHTML += '<li class="list-group-item">' + i + '</li>';
    }
}