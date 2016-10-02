<!DOCTYPE html>
<html>
<head>
	<title>HTML form example</title>
	<style>
		.example-1, .example-2, .example-3, .diagnostic {
			border-radius: 5px;
			margin: 0 0 20px 0;
			padding: 5px;
		}
		.example-1,.example-2, .example-3 {
			border: 1px solid #F00;
		}
		.diagnostic {
			border: 1px solid #000;
		}
		.heading {
			font-size: 0.80em;
			font-weight: bold;
			margin: 0 0 10px 0;
		}
		pre {
			padding: 5px;
		    white-space: pre-wrap;
		    background: hsl(220, 80%, 90%);
		}
	</style>
</head>
<body>
<?php 
	// $_GET collection contains all url submitted variables
	$getOne  = ""; if ( isset($_GET["nameOne"]) ){ $getOne = $_GET["nameOne"]; }
	$getTwo  = ""; if ( isset($_GET["nameTwo"]) ){ $getTwo = $_GET["nameTwo"]; }

	// $_POST collection contains all form submitted variables
	$postOne = ""; if ( isset($_POST["nameOne"]) ){ $postOne = $_POST["nameOne"]; }
	$postTwo = ""; if ( isset($_POST["nameTwo"]) ){ $postTwo = $_POST["nameTwo"]; }	

	// $_REQUEST collection contains both url and form submitted
	$requestOne = ""; if ( isset($_REQUEST["nameOne"]) ){ $requestOne = $_REQUEST["nameOne"]; }
	$requestTwo = ""; if ( isset($_REQUEST["nameTwo"]) ){ $requestTwo = $_REQUEST["nameTwo"]; }
?>

<h2>Try out the examples below to see changes to these PHP collections</h2>
<div class="example-1">
	<div class="heading">TRY IT OUT 1: [GET ONLY] You can send variables to the same page using $_GET within a link</div>

	<!-- This link submits $_GET values back to the same page, this can be useful to change state -->
	<a id="submitGetOnly" href="?nameOne=getValueOne&nameTwo=getValueTwo" >Click here to test simple $_GET parameters updating</a>
</div>


<div class="example-2">
	<div class="heading">TRY IT OUT  2: [POST ONLY] Not including an action, the form will POST back to the same script</div>

	<!-- If you leave the action blank it POSTs back to this page -->
	<form id="submitPostOnly" action="?" method="POST" >
		<input name="nameOne" value="postValueOne" > 
		<input name="nameTwo" value="postValueTwo" > 
		<input type="submit" value="Submit" >
	</form>
	<br/>
</div>


<div class="example-3">
	<div class="heading">TRY IT OUT  3: [GET &amp; POST] This example submits via a javascript function instead</div>

	<!-- If you leave the action blank it POSTs back to this page -->
	<form id="submitGetAndPost" action="?nameOne=getValueOne&nameTwo=getValueTwo" method="POST" onSubmit="return false;">
		<input name="nameOne" value="postValueOne" > 
		<input name="nameTwo" value="postValueTwo" > 
		<button onclick="submitGetAndPost()" >Submit</button>
	</form>
	<br/>
	<a href="#you_never_see_me" onClick="submitGetAndPost(); return false;" >Click to submit!</a>
</div>


<div class="diagnostic" >
	<div class="heading">$_GET contains the URL encoded variables, GET doesn't have a request body</div>
	<div class="response">$_GET["nameOne"] = <?= $getOne ?></div>
	<div class="response">$_GET["nameOne"] = <?= $getOne ?></div>
</div>
<div class="diagnostic" >
	<div class="heading">$_POST contains form data as application/x-www-form-urlencoded in the request body</div>
	<div class="response">$_POST["nameOne"] = <?= $postOne ?></div>
	<div class="response">$_POST["nameOne"] = <?= $postTwo ?></div>
</div>
<div class="diagnostic" >
	<div class="heading">$_REQUEST contains both the GET and POST values, however it favors the POST data when both are defined</div>
	<div class="response">$_REQUEST["nameOne"] = <?= $requestOne ?></div>
	<div class="response">$_REQUEST["nameOne"] = <?= $requestTwo ?></div>
</div>
<script>
function submitGetAndPost() {

	// This submits the form by looking up the ID
	document.getElementById("submitGetAndPost").submit();
}

</script>
<pre>
<code>
<strong>Step 1:</strong> Return false breaks the default form submission

 &lt;form <strong>onSubmit="return false;"</strong>&gt;&lt;form&gt;

<strong>Step 2a:</strong> Setup an onClick handler on a submit button

 &lt;button <strong>onClick="submitViaJavascript()"</strong>&gt;Submit&lt;button&gt;

<strong>Step 2b:</strong> Setup an onClick handler on a link instead

 &lt;a href="#you_never_see_me" <strong>onClick="submitViaJavascript(); return false;"</strong> &gt;Click to submit!&lt;/a&gt;

<strong>Step 3:</strong> Give the form an ID to be able to find it

 &lt;form <strong>id="someID"</strong> onSubmit="return false;"&gt;&lt;form&gt;

<strong>Step 4:</strong> Create a javascript function that submits the form

 &lt;script&gt;
	function <strong>submitViaJavascript()</strong> { document.getElementById("someID")<strong>.submit();</strong> }
 &lt;/script&gt;
</code>
</pre>
</body>
</html>