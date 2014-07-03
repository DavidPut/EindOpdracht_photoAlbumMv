(function () {
    //Namespace
    window.site = {};
    site.views = {};

    //Album object
    site.album = new Album({
        items: [
            //Set photo properties
            new PhotoProperties({
                image: 'images/1.jpg',
                description: 'Led Zeppelin'
            }),
            new PhotoProperties({
                image: 'images/2.jpg',
                description: 'Rolling Stones'
            }),
            new PhotoProperties({
                image: 'images/3.jpg',
                description: 'Neil Young'
            }),
            new PhotoProperties({
                image: 'images/4.jpg',
                description: 'Pink Floyd'
            }),

            new PhotoProperties({
                image: 'images/5.jpg',
                description: 'AC/DC'
            }),
            new PhotoProperties({
                image: 'images/6.jpg',
                description: 'Metallica'
            }),
            new PhotoProperties({
                image: 'images/7.jpg',
                description: 'Pearl Jam'
            }),
            new PhotoProperties({
                image: 'images/8.jpg',
                description: 'Nirvana'
            }),

            new PhotoProperties({
                image: 'images/9.jpg',
                description: 'Mark Knopfler'
            }),
            new PhotoProperties({
                image: 'images/10.jpg',
                description: 'Allman Brothers'
            }),
            new PhotoProperties({
                image: 'images/11.jpg',
                description: 'The Beatles'
            }),

            new PhotoProperties({
                image: 'images/12.jpg',
                description: 'Alice in Chains'
            })


        ]


    });

    function PhotoProperties(params) {
        this.img = params.image || null;
        this.txt = params.description || 'default';
    }

    function Album(params) {

        //Photo properties
        this.photoItems = params.items;

        //Default 0
        this.currentImageId = 0;

        //4 pictures
        this.sliderSize = 4;

        //2 seconds
        this.sliderTimer = 2000;

    }




})();