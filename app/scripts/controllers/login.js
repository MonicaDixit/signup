'use strict';

/**
 * @ngdoc function
 * @name signupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the signupApp
 */
  angular.module('signupApp').controller('LoginCtrl',  ['$scope', 'LoginService', '$location',
    function ($scope, LoginService, $location ) {
      $scope.userdata = {
        email: '',
        fname: '',
        pass: '',
        confpaas: ''

      };


      console.log('in login js userdata' , $scope.userdata);

      $scope.checkconfpass = function(){
        if($scope.userdata.pass !== $scope.userdata.confpass){
          console.log('check pass');
            $scope.err = "Passwords do not match"
            //$location.path('/');
        }
    };
     
      $scope.showuserprofile = function(){
        LoginService.setuser($scope.userdata);
      $location.path('/about');
     }

  }]);
  
