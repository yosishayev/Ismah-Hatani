//create the header that display in all the pages.
function header() {
    //create the elements that nessesery for the header. header,nav,ul,li,a,form,div,input,img
        let header = document.createElement("header")

        let nav = document.createElement("nav")

        let ul1 = document.createElement("ul")
        let ul2 = document.createElement("ul")
        let ul3 = document.createElement("ul")
        let ul4 = document.createElement("ul")

        let li1 = document.createElement("li")
        let li2 = document.createElement("li")
        let li3 = document.createElement("li")
        let li4 = document.createElement("li")
        let li5 = document.createElement("li")
        let li6 = document.createElement("li")
        let li7 = document.createElement("li")
        let li8 = document.createElement("li")
        let li9 = document.createElement("li")
        let li10 = document.createElement("li")
        let li11 = document.createElement("li")
        let li12 = document.createElement("li")
        let li13 = document.createElement("li")
        let li14 = document.createElement("li")
        let li15 = document.createElement("li")
        let li16 = document.createElement("li")
        let li17 = document.createElement("li")
        let li18 = document.createElement("li")

        let a1 = document.createElement("a")
        let a2 = document.createElement("a")
        let a3 = document.createElement("a")
        let a4 = document.createElement("a")
        let a5 = document.createElement("a")
        let a6 = document.createElement("a")
        let a7 = document.createElement("a")
        let a8 = document.createElement("a")
        let a9 = document.createElement("a")
        let a10 = document.createElement("a")
        let a11 = document.createElement("a")
        let a12 = document.createElement("a")
        let a13 = document.createElement("a")
        let a14 = document.createElement("a")
        let a15 = document.createElement("a")
    //create form for login to the website and inputs
        let form = document.createElement("form")
        let div = document.createElement("div")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let p3 = document.createElement("p")
        p3.id = "name";
        let input1 = document.createElement("input")
        let input2 = document.createElement("input")
        let input3 = document.createElement("input")
        let input4 = document.createElement("input")

        let a_logo = document.createElement("a")
        let img = document.createElement("img")
//add the values to the elements
        nav.className = "menu";
        nav.appendChild(ul1);
        ul1.appendChild(li1);
        li1.innerText = "ספקים";
        li1.appendChild(ul2);

        a1.href = "photographer.html";
        a1.innerText = "צלמים";
        li2.appendChild(a1);

        a2.href = "Djs.html";
        a2.innerText = "די ג'יי";
        li3.appendChild(a2);

        a3.href = "suits.html";
        a3.innerText = "חליפות חתן";
        li4.appendChild(a3);

        a4.href = "dress.html";
        a4.innerText = "שמלות כלה";
        li5.appendChild(a4);

    a5.href = "Catering.html";
        a5.innerText = "קייטרינג";
        li6.appendChild(a5);

        ul2.appendChild(li2);
        ul2.appendChild(li3);
        ul2.appendChild(li4);
        ul2.appendChild(li5);
        ul2.appendChild(li6);

        ul1.appendChild(li7);
        li7.innerText = "אולמות אירועים";

        li7.appendChild(ul3);
//set the url of places with 2 get url parameters
        a6.href = "places.html?param1=ulam&param2=north";
        a6.innerText = "אולמות אירועים בצפון";
        li8.appendChild(a6);

    a7.href = "places.html?param1=ulam&param2=center";
        a7.innerText = "אולמות אירועים במרכז";
        li9.appendChild(a7);

    a8.href = "places.html?param1=ulam&param2=sharon";
        a8.innerText = "אולמות אירועים בשרון";
        li10.appendChild(a8);

    a9.href = "places.html?param1=ulam&param2=shfela";
        a9.innerText = "אולמות אירועים בשפלה";
        li11.appendChild(a9);

        ul3.appendChild(li8);
        ul3.appendChild(li9);
        ul3.appendChild(li10);
        ul3.appendChild(li11);

        ul1.appendChild(li12);
        li12.innerText = "גני אירועים";

        li12.appendChild(ul4);

    a10.href = "places.html?param1=gan&param2=north";
        a10.innerText = "גני אירועים בצפון";
        li13.appendChild(a10);

    a11.href = "places.html?param1=gan&param2=center";
        a11.innerText = "גני אירועים במרכז";
        li14.appendChild(a11);

    a12.href = "places.html?param1=gan&param2=sharon";
        a12.innerText = "גני אירועים בשרון";
        li15.appendChild(a12);

    a13.href = "places.html?param1=gan&param2=shfela";
        a13.innerText = "גני אירועים בשפלה";
        li16.appendChild(a13);

        ul4.appendChild(li13);
        ul4.appendChild(li14);
        ul4.appendChild(li15);
        ul4.appendChild(li16);

        li17.appendChild(a14);
        li18.appendChild(a15);

        a14.innerText = "פורום";
        a14.href = "forum.html";
        a15.innerText = "הרשמה";
        a15.href = "sign_up.html";

        ul1.appendChild(li17);
        ul1.appendChild(li18);

        nav.appendChild(form);
        form.appendChild(div);
        div.appendChild(p1);
        div.appendChild(p2);

        p1.innerText = "שם משתמש";
        p2.innerText = "סיסמה";
        p1.appendChild(input1);
        p2.appendChild(input2);

        form.appendChild(input3)

        form.id = "form";
        div.id = "login_div";
  

        input1.type = "text";
        input1.name = "user";
        input2.type = "password";
        input2.name = "pass";
        input3.type = "submit";
        input3.value = "התחבר";


        header.appendChild(nav);
        header.appendChild(a_logo);

        a_logo.appendChild(img);
        a_logo.href = "index.html";

        img.style.marginRight = "60px";
        img.src = "logo.png";
        img.className = "logo";

        nav.appendChild(p3);
        nav.appendChild(input4);
        input4.type = "button";
        input4.value = "התנתק";
        input4.id = "out";
        input4.onclick = logout;
        document.body.appendChild(header);
//check if user as logged in.
//if the user is logged in write hello message.
        console.log(localStorage.getItem("username"));
    if (localStorage.getItem("username") != 'null' && localStorage.getItem("username")!=null) {
            console.log("in if header");
            login(localStorage.getItem("fullname"))
        }

}
// after body as created run
$(document).ready(function () {
    header();
    $('#form').submit(function (event) {
        event.preventDefault();

        var formData = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: 'log_in.php',
            data: formData,
            success: function (response) {
                console.log(response);
                if (response != "") {
                    let obj = JSON.parse(response);
                    //save the logged in details in localstorage for futare function that required log in
                    var username = obj.USERNAME;
                    localStorage.setItem('fullname', obj.FIRSTNAME + " " + obj.LASTNAME);
                    localStorage.setItem('username', username);
                    console.log(localStorage.getItem('username'));
                    login(obj.FIRSTNAME + " " + obj.LASTNAME);
                    console.log(obj.isAdmin)
                    //check if the user that logged in is admin and send him to admin page
                    if (obj.isAdmin == 1) {
                        console.log("in 1")
                        window.location.href = "AdminPage.html";
                    }
                }
                else
                    window.alert("שם משתמש או סיסמה אינם נכונים");

            },
            error: function (error) {
                console.log("failed");

            }
        });
    });
});
//function that init the user details whenn login
function login(username) {

    document.getElementById("form").style.display = "none";
    document.getElementById("name").innerText = username + " שלום "
    document.getElementById("out").style.display = "inline"
}
//function that log out from the system,localstorage
function logout() {
    document.getElementById("form").style.display = "inline-block";
    document.getElementById("name").innerText = ""
    document.getElementById("out").style.display = "none"
    localStorage.setItem('username', null);
    localStorage.setItem('fullname', null);
    console.log("in logout");
    console.log(localStorage.getItem('username'));
}