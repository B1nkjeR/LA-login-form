// Fetching HTML Elements in Variables by ID.
var x = document.getElementById('contact_form');
var createform = document.createElement('form'); // Create New Element Form
createform.setAttribute('action', ''); // Setting Action Attribute on Form
createform.setAttribute('method', 'post'); // Setting Method Attribute on Form
x.appendChild(createform);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

// var namelabel = document.createElement('label'); // Create Label for Name Field
// namelabel.innerHTML = 'Uw e-mail adres: '; // Set Field Name
// createform.appendChild(namelabel);
//
// var inputelement = document.createElement('input'); // Create Input Field for Name
// inputelement.setAttribute('type', 'text');
// inputelement.setAttribute('name', 'dname');
// createform.appendChild(inputelement);

var emaillabel = document.createElement('label'); // Create Label for E-mail Field
emaillabel.innerHTML = 'Uw e-mail adres: ';
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); // Create Input Field for E-mail
emailelement.setAttribute('type', 'text');
emailelement.setAttribute('name', 'demail');
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var messagelabel = document.createElement('label'); // Append Textarea
messagelabel.innerHTML = 'Uw wachtwoord : ';
createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute('name', 'dmessage');
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); // Append Send Button
submitelement.setAttribute('type', 'submit');
submitelement.setAttribute('name', 'dsubmit');
submitelement.setAttribute('value', 'Log In');
createform.appendChild(submitelement);
