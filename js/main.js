$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#1E286F', '#465C69', '#543C69', '#34495E', '#8D4B4E', '#746348'],
        anchors: ['home', 'about', 'timeline', 'skills', 'projects', 'contact'],
        menu: '#menu',
        responsiveWidth: 1100
    });
    function locationHashChanged() {
            switch (location.hash) {
                case "#about":
                    $(".about").addClass("animated fadeInLeftBig").removeClass("hidden");
                    break;
                case "#timeline":
                    $(".timeline").addClass("animated fadeInLeftBig").removeClass("hidden");
                    break;
                case "#skills":
                    $(".skills").addClass("animated fadeInLeftBig").removeClass("hidden");
                    break;
                case "#projects":
                    $(".projects").addClass("animated fadeInLeftBig").removeClass("hidden");
                    break;
                case "#contact":
                    $(".contact").addClass("animated fadeInLeftBig").removeClass("hidden");
                    break;
            }
        }
    if(window.innerWidth <= 1100) {
        $(".about").removeClass("hidden");
        $(".timeline").removeClass("hidden");
        $(".skills").removeClass("hidden");
        $(".projects").removeClass("hidden");
        $(".contact").removeClass("hidden");
    } else {
        window.onhashchange = locationHashChanged;
    }
});
