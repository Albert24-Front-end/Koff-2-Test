import "normalize.css";
import "./style.scss";
import Navigo from 'navigo';
import { Header } from '../modules/Header/header';
import { Main } from '../modules/Main/MAin';
import { Footer } from '../modules/Footer/Footer';
import { Order } from '../modules/Order/Order';

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

const init =()=>{
  new Header().mount();
  new Main().mount();
  new Footer().mount();
  new Order().mount();

  productSlider();

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
        console.log("favourite");
      })
      .on("/search", ()=>{
        console.log("search");
      })
      .on("/product/:id", (obj)=>{
        console.log("obj:", obj);
      })
      .on("/cart", ()=>{
        console.log("cart");
      })
      .on("/order", ()=>{
        console.log("order");
      })
      .notFound(()=>{
        document.body.innerHTML = "<h2>Страница не найдена</h2>";
      })
};

init();