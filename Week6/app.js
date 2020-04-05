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

    
}