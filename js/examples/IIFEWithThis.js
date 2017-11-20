//IIFE with Argument
(function () {
    this.Math = {
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
    this.DOM = {
        addDiv: function (id, content) {
            let div = document.createElement("div");
            let text = document.createTextNode(content);
            div.appendChild(text);
            document.getElementById(id).appendChild(div);
        }
    }
}).apply(window.iifeThisApp = window.iifeThisApp || {});

iifeThisApp.DOM.addDiv("anchor", "IIFE with This: " + (iifeThisApp.Math.multiply(3, iifeThisApp.Math.Constants.PI) + iifeThisApp.Math.add(2, 3)));