import React from 'react';
import { useNavigate } from 'react-router-dom';
import friedBangus from '../images/Home/friedbangus.png';
import bakedBangus from '../images/Home/bakedbangus.jpg';
import beefBrocoli from '../images/Home/beef_with_brocoli.jpg';
import beefMushroom from '../images/Home/beef_with_mushroom.jpg';

const BestSeller = props => {
  return (
    <div className='group relative'>
      <img
        src={props.image}
        className='w-[40rem] h-48 lg:w-[20vw] lg:group-hover:w-[54vh] lg:h-[54vh] object-cover rounded-lg transition-all duration-700'
      />
      <div className='opacity-0 lg:group-hover:opacity-70 flex justify-center items-center absolute lg:bottom-10 w-full h-16 bg-[#fff7f4] transition-all duration-700'>
        <h2 className='font-bold text-xl text-[#5d8a73] text-center'>{props.name}</h2>
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-[#fff7f4] font-montserrat'>
      <div className='w-full h-screen bg-fixed bg-center bg-cover bg-[url("/src/images/Home/banner.png")]' />

      <div className='flex justify-center items-center w-full min-h-[40vh] bg-cover bg-[url("/src/images/Home/wood.png")]'>
        <p className='m-5 font-courgette text-[#9E6B67] text-center text-3xl md:text-5xl'>
          A Family's Passion for Food and Community <br />- Table for Juan
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-[90vw] lg:w-[70vw] min-h-[60vh] py-10 m-auto overflow-hidden'>
        <img
              src={friedBangus}
              className='hidden lg:block w-full h-[48vh] object-cover overflow-hidden'
          />
        <div className='flex flex-col justify-center font-semibold text-2xl'>
          <p className='text-[#71A78C]'>
            Kumusta? Table for Juan represents a carinderia for the Juans(one)
            that want to feel the vibes of salo-salo and the authenticity of the
            hapag-kainan served directly for your convenience.
          </p>
          <button className='w-fit px-3 py-1 mt-3 bg-[#9ACEB4] hover:bg-[#7db69a] transition duration-200 text-[#6d4c44] rounded-lg' onClick={() => navigate('/About')}>
            Learn More
          </button>
        </div>
      </div>

      <div className='relative flex flex-col justify-center items-center w-full min-h-screen px-6 py-10 bg-fixed bg-cover bg-[url("/src/images/Home/best_seller_bg.png")]'>
        <div className='absolute w-full h-full bg-white bg-opacity-40'></div>
        <h1 className='font-bold text-center text-[#E79898] text-5xl z-0'>Best Sellers</h1>
        <div className='flex flex-col lg:flex-row gap-5 mt-8 mb-3 z-0'>
          <BestSeller name="Baked Bangus" image={bakedBangus} />
          <BestSeller name="Beef Broccoli" image={beefBrocoli} />
          <BestSeller name="Beef in Mushroom Sauce" image={beefMushroom} />
        </div>
        <p className='font-courgette text-[#71A78C] text-center text-2xl lg:text-3xl z-0'>
          Discover the delicious offering we have everyday of the week.
        </p>
        <button className='w-fit px-3 py-1 mt-7 bg-[#9ACEB4] hover:bg-[#7db69a] transition  duration-200 font-semibold text-[#6d4c44] text-xl rounded-lg z-0' onClick={() => navigate('/Menu')}>
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Home;
