function funcionText() {
    var x = document.getElementById('myText');
    if (x.className === "text") {
        x.className += " responsive";
    } else {
        x.className = "text";
    }
}