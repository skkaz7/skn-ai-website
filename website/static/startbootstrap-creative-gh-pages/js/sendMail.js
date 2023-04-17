// validate form and send mail function

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (!name) {
        alert("Name is required.");
        return false;
    }

    if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!phone || !/^\d{9}$/.test(phone)) {
        alert("Please enter a valid 9-digit phone number.");
        return false;
    }

    if (!message) {
        alert("Message is required.");
        return false;
    }

    return true;
}

function sendMail() {
    if (!validateForm()) {
        return;
    }

    const params = {
        from_name: document.getElementById('name').value,
        email_id: document.getElementById('email').value,
        message: document.getElementById('message').value,
        number: document.getElementById('phone').value
    };

    emailjs.send("service_klcpknw", "template_m437o2u", params)
        .then(function () {
            alert("Mail sent successfully!");
        });
}
