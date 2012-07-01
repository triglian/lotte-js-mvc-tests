'use strict';

/* Controllers */

function SourceListCtrl($scope, $routeParams, TString) {
  $scope.tStrings  = TString.query(function(){
    if($routeParams.tstringId){
      $scope.currentTString = $scope.tStrings[parseInt($routeParams.tstringId)-1];
    }else{
      $scope.currentTString = $scope.tStrings[0];
    }
  });

  $scope.setActive = function(id){
    return id == $scope.currentTString.id ? 'active': '';
  }

  $scope.copyCurrentSource = function(){
    $scope.currentTString.translation = $scope.currentTString.source;
  }

  $scope.revertCurrent = function(){
    console.log('revertCurrent() is ready to get some real functionality')
  }

  $scope.spellCheckCurrent = function(){
    console.log('spellCheckCurrent() is ready to get some real functionality')
  }  

}

SourceListCtrl.$inject = ['$scope', '$routeParams', 'TString'];
