console.log("欢迎登陆");

var xhr;

if (window.XMLHttpRequest) {
    xhr = new window.XMLHttpRequest()
} else {
    xhr = new ActivexObject("Microsoft.XMLHTTP")
}

var p1 = document.getElementById("p1");
var b1 = document.getElementById("b1");
var login_account = document.querySelector(".account");
var login_psw = document.querySelector(".password");

b1.onclick = function () {
    var v_account = login_account.value;
    var v_psw = login_psw.value;
    xhr.open("post", "http://localhost:8000/login", false)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xhr.send(+"&" + "password=" + v_psw)
    p1.innerText = xhr.responseText
}

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log("请求成功")
    }
}


