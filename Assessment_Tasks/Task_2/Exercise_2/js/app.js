$(document).ready(() => {
    // $('#slideshow .slick').slick( {
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     speed: 2000,
    //     dots: true,
    //     arrows: false,
    // });

    $('.slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      });
          
});

// -------- slider 2 -----------
$(document).ready(() => {
  $('.slick2').slick({
    slidesToShow:  1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
  });
});

// -------- slider 3 -----------
// $(document).ready(() => {
//   $('.slick3').slick({
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     autoplay: true,
//     centerMode: true,
//     variableWidth: true
//   });
// });

$(document).ready(() => {
  $('.slick3').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
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