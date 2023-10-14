$(document).ready(function(){
    $('.timeline-wrapper-inner').slick({
      infinite: true,
      slidesToShow: 6,
      dots: true,
      arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }

  ]
    });
    $('.hives-list').slick({
      infinite: true,
      slidesToShow: 5,
      dots: true,
      arrows: false,
      centerMode: true,
    });
})