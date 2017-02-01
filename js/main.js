$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#232323', '#1242BA', '#543C69', '#34495E', '#8D4B4E', '#746348'],
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
    particlesJS('particles-js', 
  {
    "particles": {
      "number": {
        "value": 120,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#517ACC"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#1242BA",
        "opacity": 0.4,
        "width": 1.5
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 150,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": false
  }
);
});
