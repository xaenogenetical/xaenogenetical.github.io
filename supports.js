var collapsers = document.getElementsByClassName("collapser");
var i;


//Make collapsable menus work
for (i = 0; i < collapsers.length; i++) {
    collapsers[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.children[0].classList.toggle("rotate");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
//Make imgs spin when clicked in the doc (for fun)
for (i = 0; i < document.images.length; i++) {
    var element = document.images[i];
    document.images[i].onclick = function () {
        this.classList.toggle("spin");
    };
};