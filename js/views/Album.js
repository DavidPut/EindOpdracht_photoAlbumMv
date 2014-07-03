site.views.Pictures = function (el) {
    this.el = el;
    var timer = 0;

    //Deceleration variables for objects
    var next;
    var show;
    var prev;
    var start;
    var pause;

    // console.log(site.album.photoItems);

    this.init = function () {

        //Initialize new objects
        next = new nextImage();
        prev = new previousImage();
        show = new customEvent();
        start = new startTimer();
        pause = new pauseTimer();

        //Show image at start
        show.showImage();

        //Add events
        document.addEventListener("nextImage", next.showNextImage.bind(this));
        document.addEventListener("previousImage", prev.showPreviousImage.bind(this));
        document.addEventListener("startTimer", start.beginTimer.bind(this));
        document.addEventListener("pauseTimer", pause.stopTimer.bind(this));


    };

    //Main class customEvent
    var customEvent = function () {
        this.showImage = function () {

            //Add images
            el.innerHTML = '<image src="' + site.album.photoItems[site.album.currentImageId].img + '" title="' + site.album.photoItems[site.album.currentImageId].txt + '" width="500px" height="500px" />'
                + '<image src="' + site.album.photoItems[site.album.currentImageId + 1].img + '" title="' + site.album.photoItems[site.album.currentImageId + 1].txt + '" width="500px" height="500px" />'
                + '<image src="' + site.album.photoItems[site.album.currentImageId + 2].img + '" title="' + site.album.photoItems[site.album.currentImageId + 2].txt + '" width="500px" height="500px" />'
                + '<image src="' + site.album.photoItems[site.album.currentImageId + 3].img + '" title="' + site.album.photoItems[site.album.currentImageId + 3].txt + '" width="500px" height="500px" />';

        }
    };

    //Sub class nextImage
    var nextImage = function () {
        this.showNextImage = function () {


            if (site.album.currentImageId + site.album.sliderSize >= site.album.photoItems.length) {
                site.album.currentImageId = 0;
                next.showImage();
            }

            else {
                console.log();
                site.album.currentImageId += site.album.sliderSize;
                next.showImage();
            }
        }
    };

    //Add to prototype chain
    nextImage.prototype = new customEvent();

    //Sub class previousImage
    var previousImage = function () {
        this.showPreviousImage = function () {

            if (site.album.currentImageId <= 0) {


                site.album.currentImageId = site.album.photoItems.length - site.album.sliderSize;

                prev.showImage();
            }
            else {
                site.album.currentImageId -= site.album.sliderSize;
                prev.showImage();
            }
        }
    };

    //Add to prototype chain
    previousImage.prototype = new customEvent();

    //Class startTimer
    var startTimer = function () {

        this.beginTimer = function () {

            timer = setInterval(function () {
                next.showNextImage();

            }, site.album.sliderTimer);

        };


    };

    //Class PauseTimer;
    var pauseTimer = function () {

        this.stopTimer = function () {
            clearInterval(timer);
        }
    };


    //Start init function
    this.init();
};