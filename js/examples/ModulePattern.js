//The module pattern is the very basic version of the module pattern variations
//The revealing module pattern builds up on this concept and extends it with private, public members
let mpApp = (function(){
    return {
        Math : {
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
        DOM :  {
            addDiv: function (id, content) {
                let div = document.createElement("div");
                let text = document.createTextNode(content);
                div.appendChild(text);
                document.getElementById(id).appendChild(div);
            }
        }
    }
})();

mpApp.DOM.addDiv("anchor", "Module Pattern" + (mpApp.Math.multiply(3, mpApp.Math.Constants.PI) + mpApp.Math.add(2,3)));