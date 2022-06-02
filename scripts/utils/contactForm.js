class ContactForm 
{    
    constructor() 
    {
        this.form = document.querySelector("form");
        this.dom = document.getElementById('contactForm');
        this.body = document.body;
        this.openFormBtn = document.getElementById('contact-button');
        this.mainWrapper = document.getElementById('main');
        this.formTitle = document.getElementById('modal-title');
        this.formCloseBtn = document.querySelector('.form-header__close');

        this.firstName = document.getElementById("firstName-input");
        this.lastName = document.getElementById("lastName-input");
        this.email = document.getElementById("email-input");
        this.message = document.getElementById("message-input");

        this.errorFirst = document.getElementById("first_error");
        this.errorLast = document.getElementById("last_error");
        this.errorEmail = document.getElementById("email_error");
        this.errorMessage = document.getElementById("message_error");
        
        this.submitForm = document.getElementById('submit');
    } 

    hide() 
    {
        this.mainWrapper.setAttribute('aria-hidden', 'false')
        this.dom.setAttribute('aria-hidden', 'true')
        this.body.classList.remove('no-scroll')
        this.dom.style.display = 'none';
        this.openFormBtn.focus()
    }

    show()
    {
        this.mainWrapper.setAttribute('aria-hidden', 'true')
        this.dom.setAttribute('aria-hidden', 'false')
        this.body.classList.add('no-scroll')
        this.dom.style.display = 'block';
        this.formCloseBtn.focus()
    }

    // Events
    start()
    {   
        // Launch Contact Form - Event (by button click)
        this.openFormBtn.addEventListener('click', event =>
        {
            this.show();
        }) 
        
        // Close Contact Form - Event - Cross button in form
        this.formCloseBtn.addEventListener('click', event => 
        {
            event.stopPropagation();
            this.hide();
        })

        // Close Contact From with "Escape" - Keydown (Accessibility)
        this.body.addEventListener('keydown', event => 
        {
        if(event.key === 'Escape')
        {
            event.preventDefault();
            this.hide();
        }
        })
    }

    // Fields Validations
    validate() 
    {
        // Set variable error check to false
        let errorCheck = false;

        // FIRST NAME VALIDATION CHECK: 
        if ((this.firstName.value === '') || (this.firstName.value == null)) {
            this.errorFirst.innerHTML = 'Le prénom est un champ obligatoire. Veuillez le renseigner.';
            this.firstName.focus();
            this.firstName.style.border = '2px solid #fe142f';

            errorCheck = true;
        } else if (!this.firstName.value.match(/^[a-zA-Z-\s]+$/)) { // Add a new condition to alert the users of the non-validation of special caracters in his/her first name
            this.errorFirst.innerHTML = 'Les caractères spéciaux tels que +"*ç%&/()=?!_-.,/|<> ne sont pas valides.';
            this.firstName.focus();
            this.firstName.style.border = '2px solid #fe142f';

            errorCheck = true;
        } else if ((firstName.value.length < 2) || (lastName.value.length > 20)) {
            this.errorFirst.innerHTML = "Veuillez entrer au moins 2 caractères valides.";
            this.firstName.focus();
            this.firstName.style.border = '2px solid #fe142f';

            errorCheck = true;
        } else {
            this.errorFirst.innerHTML = '<i class="fas fa-check-circle"></i>';
            this.firstName.style.border = '2px solid rgb(4, 198, 4)';

        }

        // LAST NAME VALIDATION CHECK: 
        if ((this.lastName.value === null) || (this.lastName.value === '')) {
            this.errorLast.innerHTML = 'Le nom est un champ obligatoire. Veuillez le renseigner.';
            lastName.focus();
            lastName.style.border = '2px solid #fe142f';

            errorCheck = true;
        } else if (!this.lastName.value.match(/^[a-zA-Z-\s]+$/)) { // Add a new condition to alert the users of the non-validation of special caracters in his/her last name
            this.errorLast.innerHTML = 'Les caractères spéciaux tels que +"*ç%&/()=?_-.,/|<> ne sont pas valides.';
            this.lastName.focus();
            this.lastName.style.border = '2px solid #fe142f';

            errorCheck = true;
        } else if ((this.lastName.value.length < 2) || (this.lastName.value.length > 20)) {
            this.errorLast.innerHTML = "Veuillez entrer au moins 2 caractères valides.";
            this.lastName.focus();
            this.lastName.style.border = '2px solid #fe142f';

            errorCheck = true;
        } else {
            this.errorLast.innerHTML = '<i class="fas fa-check-circle"></i>';
            this.lastName.style.border = '2px solid rgb(4, 198, 4)';
        }

        // EMAIL ADDRESS VALIDATION CHECK: 
        if ((this.email.value === null) || (this.email.value === '')) {
            this.errorEmail.innerHTML = "L'email est un champ obligatoire. Veuillez le renseigner.";
            this.email.focus();
            this.email.style.border = '2px solid #fe142f';

            errorCheck = true;
        } else if ((!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value))) {
            this.errorEmail.innerHTML = 'Veuillez respecter le format email: exemple@domaine.com.';
            this.email.focus();
            this.email.style.border = '2px solid #fe142f';

            errorCheck = true;
        } else {
            this.errorEmail.innerHTML = '<i class="fas fa-check-circle"></i>';
            this.email.style.border = '2px solid rgb(4, 198, 4)';
        }

        // MESSAGE VALIDATION CHECK:
        if ((this.message.value === null) || (this.message.value === '')) {
            this.errorMessage.innerHTML = 'Ce champ est obligatoire.';
            this.message.focus();
            this.message.style.border = '2px solid #fe142f';

            errorCheck= true;
    
        } else {
            this.errorMessage.innerHTML = '<i class="fas fa-check-circle"></i>';
            this.message.style.border = '2px solid rgb(4, 198, 4)';
        }

        // VALIDATION CHECK : BLOCK SUBMIT & SHOW ERROR MESSAGES
        if (errorCheck === true) {
            return false;
        } else {
            return true;
        }
    }

    // Launch
    submit()
    {
        this.submitForm.addEventListener('click', (e) => 
        {   e.stopPropagation();
            e.preventDefault();
            if(!this.validate()) {
                return false;
            } else {
                this.hide();
            }
        })
    }
}

export default ContactForm;

