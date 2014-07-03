site.views.Button_Next = function (el) {

    //Set eventListener and custom event
    this.el = el;
    this.event = new CustomEvent("nextImage");

    this.init = function () {
        this.el.addEventListener('click', this.clickHandler.bind(this));

    };

    this.clickHandler = function (e) {
        e.preventDefault();
        document.dispatchEvent(this.event);
    };

    this.init();
};