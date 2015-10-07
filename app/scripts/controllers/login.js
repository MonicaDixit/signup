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
      $scope.nameRegex =  /^[A-Za-z]+$/;

      $scope.errpassword = false;
      $scope.userdata = {
        email: '',
        fname: '',
        pass: '',
        confpass: '',
        bdate: ''

      };


      console.log('in login js userdata' , $scope.userdata);

      $scope.clearform = function(){
        
        if(confirm('Are you sure you want to clear the form?')){
          $scope.userdata = {
          email: '',
          fname: '',
          pass: '',
          confpass: '',
          bdate: ''
        };
          $scope.signinform.$setPristine();
        }
      };

      $scope.validage = function(){
        var age = moment($scope.userdata.bdate).fromNow(true).replace(" years", "");
        console.log(age);
        console.log('in valid age method');

        if (age < 14 || age > 150){
          $scope.invalidage = true;
        }
        
      };

     
      $scope.showuserprofile = function(){
        LoginService.setuser($scope.userdata);
      $location.path('/about');
     };

  }]);
  
