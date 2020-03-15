function clearErrors()
{
	var errorFields = document.getElementsByClassName('error');
	
	for (var i = 0; i < errorFields.length; i++) { // we go through all the error fields
       errorFields[i].innerHTML = ""; // we empty the error fields
	}
}

function resetForm()
{
	clearErrors();
	document.getElementById('signForm').reset(); // we reset the form
}

function validate()
{
    console.log("begin Validation")
	clearErrors();
	var minLength = 8; 
	// assign all selectors to variables so we write less
	var firstName = document.getElementById('inputFName');
	var surname = document.getElementById('inputSName');
	var email = document.getElementById('inputEmail');
	var password = document.getElementById('inputPassword');
	var password2 = document.getElementById('inputPassword2');
	
	if(!isPopulated(firstName))
	{
		addError(firstName, "First name is required");
	}
	if(!isPopulated(surname))
	{
		addError(surname, "Surname is required");
	}

	if(!isPopulated(email))
	{
		addError(email, "Email is required");
	}
	
	if(!isPopulated(password))
	{
		addError(password, "Password is required");
	}
	else
	{
		if(!isMinLength(password, minLength))
		{
			addError(password, "Must be at least " + minLength + " characters long");
		}
	}
	
	if(!isPopulated(password2))
	{
		addError(password2, "Confirm Password is required");
	}
	
	
	return false;
	
}

function isPopulated(field)
{
	return field.value !== "";
}

 function addError(field, err)
 {
 	// we make a convention that every error container has the same id as our field + Err
	document.getElementById(field.id + "Err").innerHTML = err;
 }
 
 function isMinLength(field, length)
{
   return field.value.length >= length;
}