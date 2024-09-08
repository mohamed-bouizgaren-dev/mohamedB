function sendMail(){
    var parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }    

    emailjs.send("service_asd96eg","template_nxtlifx",parms).then(alert("Email Sent !"));
}
