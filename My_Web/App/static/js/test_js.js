
console.log("欢迎登陆");
var xhr;
if (window.XMLHttpRequest){
    xhr = new window.XMLHttpRequest()
}else{
    xhr = new ActivexObject("Microsoft.XMLHTTP")
}
xhr.open("get","http://localhost:8000/",true)
xhr.send()
xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
        console.log("请求成功")
    }
    var p1 = document.getElementById("p1");
    var b1 = document.getElementById("b1")
    b1.onclick = function(){
        p1.innerText = xhr.responseText
    }

}

//