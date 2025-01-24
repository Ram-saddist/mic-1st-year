function validate(){
    var name=document.getElementById("name").value
    var email=document.getElementById("email").value
    var nameCheck=/^[a-zA-Z]+[a-zA-Z ]+$/
    var emailCheck=/^[a-zA-Z$#]+@[a-z]+\.[a-z]{2,3}$/
                    //siva.ram  @codegnan.com
    console.log(name)
    if(name==""){
        alert("Enter your name")
        return false
    }
    if(!name.match(nameCheck)){
        alert("name must carry alphabets")
        return false
    }
    if(!email.match(emailCheck)){
        alert("Check your email id once")
        return false
    }
    return true
}