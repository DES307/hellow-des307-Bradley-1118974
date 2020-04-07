$(document).ready(() => {
    $('.slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1.
            }
          },
          
        ]
      });   
});

// -------- slider 2 -----------
$(document).ready(() => {
  $('.slick2').slick({
    slidesToShow:  1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
    cssEase: 'linear',
  });
});

// -------- slider 3 -----------
$(document).ready(() => {
  $('.slick3').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      }
    ]
  });
});

// -------- notes -----------
console.log('All images are sourced from Unsplash: https://unsplash.com');