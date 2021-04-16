function check_info()
{
    var username = document.getElementById('username_entered').value;
    var password = document.getElementById('password_entered').value;
    
    if (username == "user" && password == "passwd")
        window.open("files/successfullogin.html");
    else 
        window.open("files/unsuccessfullogin.html");
}

function reset()
{
    document.getElementById('username_entered').value = "";
    document.getElementById('password_entered').value = "";
}