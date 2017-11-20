//Simple IIFE
let simpleIIFE = (function () {
    return {
        Math: {
            add: function (a, b) {
                return a + b;
            },
            multiply: function (a, b) {
                return a * b;
            },
            Constants: {
                PI: 3.1415
            }
        },
        DOM: {
            addDiv: function (id, content) {
                let div = document.createElement("div");
                let text = document.createTextNode(content);
                div.appendChild(text);
                document.getElementById(id).appendChild(div);
            }
        }
    }
})();

simpleIIFE.DOM.addDiv("anchor", "Simple IIFE: " + (simpleIIFE.Math.multiply(3, simpleIIFE.Math.Constants.PI) + simpleIIFE.Math.add(2,3)));