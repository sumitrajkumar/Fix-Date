function mydate()
{
    document.getElementById("first").innerHTML = "Yeeyy! Finally";
    document.getElementById("btn-2").style.display = "none";
    document.getElementById("btn-1").innerHTML = "Lets fix a Date";
    document.getElementById("btn-1").setAttribute(
            "style",
            "width:120px"
    );
    document.getElementById("bear").src = "cute.gif";
}       
function nodate()
{
    document.getElementById("btn-2").setAttribute(
        "style",
        
        'top:' + Math.floor(Math.random() * 100) + 'px; left:' + Math.floor(Math.random() * 200) + 'px;'
        
    );
}
