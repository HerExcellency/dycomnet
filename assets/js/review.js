
$(document).ready(() => {

    $('#contact-btn').on('click', (e) => {
        e.preventDefault()
        let password = $('#password').val()
        let email = $('#email').val()
        let testimony = $('#message').val()
        let photo = document.querySelector('#img')
        let photoAvail = photo.value
        // console.log(photoAvail)

        $('#img').change(function(){
            var file = this.files[0]
            var filetype = file.type;
            var match = ["image/jpeg", 'image/png', 'image/jpg']
            
            if (!((filetype == match[0]) || (filetype == match[1]) || (filetype == match[2]))){
                return showError("Upload either a jpeg, png or jpg image")
            }
        })
        
        
        password = password.trim()
        photoAvail = photoAvail.trim()
        testimony = testimony.trim()
        email = email.trim()

    

        if (email == "") {
            return showError("Email is required")
        }
        
        //regex to validate email
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        //checking if the email submitted is valid
        if (!re.test(email)) {
            return showError("Please put in a valid email address")
        }
        if (password === "" || password.length < 6 ) {
            return showError("A valid password is required")
        }
        if (testimony === "" || testimony.length < 10) {
            return showError("Testimony must be more than 10 characters")
        }
        
        if (photoAvail === '' || photoAvail.length === 0) {
            return showError('Please select an Image file')
            
        }


        var formData = new FormData()

        formData.append('username', email)
        formData.append('password', password)
        formData.append('testimony', testimony)
        formData.append('photo', photo.files[0])

        let submitBtn = $('#contact-btn')
        var url = 'https://api.reaprite.com/api/web/login/getReview' 
        submitBtn.prop('disabled', true)
        showError("Loading please wait...")
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(data => {
            console.log(data)
            if (data.status === 'error') {
                submitBtn.prop('disabled', false)
                return showError(data.message)
            }
            if (data.status === 'success') {
                showSuccess('Your review has been submitted')
                setTimeout(e => {
                    location.reload()
                }, 5000)
            } else {
                submitBtn.prop('disabled', false)
                return showError('Could not connect')
            }
        }).catch(e => {
            submitBtn.prop('disabled', false)
            return showError('Could not connect to the server')
        })
    })
  

})

// <script src="<?php echo base_url(); ?>/assets/js/review.js"></script>

        