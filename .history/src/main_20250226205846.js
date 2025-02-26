import Swiper from 'swiper';
import {Navigation, Thumbs} from 'swiper/modules';
import 'swiper/css';



const productSlider =()=> {
  Promise.all([
    import('swiper/modules'),
    import('swiper'),
    import('swiper/css'),
  ]).then(([{Navigation, Thumbs}, Swiper])=>{
    
  })
}