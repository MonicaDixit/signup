'use strict';

angular.module('signupApp')
 .factory('LoginService' ,function(){
  var userdata = {};
    return {

   setuser : function(userdata){
    this.userdata = userdata;
    console.log('service' , this.userdata);
   } ,

    checkemail : function(email){


    },
    checkpass : function(pass){

    },

    checkconfpass : function(userdata){
        if(userdata.pass !== userdata.confpass){
            return false;
        }
    },

    checkfname : function(pass){
        
    },

    checklname : function(pass){
        
    },

    getuserdata : function(){
        return this.userdata;
    }

   }
   

  });



