// بسم الله الرحمن الرحيم
//Register
var email=document.querySelector("#email");
var username=document.querySelector("#username");
var password=document.querySelector("#password");
var Sign_up=document.querySelector("#sign_up");
Sign_up.addEventListener("click",function(e){
    e.preventDefault();  //بتوقف التحميل لانها  حاجة ديفةلت ف ال submit
    if(username.value!==""||password.value!==""||email.value!==""){
        localStorage.setItem("username",username.value);
        localStorage.setItem("password",password.value); 
        localStorage.setItem("email",email.value);
        setTimeout(function(){
               window.location="Log_In.html"
        },2000)
      
    }
    else
    {
        alert("enter your information please")
       
    }

 })

   

