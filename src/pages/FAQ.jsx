import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'
import Header from '../components/Header'

const FAQ = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  const navigate = useNavigate();
  const searchInputRef = useRef();

  return (
    <>
      <div className='p-5 pb-3 pt-28 bg-[#fff7f4] font-montserrat'>
        <h2 className='text-center font-bold text-[#E79898] text-5xl pt-19 pb-5'>
          Frequently Asked Questions
        </h2>
        {[
          {
            id: 1,
            title: 'Best Seller',
            content:
              'What’s your bestseller? Our topseller is the Beef in Mushroom Sauce. The second dish that our customers loved to eat is our Baked Bangus.',
          },
          {
            id: 2,
            title: 'Allergen Information',
            content:
              'Fried Bangus Allergens: Fish Baked Bangus Allergens: Fish and Dairy Menudo Allergens: Milk Nilaga Allergens: None Ginisang Sayote Allergens: None Pork Sinigang Allergens: None Caldereta Allergens: Milk Korean Beef Stew Allergens: None Beef Broccoli Allergens: None Beef in Mushroom Sauce Allergens: Mushroom',
          },
          {
            id: 3,
            title: 'Vegan',
            content: 'Do you serve vegan meals on the menu? Unfortunately, no.',
          },
          {
            id: 4,
            title: 'Supplier Information',
            content:
              'Where do you get your supplies/ingredients? Is it from a reputable store/market? Yes, a couple of renowned brands. We get our meat from RareFoods and vegetables, fruits and poultry from Fresh Produce.',
          },
          {
            id: 5,
            title: 'Product Care',
            content: 'Ideal product care? Best consumed when it’s hot.',
          },
          {
            id: 6,
            title: 'Other',
            content:
              'If you have questions, feel free to ask us by sending a message here.',
          },
        ].map(tab => (
          <div
            key={tab.id}
            className='relative bg-[#C25757] p-5 shadow-md rounded-md overflow-hidden mb-5'>
            <button
              onClick={() =>
                setSelectedTab(tab.id === selectedTab ? null : tab.id)
              }
              className='relative flex items-center w-full cursor-pointer'>
              <h3 className='text-white font-semibold'>{tab.title}</h3>
              <span className='absolute right-5 text-black text-opacity-10 text-4xl transition-transform duration-1000 transform'>
                {selectedTab === tab.id ? '-' : '+'}
              </span>
            </button>
            {selectedTab === tab.id && (
              <div className='mt-5 text-justify text-white'>{tab.content}</div>
            )}
          </div>
        ))}
        <div className='text-center text-gray-700 py-5'>
          <p>Feel free to ask by messaging here.</p>
          <button 
            className='border-none bg-[#C25757] text-white px-8 py-2 text-center inline-block my-5 cursor-pointer rounded-full hover:bg-red-600 transition duration-200 ease-in-out'
            onClick={() => navigate('/ContactUs')}
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default FAQ;
