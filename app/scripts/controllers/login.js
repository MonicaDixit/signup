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
        confpass: '',
        bdate: ''

      };


      console.log('in login js userdata' , $scope.userdata);

      $scope.clearform = function(){
        //$scope.checkage = function(){
        console.log(moment($scope.userdata.bdate).format());
        var age = moment($scope.userdata.bdate).fromNow(true).replace(" years", "");
        console.log(age);

        if (age < 3 || age > 150){
          alert('wrong date');
        }
        
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

      $scope.checkage = function(){
        console.log(moment($scope.userdata.bdate).format());
        //var age = moment($scope.userdata.bdate).format()).fromNow();
      }

     
      $scope.showuserprofile = function(){
        LoginService.setuser($scope.userdata);
      $location.path('/about');
     };

  }]);
  
