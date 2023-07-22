import React from 'react';

const MenuItem = (props) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={props.image}
        alt={props.alt}
        className="w-32 lg:w-1/2 h-auto rounded-full transition-all duration-500 ring-4 ring-transparent hover:ring-[#E79898] hover:scale-125"
      />
      <div className="text-[#8F584B] text-lg font-montserrat font-normal pb-3 mt-10 border-b-2 border-[#8F584B]">
        {props.caption}
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <>
      <div className="bg-[#fff7f4] min-h-screen py-28">
        <div id="MENU" className="text-center px-5 lg:px-32 bg-FFE8E8">
          <h1
            id="section"
            className="mb-10 inline-block text-[#E79898] font-montserrat font-bold text-center text-5xl "
          >
            Menu
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <MenuItem
              image="/src/images/Menu/MENU_FRIEDBANGUS1.png"
              alt="Fried Bangus"
              caption="FRIED BANGUS"
            />
            <MenuItem
              image="/src/images/Menu/MENU_MUNGGOSTEW1.png"
              alt="Munggo Stew"
              caption="MUNGGO STEW"
            />
            <MenuItem
              image="/src/images/Menu/MENU_NILAGA1.png"
              alt="Nilagang Baka"
              caption="NILAGANG BAKA"
            />
            <MenuItem
              image="/src/images/Menu/MENU_PORKHUMBA1.png"
              alt="Pork Humba"
              caption="PORK HUMBA"
            />
            <MenuItem
              image="/src/images/Menu/MENU_BAKEDBANGUS1.png"
              alt="Baked Bangus"
              caption="BAKED BANGUS"
            />
            <MenuItem
              image="/src/images/Menu/MENU_MENUDO1.png"
              alt="Menudo"
              caption="MENUDO"
            />
            <MenuItem
              image="/src/images/Menu/MENU_BEEFBROCCOLI1.png"
              alt="Beef Broccoli"
              caption="BEEF BROCCOLI"
            />
            <MenuItem
              image="/src/images/Menu/MENU_SAYOTE1.png"
              alt="Sayote"
              caption="SAYOTE"
            />
            <MenuItem
              image="/src/images/Menu/MENU_BEEFINMUSHROOMSAUCE1.png"
              alt="Beef in Mushroom Sauce"
              caption="BEEF IN MUSHROOM SAUCE"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
