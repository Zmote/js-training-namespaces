define({
    addDiv: function (id, content) {
        let div = document.createElement("div");
        let text = document.createTextNode(content);
        div.appendChild(text);
        document.getElementById(id).appendChild(div);
    }
});