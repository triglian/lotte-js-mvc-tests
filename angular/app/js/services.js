'use strict';

/* Services */


// Lotte data load service
angular.module('lotteServices', ['ngResource']).
  factory('TString', function($resource){
    return $resource('../../data/sources.json', {}, {
      query: {method:'GET', params:{tStringId:'sources'}, isArray:true}
  });
});
