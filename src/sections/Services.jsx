import {services} from '../constants/index';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "ease-out",
    pauseOnHover: true,
    focusOnSelect: true
  };
  return (
    <div id="services">
      <section id='products' className='max-container max-sm:mt-12 mb-5'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold flex justify-center'>
          Our<span className='text-coral-red'> Services </span>
        </h2>
      </div>
     
      </section>
      <div>
      <Slider {...settings}>
        { services.map((service)=>(
          <div className="bg-white h-[350px] text-black rounded-xl cursor-pointer">
            <div className="h-56 rounded-t-xl bg-coral-red flex justify-center items-center ">
              <img src={service.imgURL} alt="Service" className="h-44 w-44 rounded-full"/>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 p-4'>
              <p className="text-xl font-semibold font-montserrat">{service.label}</p>
              <p className='text-center font-montserrat'>{service.subtext}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  )
}
 
export default Services;