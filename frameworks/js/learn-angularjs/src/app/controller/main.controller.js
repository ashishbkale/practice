import angular from 'angular';

export  const  MainCtrl = angular
    .module("myApp")
    .controller("MainCtrl",Message)

    function Message(){
        var vm =this;
        vm.msg="Welcome  my App"
    }