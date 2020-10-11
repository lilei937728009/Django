// alert("欢迎登陆");
var xhr;
if (window.XMLHttpRequest){
    xhr = new window.XMLHttpRequest()
}else{
    xhr = new ActivexObject("Microsoft.XMLHTTP")
}

console.log(xhr)