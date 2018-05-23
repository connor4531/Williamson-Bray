function delay (URL) {
    setTimeout( function() { window.location = "home.html" }, 1000 );
    document.getElementById('notTop').classList.add("fade");

}

document.getElementsByClassName("content").addEventListener("click", function()
    {
        document.getElementById('notTop').classList.add("fade");
    });
document.getElementsByClassName("content").addEventListener("click", function()
    {
        document.getElementById('Top').classList.add("exit");
    });