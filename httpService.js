angular.module("myApp")
       .factory("httpService", httpService);
       
  function httpService($http) {
    function getData(url) {
      return $http.get(url).then(onSuccess)
    }
    
    function onSuccess(response) {
      return response.data;
    }
    
    var service = {
      getData : getData
    };
    return service;
  }
