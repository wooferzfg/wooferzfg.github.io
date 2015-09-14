var curKey = 0;
var keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.onkeydown = function (evt) {
    var code = evt.keyCode ? evt.keyCode : evt.charCode;

    if (curKey <= 9)
    {
        if (keys[curKey] == code)
            curKey++;
        else
            curKey = 0;
    }
    if (curKey == 10)
    {
        document.getElementById("music").play();
        document.getElementById("title").style.visibility = "hidden";
        document.getElementById("about").style.visibility = "hidden";
        var header = document.getElementById("header");
        header.style.backgroundImage = "url(Files/sujay.png)";
        curKey++;
    }
}