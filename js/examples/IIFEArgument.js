//IIFE with Argument
(function (namespace) {
    namespace.Math = {
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
    namespace.DOM = {
        addDiv: function (id, content) {
            let div = document.createElement("div");
            let text = document.createTextNode(content);
            div.appendChild(text);
            document.getElementById(id).appendChild(div);
        }
    }
})(window.iifeArgApp = window.iifeArgApp || {});

iifeArgApp.DOM.addDiv("anchor", "IIFE with Argument: " + (iifeArgApp.Math.multiply(3, iifeArgApp.Math.Constants.PI) + iifeArgApp.Math.add(2, 3)));