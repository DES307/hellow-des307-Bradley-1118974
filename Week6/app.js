let me = {
    firstName: 'Bradley',
    lastName: 'Hart',
};

function displayName() {
    console.log(`My name is, ${me.firstName} ${me.lastName}`);

    let addSpan = document.getElementById('my-choice');

    addSpan.innerHTML = `<span>My name is, ${me.firstName} ${me.lastName}</span>`;
};

function getRequest() {

    let ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('ajax').innerHTML = this.responseText;
        }
    };
    ajax.open("GET", "https://reqres.in/api/users/2", true);
    ajax.send();
    
}