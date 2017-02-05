<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!--Modern Head Tags-->
    <meta name="viewport" content="width=device-width, user-scalable=no" />
  	<link rel="manifest" href="manifest.json" />
  	<link rel="icon" sizes="192x192" href="assets/icons/jake_192.png">
  	<!--theme-color-->
  	<meta name="theme-color" content="#F8C128">
  	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min.js"></script>
  	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.min.js"></script>
    <title>Bunk-o-meter</title>
</head>
<body>
    <div id="root"></div>
    <script type="text/javascript" src="bundle.min.js"></script>
<button id="demo-show-toast" class="mdl-button mdl-js-button mdl-button--raised" type="button">Show Toast</button>
<div id="demo-toast-example" class="mdl-js-snackbar mdl-snackbar">
  <div class="mdl-snackbar__text"></div>
  <button class="mdl-snackbar__action" type="button"></button>
</div>
<script>
(function() {
  'use strict';
  window['counter'] = 0;
  var snackbarContainer = document.querySelector('#demo-toast-example');
  var showToastButton = document.querySelector('#demo-show-toast');
  showToastButton.addEventListener('click', function() {
    'use strict';
    var data = {message: 'total bunks so far:' + ++counter};
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  });
}());
</script>


</body>
</html>