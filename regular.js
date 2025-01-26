function validate(){
    var name=document.getElementById("name").value
    var email=document.getElementById("email").value
    var city=document.getElementById("city").value
    var nameCheck=/^[a-zA-Z]+[a-zA-Z ]+$/
    var emailCheck=/^[a-zA-Z$#0-9]+@[a-z]+\.[a-z]{2,3}$/
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
    if(city==""){
        document.getElementById("city-error").innerHTML="Enter your city"
        return false
    }
    return true
}

/*
Rest calls or server operations (CRUD actions)
get         retrieve
post        create
put         update
delete      delete

using fetch() or axios 3rd part library we are going to access an API
https://www.google.com/search?q=

The response we get from an API or the request which we send is in JSON format
JavaScript Object Notation(JSON)
{
    "key":value,
    "key":value
    .
    .
}

*/


