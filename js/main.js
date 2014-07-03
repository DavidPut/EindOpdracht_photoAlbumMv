(function () {
    site.init = function () {

        //Load views
        new site.views.Pictures(document.getElementById("photoDiv"));
        new site.views.Button_Back(document.getElementById("backButton"));
        new site.views.Button_Next(document.getElementById("nextButton"));
        new site.views.Button_Start(document.getElementById("startButton"));
        new site.views.Button_Pause(document.getElementById("pauseButton"));


    };

    window.addEventListener('load', site.init);
})();