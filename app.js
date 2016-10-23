(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('MyController', function ($scope) {
  $scope.nameofmanue = "";
  $scope.message = null;

  $scope.CheckLunch = function () {
    var totalName = messagelength($scope.nameofmanue);
    $scope.message = totalName;
  };


  function messagelength(string) {
    var message= null;
    var arrayOfStrings=string.split(',');
    if (arrayOfStrings =="") {
      message="Please enter data first.";
      return message;
    }
    if (arrayOfStrings !="" && arrayOfStrings.length <= 3) {
      message="Enjoy!";
      return message;
    }
    if (arrayOfStrings.length > 3) {
      message="Too much!";
      return message;
    }
  }

});

})();
