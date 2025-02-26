var collapsers = document.getElementsByClassName("collapser");
var i;

for (i = 0; i < collapsers.length; i++) {
    collapsers[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}