var username=document.querySelector("#username");
var password=document.querySelector("#password");
var Sign_in=document.querySelector("#sign_in");

Sign_in.addEventListener("click",function(e){
    e.preventDefault(); 
    if(username.value==""||password.value==""){
        alert("enter your information please")
      
    }
    else
 {   if(username.value.trim()==localStorage.getItem("username")&&password.value==(localStorage.getItem("password"))){
setTimeout(function(){
window.location="index.html"
},1000)
}
else{
    alert("your information  Invalid")
}
   }

 })

   

