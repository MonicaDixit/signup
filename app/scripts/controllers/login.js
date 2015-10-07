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

      $scope.errpassword = false;
      $scope.userdata = {
        email: '',
        fname: '',
        pass: '',
        confpass: ''

      };


      console.log('in login js userdata' , $scope.userdata);

      $scope.checkconfpass = function(){
        if($scope.userdata.pass !== $scope.userdata.confpass){
          console.log('check pass');
          console.log('inside check pass userdata' , $scope.userdata);
            $scope.errpassword = true;

            //$location.path('/');
        }
        else{
           $scope.errpassword = false;
        }
      };

      $scope.clearform = function(){
        if(confirm('Are you sure you want to clear the form?')){
          $scope.userdata = {
          email: '',
          fname: '',
          pass: '',
          confpass: ''
        };
          $scope.signinform.$setPristine();
        }
      }

     
      $scope.showuserprofile = function(){
        LoginService.setuser($scope.userdata);
      $location.path('/about');
     };

  }]);
  
