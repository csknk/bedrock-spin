var page = require('webpage').create();
page.open('https://roots.io/salts.html', function(status) {

  console.log("status: " + status);
    if (status !== "success") {
      console.log("Unable to access network");
    } else {
      window.setTimeout(function () {
          var results = page.evaluate(function() {
              return document.documentElement.innerHTML;
          });
          console.log(results)
          phantom.exit();
      }, 200);
    }
  phantom.exit();
});
