(function(){
    "use strict";
    angular
    .module("myApp")
    .service("fetchApi",fetchApi)

    function fetchApi($http){
        this.getUser=function(){
            console.log($http)
            console.log("im back from services")
        }
    }
})();