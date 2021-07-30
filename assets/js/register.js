    
    $(document).ready(() => {
    
    
        $('.signupbtn').on('click', (e) => {
            
            e.preventDefault()
            let firstname = document.querySelector('.firstname') 
            let lastname = document.querySelector('.lastname')
            let email = document.querySelector('.email')
            let mobile = document.querySelector('.mobile')
            let password = document.querySelector('.password')
            let agree = document.querySelector('.agree')
            
            let referral = document.querySelector('.referral')
            // let photoAvail = photo.value
    
      
            firstname = firstname && firstname.value.trim()
            lastname = lastname && lastname.value.trim()
            email = email && email.value.trim()
            mobile = mobile && mobile.value.trim()
            referral = referral && referral.value.trim()
            password = password && password.value.trim()
            agree = agree.checked
            if (!firstname || firstname === '' || firstname.length < 2) {

                return showError("A valid firstname is required")
                // return console.log("error", "A valid firstname is required")
            }
            if (!lastname || lastname === '' || lastname.length < 2) {
            
                return showError("A valid Lastname is required")
                // return console.log("error", "A valid lastname is required")
            }
            if (!email || email === '') {

                return showError("A valid email is required")
                // return console.log("error", "A valid email is required")
            }
            //regex to validate email
            var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            //checking if the email submitted is valid
            if (!re.test(email)) {
                return showError("Please put in a valid email address")
            }
            if (!mobile || mobile === '') {
                    return showError("Number feild is empty")
                    // return console.log("error", "A valid mobile is required")
                }
            if (mobile.length < 11 || mobile.length > 13) {
                    return showError("A valid number is needed")
                    // return console.log("error", "A valid mobile is required")
                }
            if (!password || password === '' || password.length < 6) {
                return showError("Your password must be longer than 6")

                // return console.log("error", "A valid password is required")
                // return console.log("error", "A valid password is required")
            }
            if (!agree) {
                return showError("You must agree to thr terms and conditions")
                // return console.log("error", "Please agree to our terms and conditions")
            }

            let formData = new FormData()
            formData.append('firstname', firstname)
            formData.append('lastname', lastname)
            formData.append('email', email)
            formData.append('mobile', mobile)
            formData.append('referer', referral)
            formData.append('password', password)
            // let sendData = {
            //     url: Apphelpers.url.Register,
            //     method: 'POST',
            //     body: formData
            // }
            // https://api.reaprite.com/api/web/register

            // let submitBtn = $('#contact-btn')
            let submitBtn = document.querySelector('.signupbtn') 

            var url = 'https://api.reaprite.com/api/web/register' 
            // submitBtn.prop('disabled', true)
            showError("Loading please wait...")
            fetch(url, {
                method: 'POST',
                body: formData
            }).then(res => res.json()).then(data => {
                console.log(data)
                if (data.status === 'error') {
                    // submitBtn.prop('disabled', false)
                    return showError(data.message)
                }
                if (data.status === 'success') {
                    showSuccess('Your registration is succesfull!')
                    setTimeout(e => {
                        location.reload()
                    }, 5000)
                } else {
                    // submitBtn.prop('disabled', false)
                    return showError('Could not connect')
                }
            }).catch(e => {
                // submitBtn.prop('disabled', false)
                return showError('Could not connect to the server')
            })

})
    })