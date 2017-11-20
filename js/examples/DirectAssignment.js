let daApp = {};

// Direct assignment
daApp.DOM = {};
daApp.DOM.addDiv = function (id, content) {
    let div = document.createElement("div");
    let text = document.createTextNode(content);
    div.appendChild(text);
    document.getElementById(id).appendChild(div);
};

daApp.Math = {};
daApp.Math.add  = function(a,b){
    return a + b;
};
daApp.Math.multiply = function (a, b) {
    return a * b;
};
daApp.Math.PI = 3.1415;

daApp.DOM.addDiv("anchor", "Direct Assignment: " + (daApp.Math.multiply(3, daApp.Math.PI) + daApp.Math.add(2,3)));
