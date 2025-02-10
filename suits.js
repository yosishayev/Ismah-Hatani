// after body as created run
$(document).ready(function () {
    var formData = $(this).serialize();
    $.ajax({
        type: 'GET',
        url: 'readsuits.php',
        data: formData,
        success: function (response) {
            console.log(response);
            display_suits(JSON.parse(response));
        },
        error: function (error) {
            console.log("failed");
        }
    });
});
//display suits shop photos and details
function display_suits(data) {
    let j = 0;
    let div = document.createElement("div");
    for (let i = 0; i < data.length / 3; i++) {
        let r_div = document.createElement("div");
        r_div.className = "sup_3div";
        for (let k = 0; k < 3; k++, j++) {
            console.log("j: " + j);
            console.log("k: " + k);
            if (j == data.length)
                break;
            console.log(data[j]);
            let suits_div = document.createElement("div");
            suits_div.className = "sup_div";

            let img = document.createElement("img");
            let a = document.createElement("a");
            a.href = data[j].url;
            a.appendChild(img);
            img.className = "sup_img";

            img.src = "images/suits/" + data[j].full_name + ".jpeg";

            let text_div = document.createElement("div");
            text_div.className = "sup_text";

            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");
            let p4 = document.createElement("p");
            p1.innerText = data[j].full_name;
            p2.innerText = data[j].location;
            p3.innerText = data[j].phone;
            p4.innerText = data[j].mail;
            r_div.appendChild(suits_div);
            suits_div.appendChild(a);
            suits_div.appendChild(text_div);
            text_div.appendChild(p1);
            text_div.appendChild(p2);
            text_div.appendChild(p3);
            text_div.appendChild(p4);
        }
        div.appendChild(r_div);
        if (j == data.length)
            break;

    }
    document.getElementById("main").appendChild(div);
}