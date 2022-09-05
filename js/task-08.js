const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault()

    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    
    if (mail === "" || password === "") {
        return alert("Please fill in all the fields!");
    };
    const formData = {
        mail, password
    };

    console.log(formData); 
    event.currentTarget.reset();
}