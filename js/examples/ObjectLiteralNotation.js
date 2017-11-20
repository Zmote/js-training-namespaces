let olApp = {};

//Object Literal Notation
olApp.DOM = {
    addDiv: function (id, content) {
        let div = document.createElement("div");
        let text = document.createTextNode(content);
        div.appendChild(text);
        document.getElementById(id).appendChild(div);
    }
};

olApp.Math = {
    add: function (a, b) {
        return a + b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    Constants: {
        PI: 3.1415
    }
};

olApp.DOM.addDiv("anchor", "Object Literal Notation: " + (olApp.Math.multiply(3, olApp.Math.Constants.PI) + olApp.Math.add(2,3)));

