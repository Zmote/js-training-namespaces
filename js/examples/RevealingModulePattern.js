let rmpApp = (function(){
    //Notice: You could, instead of Object Literal Notion, also use IIFE's
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
    this.DOM =  {
        addDiv: function (id, content) {
            let div = document.createElement("div");
            let text = document.createTextNode(content);
            div.appendChild(text);
            document.getElementById(id).appendChild(div);
        }
    };
    return {execute: function(prefix){
        DOM.addDiv("anchor", prefix + (Math.multiply(3, Math.Constants.PI) + Math.add(2,3)));
    }}
})();

rmpApp.execute("Revealing Module Pattern: ");

//In console, you'll see that rmpApp has only one "execute" as a property, the other fields are private
// console.log(rmpApp);