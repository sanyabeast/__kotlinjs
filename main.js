"use strict";
requirejs.config({
    paths : {
        "kotlin" : "js/lib/kotlin"
    }
});

requirejs(["js/build"], function(main){
    console.log(main);
});