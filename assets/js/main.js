/**
* Template Name: Selecao - v2.0.0
* Template URL: https://bootstrapmade.com/selecao-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0; 
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 80;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Intro carousel
  var heroCarousel = $("#heroCarousel");

  heroCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('h2').addClass('animated fadeInDown');
    $(this).find('p').addClass('animated fadeInUp');
    $(this).find('.btn-get-started').addClass('animated fadeInUp');
  });

  // Initate the hero bottom waves
  if ($('#wave1').length && $('#wave2').length) {
    wavify(document.querySelector('#wave1'), {
      height: 40,
      bones: 4,
      amplitude: 40,
      color: '#fff',
      speed: .15
    });

    wavify(document.querySelector('#wave2'), {
      height: 20,
      bones: 3,
      amplitude: 40,
      color: 'rgba(255, 255, 255, .1)',
      speed: .25
    });
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Initi AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });

})(jQuery);


//chart2
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
labels: ["2/3", "13/3", "1-16/3","2-16/3", "1-17/3","2-17/3", "20/3", "21/3", "22/3", "1-23/3","2-23/3", "1-25/3", "2-25/3", "26/3", "27/3", "1-28/3", "2-28/3", "29/3", "30/3", "31/3","1/4","2/4","3/4","4/4","5/4","6/4","7/4","8/4","9/4","10/4"],
datasets: [{
  label: "الاصابات",
  data: [1,0,11,17,5,6,29,15,15,24,5,26,19,40,23,0,11,13,9,6,4,21,11,13,22,4,4,5,14,0],
  backgroundColor: [
  'rgba(0, 0, 200, .2)',
  ],
  borderColor: [
  'rgba(0, 0, 150, .9)',
  ],
  borderWidth: 2
  },
  {
    label: "الشفاء",
    data: [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,16,0,0,8,4,6,9,13,16,36,16,12,12,11,9],
    backgroundColor: [
    'rgba(0, 200, 0, .2)',
    ],
    borderColor: [
    'rgba(0, 150, 0, 97)',
    ],
    borderWidth: 2
    },
{
label: "الوفيات",
data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,2,0,0,0,0,0,0,1,0,0,1,0],
backgroundColor: [
'rgba(200, 0, 0, .2)',
],
borderColor: [
'rgba(150, 0, 0, .9)',
],
borderWidth: 2
}
]
},
options: {
responsive: true
}
});



//chart

var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "الاصابات",
    data: [1,0,11,17,5,6,29,15,15,24,5,26,19,40,23,0,11,13,9,6,4,21,11,13,22,4,4,5,14,0],
    lineTension: 0,
    fill: false,
    borderColor: 'blue'
  };



var speedData = {
  labels: ["2/3", "13/3", "1-16/3","2-16/3", "1-17/3","2-17/3", "20/3", "21/3", "22/3", "1-23/3","2-23/3", "1-25/3", "2-25/3", "26/3", "27/3", "1-28/3", "2-28/3", "29/3", "30/3", "31/3","1/4","2/4","3/4","4/4","5/4","6/4","7/4","8/4","9/4","10/4"],
  datasets: [dataFirst]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});





//chart2

var speedCanvas = document.getElementById("speedChart2");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;


var dataSecond = {
    label: "الشفاء",
    data: [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,16,0,0,8,4,6,9,13,16,36,16,12,12,11,9],
    lineTension: 0,
    fill: false,
  borderColor: 'green'
  };

  


var speedData = {
  labels: ["2/3", "13/3", "1-16/3","2-16/3", "1-17/3","2-17/3", "20/3", "21/3", "22/3", "1-23/3","2-23/3", "1-25/3", "2-25/3", "26/3", "27/3", "1-28/3", "2-28/3", "29/3", "30/3", "31/3","1/4","2/4","3/4","4/4","5/4","6/4","7/4","8/4","9/4","10/4"],
  datasets: [dataSecond]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});


//chart3

var speedCanvas = document.getElementById("speedChart3");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;



  var datathird = {
    label: "الوفيات",
    data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,2,0,0,0,0,0,0,1,0,0,1,0],
    lineTension: 0,
    fill: false,
  borderColor: 'red'
  };


var speedData = {
  labels: ["2/3", "13/3", "1-16/3","2-16/3", "1-17/3","2-17/3", "20/3", "21/3", "22/3", "1-23/3","2-23/3", "1-25/3", "2-25/3", "26/3", "27/3", "1-28/3", "2-28/3", "29/3", "30/3", "30/3","1/4","2/4","3/4","4/4","5/4","6/4","7/4","8/4","9/4","10/4"],
  datasets: [datathird]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});




//google circil 
google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Pizza');
      data.addColumn('number', 'Populartiy');
      data.addRows([
        ['اربد', 1],
        ['البلقاء', 1],
        ['عمان',5]
      ]);

      var options = {
        title: '         عدد الوفيات في المحافظات',
      };

      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
