function toggleInfoVisibility() {
    if (document.getElementById("infotext").style.display == "block") {
        document.getElementById("infotext").style.display = "none";
        document.getElementById("info").classList.remove("button-active")
    }

    else {
        document.getElementById("infotext").style.display = "block";
        document.getElementById("info").classList.add("button-active")
    }
}

const buttons = document.querySelectorAll('.ts', '.tr');

buttons.forEach(button => {
    button.addEventListener('click', function toggleButtons() {
        buttons.classList.add("button-disabled");
    });
});