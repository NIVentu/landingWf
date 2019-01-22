(function () {
    "use strict";

    var dots = 0;

    $(function () {
        setInterval(type, 100);
        redirect();
    });

    function redirect() {
      window.location.replace("https://webflow.com?rfsn=1151625.0f319");
    }

    function type() {
        if (dots < 3) {
            $("#dots").append(".");
            dots++;
        } else {
            $("#dots").html("");
            dots = 0;
        }
    }

})();

