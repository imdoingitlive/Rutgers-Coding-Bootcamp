<!doctype>
<html>
  <head>
    <title>Angular App</title>
    <link rel="stylesheet"
          type="text/css"
	  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/style.css">
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
    <script type="text/javascript" src="assets/index.js"></script>

  </head>
  <body>

  <div ng-app="testApp">
    
    <div ng-controller="testController as test">
     
      <h1>{{title}}</h1>
      
      <ul>
        <li ng-repeat="product in products" ng-class="{bargain: product.price <= 6}">{{product.name}} - {{product.price | currency: "$"}}
        </li>
      </ul>
      
      <h3>Add Product</h3>
      <form ng-submit="addProduct()">
        <label>Name</label>
        <input type="text" ng-model="newProduct.name"/>
        <label>Price</label>
        <input type="number" step="any" ng-model="newProduct.price"/>
        <label>For Sale</label>
        <input type="checkbox" ng-model="newProduct.forSale" value="false"/>
        <input type="submit" value="Submit" />
      </form>
    
      <h1>On Sale</h1>
      <ul>
        <li ng-repeat="product in products" ng-class="{bargain: product.price <= 6}" ng-show="{{product.forSale}}">{{product.name}} - {{product.price | currency: "$"}}
        </li>
      </ul>


    </div>
    
  </div>

  </body>
</html>
