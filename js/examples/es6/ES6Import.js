/**
 * Created by Zmote on 20.11.2017.
 */
//Notice: with as myVariable, we can define as what we want to import the values, functions etc., ie.
//another way for namespacing

import * as Math from "./ES6ExportMath.js"
import * as DOM from "./ES6ExportDOM.js";

DOM.addDiv("anchor", "ES6 Import Export: " + (Math.multiply(3, Math.Constants.PI) + Math.add(2,3)));