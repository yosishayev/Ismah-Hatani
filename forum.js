// after body as created run
$(document).ready(function () {
    //check if the user is login before post a new message in the forum
    $('#new_message_form').submit(function (event) {
        event.preventDefault();
        let username = localStorage.getItem('username');
        if (localStorage.getItem("username") == 'null' || localStorage.getItem("username")==null ) {
            document.getElementById("error").innerText = "עליך להתחבר כדי לפרסם הודעה בפורום";
            document.getElementById("error").style.color = "red";
            return;
        }
        document.getElementById("forum_user").value = username;
        var formData = $(this).serialize();
        //post a message in the forum
        $.ajax({
            type: 'POST',
            url: 'new_message.php',
            data: formData,
            success: function (response) {
                document.getElementById("header").value = "";
                document.getElementById("message").value = "";
                document.getElementById("error").innerText = "ההודעה נשלחה בהצלחה";
                document.getElementById("error").style.color = "green";
            },
            error: function (error) {
                console.log("failed");
            }
        });
    });
    var formData = $(this).serialize();
    //display the mesages in the forum.
    $.ajax({
        type: 'POST',
        url: 'get_messages.php',
        data: formData,
        success: function (response) {
            let obj = JSON.parse(response);
            console.log(obj);
            let div = document.getElementById("forum_messages");
            for (let msg of obj) {
                let msg_con = document.createElement("div");
                msg_con.className = "message-container";
                div.appendChild(msg_con);
                let div_user = document.createElement("div");
                div_user.className = "user-name";
                let h2 = document.createElement("h2");
                h2.innerText = msg.username;
                div_user.appendChild(h2);
                msg_con.appendChild(div_user);
                let msg_det = document.createElement("div");
                let h3 = document.createElement("h3");
                let a = document.createElement("a");
                a.href = "#";
                let p = document.createElement("p");
                p.innerText = msg.message;
                p.className = "message-content";
                h3.innerText = msg.header;
                h3.className = "message-title";
                a.appendChild(h3);
                msg_det.className = "message-details";
                msg_det.appendChild(a);
                msg_det.appendChild(p);
                msg_con.appendChild(msg_det);
            }
        },
        error: function (error) {
            console.log("failed");
        }
    });
});