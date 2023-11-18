import {clientsData} from '../constants/index'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "ease-out",
    pauseOnHover: true,
    focusOnSelect: true
  };
  return (
    <section id='clients' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start items-center gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'> Popular </span> Clients
        </h2>
        <p className='lg:max-w-lg mt-2 text-center font-montserrat text-slate-gray'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda, at quas a dolor aspernatur tempora adipisci accusantium in excepturi ea ab enim libero, inventore minima veritatis dolore, mollitia beatae.
        </p>
      </div>

      <div>
        <Slider {...settings}>
          {clientsData.map((client) =>(
            <div className="bg-white h-[300px] text-black rounded-xl cursor-pointer">
              <div className="h-80 rounded-t-xl flex justify-center items-center ">
                <img src={client.imgURL} alt="ClientLogo" className="h-[240px] w-[320px] rounded-lg "/>
              </div>
            </div>
          ))}
        </Slider>
      </div>
     
    </section>
  );
}

export default Clients