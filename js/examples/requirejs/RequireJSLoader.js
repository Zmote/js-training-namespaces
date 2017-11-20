/**
 * Created by Zmote on 20.11.2017.
 */
//RequireJS builds on AMD Interface, ie. Asynchronous Module Definition
requirejs.config({
    baseUrl: 'js',
    paths : {modules: "../../js/examples/requirejs"}
});

requirejs(['modules/RequireJSMainModule'],
function (RequireJSMainModule) {
    RequireJSMainModule.DOM.addDiv("anchor", "RequireJS: " + (RequireJSMainModule.Math.multiply(3, RequireJSMainModule.Math.Constants.PI) + RequireJSMainModule.Math.add(2,3)));
});