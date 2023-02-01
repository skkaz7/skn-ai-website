    // send mail function
    function sendMail() {
        const params = {
            from_name: document.getElementById('name').value,
            email_id: document.getElementById('email').value,
            message: document.getElementById('message').value
        }
        emailjs.send("service_xkiycpd", "template_m437o2u", params)
    }