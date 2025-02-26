const { default: Navigo } = require('navigo');
import Navigo from 'navigo';

const productSlider =()=> {
  Promise.all([
    import('swiper/modules'),
    import('swiper'),
    import('swiper/css'),
  ]).then(([{Navigation, Thumbs}, Swiper])=>{
    const swiperThumbnails = new Swiper.default(".product__slider-thumbnails", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    new Swiper.default(".product__slider-main", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".product__arrow_next",
        prevEl: ".product__arrow_prev",
      },
      modules: [Navigation, Thumbs],
      thumbs: {
        swiper: swiperThumbnails,
      },
    });
  })
}

productSlider();

const init =()=>{
  

  const router = new Navigo('/', {linksSelector: 'a[href^="/"]'});

  router.resolve();

  router
      .on("/", ()=>{
        console.log("Мы на главной");
      })
      .on("/category", (obj)=>{
        console.log("obj:", obj);
        console.log("category");
      })
      .on("/favourite", ()=>{
        console.log();
      })
      .on("/search", ()=>{
        console.log();
      })
      .on("/product/:id", ()=>{
        console.log();
      })
      .on("/cart", ()=>{
        console.log();
      })
      .on("/order", ()=>{
        console.log();
      })
      .notFound(()=>{
        document.body.innerHTML = "<h2>Страница не найдена</h2>";
      })
};

init();