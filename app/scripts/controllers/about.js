'use strict';

/**
 * @ngdoc function
 * @name signupApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the signupApp
 */
angular.module('signupApp')
  .controller('AboutCtrl', ['$scope', 'LoginService', 
    function ($scope, LoginService) {
    $scope.showbio = false;
    $scope.userdata = LoginService.getuserdata();

    console.log('user' , $scope.userdata);
    $scope.showbiodiv = function(){
        if (!$scope.showbio){
          $scope.showbio = true;
        }
        else {
          $scope.showbio = false;
        }
    };


  }]);
