        const swiper = new Swiper('.swiper', {
            autoplay: {
                delay: 10001, 
                disebleOnInteraction:false,
            },
           loop: true,

          pagination: {
          el: '.swiper-pagination',
          },

  // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
       },

         });
