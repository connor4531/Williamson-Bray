document.getElementById("changeTheme").addEventListener("click", function()
    {
        let darkEnabled = document.body.classList.toggle("dark");
        localStorage.setItem('darkEnabled', darkEnabled);

    });

    if (JSON.parse(localStorage.getItem('darkEnabled')))
        {
            document.body.classList.add('dark');
        }