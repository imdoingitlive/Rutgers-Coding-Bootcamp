<!doctype>
<html>
  <head>
    <title>Angular App</title>
    <base href="/angularroute">
    <link rel="stylesheet"
          type="text/css"
	  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="/angularroute/assets/style.css">
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-route.min.js"></script>
    <script type="text/javascript" src="/angularroute/assets/index.js"></script>
    
  </head>
  <body ng-app="myApp">


      
    <p><a href="/">Home</a></p>

    <a href="/about">About</a>
    <a href="/contact">Contact</a>
    <a href="/portfolio">Portfolio</a>

    <div ng-view></div>


  </body>
</html>
