// after body as created run
$(document).ready(function () {
$('#register').submit(function (event) {
    event.preventDefault();
//call register php to add user details to database
    var formData = $(this).serialize();
    $.ajax({
        type: 'POST',
        url: 'Register.php',
        data: formData,
        success: function (response) {
            console.log(response);
            response = response.trim();
            //check if the register failed because mail/username already exist and set message
            if (response == "fmail") {
                document.getElementById("err_mail").style.visibility = "visible";
                document.getElementById("err_user").style.visibility = "hidden";
            }
            else if (response == "fusername") {
                document.getElementById("err_user").style.visibility = "visible";
                document.getElementById("err_mail").style.visibility = "hidden";
            }
            else if (response == "fusernamefmail") {
                document.getElementById("err_user").style.visibility = "visible"
                document.getElementById("err_mail").style.visibility = "visible"
            }
            else {
                
                document.getElementById("err_mail").style.visibility = "hidden";
                document.getElementById("err_user").style.visibility = "hidden";
                window.alert("נרשמת בהצלחה");
                document.getElementById("username").value = "";
                document.getElementById("firstname").value = "";
                document.getElementById("lastname").value = "";
                document.getElementById("email").value = "";
                document.getElementById("password").value = "";
            }
        },
        error: function (error) {
            console.log("err");
            console.log(error);
        }
    });
});
});