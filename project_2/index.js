let title = document.getElementById("titleValue");
let book_det = document.getElementById("book_details");
let list = document.getElementsByTagName("LI");
let uniqueValue = document.getElementById("myUL");

fun = (value) => {
    if (value == true) {
        title.value = "";
    }
    else if (value == "add") {
        if (title.value == "" || book_det.value == "") {
            alert("PLEASE FILL THE REQUIREMENTS");
        }
        else {
            addElement();
        }
    }
    else if (value == "delete") {
        uniqueValue.innerHTML = "";
    }
    else {
        book_det.value = "";
    }
}

LoadValue = () => {
    var i;
    for (i = 0; i < list.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        list[i].appendChild(span);
    }
    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    for (i = 0; i < list.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("View");
        span.className = "view";
        span.appendChild(txt);
        list[i].appendChild(span);
    }
    // Click on a close button to hide the current list item
    var view = document.getElementsByClassName("view");
    var i;
    for (i = 0; i < view.length; i++) {
        view[i].onclick = function () {
            var div = this.parentElement;
            alert(book_det.value);
        }
    }
}

addElement = () => {
    var li = document.createElement("li");
    var t = document.createTextNode("TITLE"+"\t\t"+title.value);
    li.appendChild(t);
    li.className = "list-group-item";
    uniqueValue.appendChild(li);
    LoadValue();
}



