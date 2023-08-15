console.log("Hello World");

// validation script here

const patterns = {
	phone: /^\d{11}$/, // must be 11 characters long and digits only
	password: /^[\w@-]{8,20}$/i,// alphanumeric @,_ and - are allowed, case insensitive, 8 to 20 chars long
	email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

const inputs = document.querySelectorAll('input');
const passwordfield = document.getElementById('password');
// validation function
//const validate = (field,regex) => field.className  = regex.test(field.value) ? 'valid' : 'invalid'; 
function validate(field,regex){
    if (field.id === "confirmpwd") {
        if (confirmpwd.value === passwordfield.value ){
            console.log("passwords match");
            return confirmpwd.className = "valid";
        } else if (confirmpwd.value === ""){
            return
        } else {
            confirmpwd.className = "error";
        }
    }
	if (regex.test(field.value)){
		field.className = 'valid';
	} else {
		field.className = 'error';
	}
} 

inputs.forEach((input) => {
	input.addEventListener('keyup', (e) =>{
		//console.log(e.target.attributes.name.value);
		validate(e.target,patterns[e.target.attributes.name.value])
	});
});
