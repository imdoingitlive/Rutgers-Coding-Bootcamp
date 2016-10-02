(function(){
  // Declare App
  var app = angular.module('testApp',[]);
  
  // Create Controller
  app.controller('testController', function($scope){
    
    // Data  
    $scope.title = "Hello, World!";
    $scope.products = [
      {
        name: 'Product One',
        price: 2,
        forSale: true
      },
      {
        name: 'Product Two',
        price: 5,
        forSale: false
      },
      {
        name: 'Product Three',
        price: 9,
        forSale: true
      }
    ];
    
    // Add Product Functionality    
    $scope.addProduct = function(){    
      $scope.products.push($scope.newProduct);
      $scope.newProduct = {};
    };
    
  // End Controller  
  });
  
// End App  
})();