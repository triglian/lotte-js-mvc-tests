'use strict';

/* Controllers */


function SourceListCtrl($scope) {
  $scope.tStrings = [
    {"id":"1",
    "source":'erase',
    "translation":''},
    {"id":"2",
    "source":'and',
    "translation":''},
    {"id":"3",
    "source":'rewind',
    "translation":''},
    {"id":"4",
    "source":'cause',
    "translation":''},
    {"id":"5",
    "source":"'I've",
    "translation":''},
    {"id":"6",
    "source":'been',
    "translation":''},
    {"id":"7",
    "source":'changing',
    "translation":''},
    {"id":"8",
    "source":'my',
    "translation":''},
    {"id":"9",
    "source":'many',
    "translation":''},
    {"id":"10",
    "source":'have',
    "translation":''},
    {"id":"11",
    "source":'said',
    "translation":''},
    {"id":"12",
    "source":'that',
    "translation":''},
    {"id":"13",
    "source":'giving',
    "translation":''},
    {"id":"14",
    "source":'a',
    "translation":''},
    {"id":"15",
    "source":'shit',
    "translation":''},
    {"id":"16",
    "source":'is',
    "translation":''},
    {"id":"17",
    "source":'not',
    "translation":''},
    {"id":"18",
    "source":'correct',
    "translation":''},
    {"id":"19",
    "source":'to',
    "translation":''},
    {"id":"20",
    "source":'do',
    "translation":''}
  ];

  $scope.currentTString = $scope.tStrings[0];

  $scope.setActive = function(id){
    return id == $scope.currentTString.id ? 'active': '';
  }

  $scope.setCurrentTString = function(tString){
    $scope.currentTString = tString;
  }

  $scope.copyCurrentSource = function(){
    $scope.currentTString.translation = $scope.currentTString.source;
  }

  $scope.revertCurrent = function(){
    console.log('revertCurrent() is ready to get some real functionality')
  }

  $scope.spellCheckCurrent = function(){
    console.log('revertCurrent() is ready to get some real functionality')
  }  

}
//SourceListCtrl.$inject = [];
