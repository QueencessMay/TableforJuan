import React from 'react'
import { useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function About() {
  useEffect(() => {
    const slider = document.querySelector('.slider');
    const carousel = document.querySelector('.carousel');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    let direction;

    const handlePrevClick = () => {
      if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
        direction = 1;
      }
      carousel.style.justifyContent = 'flex-end';
      slider.style.transform = 'translate(25%)';
    };

    const handleNextClick = () => {
      direction = -1;
      carousel.style.justifyContent = 'flex-start';
      slider.style.transform = 'translate(-25%)';
    };

    const handleTransitionEnd = () => {
      if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
      } else if (direction === 1) {
        slider.prepend(slider.lastElementChild);
      }

      slider.style.transition = 'none';
      slider.style.transform = 'translate(0)';
      setTimeout(() => {
        slider.style.transition = 'all 0.5s';
      });
    };

    prev.addEventListener('click', handlePrevClick);
    next.addEventListener('click', handleNextClick);
    slider.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      // Clean up the event listeners when the component unmounts
      prev.removeEventListener('click', handlePrevClick);
      next.removeEventListener('click', handleNextClick);
      slider.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []); 

  return (
    <>
  {/* SWIPER */}
  <link rel="stylesheet" href="css/swiper-bundle.min.css" />
  {/* FIRST PANEL */}
  {/* - responsiveness */}
  <div className="ourstory sm:w-full">
    <div className="newspaper relative w-full overflow-hidden isolate bg-[url('src/images/About/news.jpg')] bg-cover bg-no-repeat after:content-[''] after:absolute after:z-[-1] after:opacity-80 after:inset-0">
        <div className="absolute inset-0 bg-[rgba(233, 230, 230, 0.8)] backdrop-blur"></div>
      <div className="after:content-[''] after:absolute after:z-[-1] after:opacity-80 after:inset-0" style={{ background: "rgb(233, 230, 230)" }} />
        <div className="box-area grid grid-cols-2 items-center gap-x-[50px] mx-auto my-20 p-20">
          <div className="carousel-container">
            <div className="carousel h-[500px] w-full relative overflow-hidden shadow-[0px_0px_20px_rgba(0,0,0,0.7)] rounded-3xl">
              {/*Slider*/}
              <div className="slider flex h-full w-[400%] shrink-0 transition-all duration-[500ms] ease-[ease]">
                <section className="basis-1/5 w-1/5 flex justify-center items-center flex-1">
                  <img id="slide-1" src="/src/images/About/cooking1.jpg" className="object-cover" />
                </section>
                <section className="basis-1/5 w-1/5 flex justify-center items-center flex-1">
                  <img id="slide-2" src="/src/images/About/cooking2.jpg" className="object-cover" />
                </section>  
                <section className="basis-1/5 w-1/5 flex justify-center items-center flex-1">
                  <img id="slide-3" src="/src/images/About/cooking4.jpg" className="object-cover" />
                </section>
                <section className="basis-1/5 w-1/5 flex justify-center items-center flex-1">
                  <img id="slide-4" src="/src/images/About/cooking5.jpg" className="object-cover" />
                </section>
              </div>
              {/*Controls*/}
              <div className="controls">
                <span className="arrow prev absolute cursor-pointer left-[30px] top-[85%]">
                  <i className="material-icons text-[35px] text-white">keyboard_arrow_left</i>
                </span>
                <span className="arrow next absolute cursor-pointer right-[30px] top-[85%]">
                  <i className="material-icons text-[35px] text-white">keyboard_arrow_right</i>
                </span>
              </div>
            </div>
          </div>

              {/*Description*/}
              <div className="desc w-full h-[500px] bg-[rgba(236,214,211,0.8)] shadow-[0px_0px_20px_rgba(0,0,0,0.4)] p-12 rounded-[10px] z-10">
                <h1 className="text-left text-[#ea6a91] -mt-px md:text-5xl lg:text-7xl font-montserrat">
                  OUR STORY
                </h1>
                <p className="text-justify my-5 sm:text-xs md:text-sm lg:text-xl text-[#363636] font-montserrat">
                  During the pandemic, we aspired to have a successful business to alleviate hunger. My mother's sister presented us with an opportunity, which we eagerly seized. Initially, we planned for a food truck, but without a suitable vehicle, we opted for a food delivery service that caters to Filipinos' preferences for rice and viands. Our family is busy in the morning fulfilling orders and motivated by positive customer feedback. We aim to expand Table for Juan with a bakery and serve more customers.
                </p>
              </div>
            </div>
          </div>
        </div>

  {/* SECOND PANEL */}
  {/* - responsiveness */}
<div className="container">
  <div className="testimonial relative px-0 w-[1481px]">
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      className="swiper-container flex md:w-full 2xl:w-[6000px] h-[400px] items-center justify-center bg-[#e5ece9] overflow-hidden"
    >
              <SwiperSlide>
                <div className="slide flex items-center md:justify-center flex-col gap-y-[30px] h-full w-full">
                  <h1 className="text-center mt-[-5px] sm:text-5xl md:text-6xl lg:text-7xl text-[#E79898] font-montserrat">
                    MISSION
                  </h1>
                  <p className="text-center md:text-xl lg:text-3xl text-[#363636] px-40 py-0 font-montserrat">
                    Our mission is to bring fast, healthy, and affordable food for the
                    people on the go. At Table ni Juan, we understand that your time is
                    valuable, and we are confident to offer the foods that made your
                    childhood and makes you feel nostalgic while eating.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide flex items-center overflow-hidden justify-center flex-col gap-y-[30px] h-full w-full">
                  <h1 className="text-center mt-[-5px] text-5xl md:text-6xl lg:text-7xl text-[#E79898] font-montserrat">
                    VISION
                  </h1>
                  <p className="text-center md:text-xl lg:text-3xl text-[#363636] px-40 py-0 font-montserrat">
                    Table for Juan hopes to bring more food on the future menu and make
                    it more accessible for different kinds of people by making an
                    initiative to serve our business closer to the community.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
  </div>
</div>

  {/*THIRD PANEL */}
  {/* - responsiveness */}
  <div className="meetcrew h-screen relative overflow-hidden">
  <div className="blurbg absolute w-full h-full z-[-1] opacity-50 left-0 top-0">
    <img src="src/images/About/th_bg.jpg" className="th w-full h-full object-cover object-[10%_20%]" />
  </div>
  <div className="th_cont absolute -translate-x-2/4 -translate-y-2/4 flex justify-center items-center left-2/4 top-2/4">
    <div className="text-column flex-1 w-[40rem] h-[75vh] flex flex-col justify-center mt-20 mb-[10vh] md:mx-0 lg:mx-20 md:pl-20 lg:pl-0 pr-20">
      <h2 className="text-left text-[#E79898] md:text-4xl lg:text-7xl font-montserrat font-bold">
        BEHIND THE TABLE
        </h2>
      <h4 className="text-[#AC6868] text-justify sm:text-sm md:text-sm lg:text-3xl font-montserrat">
        Step into our culinary world, where flavors come alive. Join us behind the scenes and experience the passion that fuels our kitchen. Indulge in a gastronomic journey like no other at Table for Juan.
      </h4>
    </div>
    {/* SLIDER */}
    <div className="image-column relative w-[50vh] h-[70vh] md:mr-20 lg:mr-0 mt-0 mx-auto my-0 overflow-hidden shadow-[0px_0px_10px_rgba(0,0,0,0.8)] rounded-[20px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            centeredSlides={true}
            navigation={{
              prevEl: '.arrow.prev',
              nextEl: '.arrow.next',
            }}
            className="swiper-container"
          >
            <SwiperSlide>
              <img src="/src/images/About/behind.jpg" alt="Image 1" className="object-cover w-full h-full shadow-[5px_5px_15px_rgba(0,0,0,0.2)] rounded-[10px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/images/About/behind1.jpg" alt="Image 2" className="object-cover w-full h-full shadow-[5px_5px_15px_rgba(0,0,0,0.2)] rounded-[10px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/images/About/behind2.jpg" alt="Image 3" className="object-cover w-full h-full shadow-[5px_5px_15px_rgba(0,0,0,0.2)] rounded-[10px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/images/About/behind3.jpg" alt="Image 4" className="object-cover w-full h-full shadow-[5px_5px_15px_rgba(0,0,0,0.2)] rounded-[10px]" />
            </SwiperSlide>
          </Swiper>
  </div>
  </div>
  </div>
</>
  );
};

export default About;