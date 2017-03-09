angular.module("myApp")
  .controller("mainController", mainController);
 angular.module("myApp").factory("dataService", dataService);

  function dataService(httpService) {
    var url = "animalsData.json";
    
    function getData() {
      return httpService.getData(url).then(onSucess)
    }
    
    function onSucess(data) {
      return data.pets
    }
    
    var service = {
      getData : getData
    }
    return service;
  }
  
  function mainController($scope, dataService) {
    $scope.textLabel = "PETS : ";
    $scope.message = "";
    $scope.pets = {};
    $scope.getPets = getPets;
    
    function getPets() {
      dataService.getData().then(onResolved, onError)
    }
    
    function onResolved(data) {
      $scope.pets = data;
    }
    
    function onError(response) {
      $scope.message = "Error Fetching Data. Check status for more info. STATUS : "+response.status;
    }
  }