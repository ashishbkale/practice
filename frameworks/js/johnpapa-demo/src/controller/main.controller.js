(function(){
    "use strict";
        angular
        .module("myApp")
        .controller("MainCtrl",MainCtrl)

        function MainCtrl(fetchApi){
            var vm=this;
            vm.name="srinvias";
            vm.say =say;
            vm.fake=fake;

           function say(){
                alert("helllo")
            }

            function fake(){
                return fetchApi.getUser();
            }

            console.log(fetchApi)
        }
})();