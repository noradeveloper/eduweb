// JavaScript Document
$(document).ready(function() {
    "use strict";
    /*----- zero state page ------*/
    /* visit check for welcome message*/
    if (!localStorage.firstVisit) {
        console.log('first time');
        $(".general_mission_intro").show();
        localStorage.firstVisit = "1";
        /* Tour */
        // Instance the tour
        var tour = new Tour({
            steps: [{
                element: "#step1",
                title: "THIS IS YOUR PROGRESS BAR.",
                content: "This progress bar measures your activity. By being active on Smartable, you earn points – by accomplishing missions, earning badges,  visiting the site every day, and even updating your portfolio.<br/><br/>Hover over sections of the progress bar to view more information about what you did to earn points!",
                placement: "bottom",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div><div class="popover-navigation"><div class="btn-group" align="center"><button class="btn-md btn-primary" data-role="next">GOT IT, NEXT ></button><ol class="carousel-indicators grey"><li data-target="#carousel-outer" data-slide-to="0" class="active"></li><li data-target="#carousel-outer" data-slide-to="1"></li><li data-target="#carousel-outer" data-slide-to="2"></li><li data-target="#carousel-outer" data-slide-to="3"></li><li data-target="#carousel-outer" data-slide-to="4"></li></ol></div></div></div>'}, 
					{
                element: "#step2",
                title: "YOUR CAREERS LIVE HERE.",
                content: "Here, you can find the careers that you follow on Smartable – some of which you picked right before you started this tour! Here, you can unfollow and follow careers by hovering over them, and view other careers that we suggest for you based on your activity.<br/><br/>You can view all the careers on Smartable by navigating to the Careers page on the top navigation bar.",
                placement: "left",
                template: '<div class="popover" role="tooltip"> <div class="arrow"></div> <h3 class="popover-title"></h3> <div class="popover-content"></div> <div class="popover-navigation"> <div class="btn-group" align="center"> <button class="btn-md btn-cancel" data-role="prev">  < Back</button> <button class="btn-md btn-primary" data-role="next">Next > </button><ol class="carousel-indicators grey"><li data-target="#carousel-outer" data-slide-to="0"></li><li data-target="#carousel-outer" data-slide-to="1" class="active"></li><li data-target="#carousel-outer" data-slide-to="2"></li><li data-target="#carousel-outer" data-slide-to="3"></li><li data-target="#carousel-outer" data-slide-to="4"></li></ol></div></div></div>'
            }, {
                element: "#step3",
                title: "THIS IS YOUR FEED.",
                content: "Your feed contains useful articles and stories related to careers that you subscribe to. This box refreshes as articles are added to Smartable.  You can scroll through them, and mark them to read later.<br/><br/>You can find your saved articles on their own page – just click the “Saved Articles” button in the upper right corner.",
                placement: "bottom",
                template: '<div class="popover" role="tooltip"> <div class="arrow"></div> <h3 class="popover-title"></h3> <div class="popover-content"></div> <div class="popover-navigation"> <div class="btn-group" align="center"> <button class="btn-md btn-cancel" data-role="prev">  < Back</button> <button class="btn-md btn-primary" data-role="next">Next > </button><ol class="carousel-indicators grey"><li data-target="#carousel-outer" data-slide-to="0"></li><li data-target="#carousel-outer" data-slide-to="1"></li><li data-target="#carousel-outer" data-slide-to="2" class="active"></li><li data-target="#carousel-outer" data-slide-to="3"></li><li data-target="#carousel-outer" data-slide-to="4"></li></ol></div></div></div>'
            }, {
                element: "#step4",
                title: "THIS IS YOUR FEED.",
                content: "By completing missions, you earn badges and earn points. Missions help you learn more about yourself, and teach you skills that you’ll need in the future. Your SmartCV will show all that you’ve accomplished!<br/><br/>You can switch back and forth between careers and mission types by using the dropdown menus.",
                placement: "top",
                template: '<div class="popover" role="tooltip"> <div class="arrow"></div> <h3 class="popover-title"></h3> <div class="popover-content"></div> <div class="popover-navigation"> <div class="btn-group" align="center"> <button class="btn-md btn-cancel" data-role="prev">  < Back</button> <button class="btn-md btn-primary" data-role="next">Next > </button><ol class="carousel-indicators grey"><li data-target="#carousel-outer" data-slide-to="0"></li><li data-target="#carousel-outer" data-slide-to="1"></li><li data-target="#carousel-outer" data-slide-to="2"></li><li data-target="#carousel-outer" data-slide-to="3" class="active"></li><li data-target="#carousel-outer" data-slide-to="4"></li></ol></div></div></div>'
            }, {
                element: "#step5",
                title: "HELLO, IT’S YOU.",
                content: "This is your profile card – it’ll update continuously as you complete more missions, level up on Smartable, and earn more badges. Pretty neat, huh?<br/><br/>Remember that you can ask us any questions at help@smartable.me. Welcome to Smartable!",
                placement: "bottom",
                template: '<div class="popover" role="tooltip"> <div class="arrow"></div> <h3 class="popover-title"></h3> <div class="popover-content"></div> <div class="popover-navigation"> <div class="btn-group" align="center"> <button class="btn-md btn-cancel" data-role="prev">  < Back</button> <button class="btn-md btn-primary" data-role="end">FINISH TOUR > </button><ol class="carousel-indicators grey"><li data-target="#carousel-outer" data-slide-to="0"></li><li data-target="#carousel-outer" data-slide-to="1"></li><li data-target="#carousel-outer" data-slide-to="2"></li><li data-target="#carousel-outer" data-slide-to="3"></li><li data-target="#carousel-outer" data-slide-to="4" class="active"></li></ol></div></div></div>'
            }],
            backdrop: true,
            storage: false
        });

        var w = $(window).width();
        if (w > 786) {
            tour.init();
            tour.start();
        }
    } else {
        $(".general_mission_intro").hide();
    }
    $("#general_content").show();
    $("#schedule_table").hide();
    $("#workshops_content").hide();
    $("#online_content").hide();
    $(".hr_line").hide();

    /*----- mission dropdown menu function ------*/
    $('#mission_type_dropdown').on('change', function() {
        if (this.value == 'allMissions') {
            $("#schedule_table").show();
            $("#workshops_content").show();
            $("#general_content").show();
            $("#online_content").show();
            $(".hr_line").show();

        } else if (this.value == 'workshops') {
            $("#schedule_table").show();
            $("#workshops_content").show();
            $("#general_content").hide();
            $("#online_content").hide();

        } else if (this.value == 'general') {
            $("#general_content").show();
            $("#workshops_content").hide();
            $("#online_content").hide();
            $("#schedule_table").hide();
            $(".hr_line").hide();

        } else if (this.value == 'history') {
            window.location = $(':selected', this).attr('href')

        } else if (this.value == 'online') {
            $("#online_content").show();
            $("#workshops_content").hide();
            $("#general_content").hide();
            $("#history_content").hide();
            $("#schedule_table").hide();
            $(".hr_line").hide();
        }
    });
    /********************************************/
    /* Mobile mission slider dropdown menu */
    $('#mission_type_dropdown_xs').on('change', function() {
        if (this.value == 'allMissions') {
            $("#general_slider_content").show();
            $("#online_slider_content").show();
            $("#workshop_slider_content").show();

        }
        if (this.value == 'workshops') {
            $("#general_slider_content").hide();
            $("#online_slider_content").hide();
            $("#workshop_slider_content").show();


        } else if (this.value == 'general') {
            $("#workshop_slider_content").hide();
            $("#online_slider_content").hide();
            $("#general_slider_content").show();


        } else if (this.value == 'history') {
            window.location = $(':selected', this).attr('href');

        } else if (this.value == 'online') {
            $("#online_slider_content").show();
            $("#general_slider_content").hide();
            $("#workshop_slider_content").hide();
        }
    });
	
	
});

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}