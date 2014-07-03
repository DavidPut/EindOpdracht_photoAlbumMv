site.views.Button_Start = function (el) {

    //Set eventListener and custom event
    this.el = el;
    this.event = new CustomEvent("startTimer");

    this.init = function () {
        this.el.addEventListener('click', this.clickHandler.bind(this));

    };

    this.clickHandler = function (e) {
        e.preventDefault();
        document.dispatchEvent(this.event);
    };

    this.init();
};