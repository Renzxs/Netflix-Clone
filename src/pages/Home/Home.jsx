import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import HeroBanner from '../../assets/assets/hero_banner.jpg'
import HeroTitle from '../../assets/assets/hero_title.png'
import PlayIcon from '../../assets/assets/play_icon.png';
import InfoIcon from '../../assets/assets/info_icon.png';

const Home = () => {
  return (
    <div>
      <NavBar/>
      {/* HERO BANNER */}
      <div className="relative">
      <div className="relative w-full h-full">
        <img className="w-full h-auto" src={HeroBanner} alt="Hero Banner" />
        <div className="absolute inset-0 bg-gradient-to-r from-black  to-transparent"></div>
      </div>

      <div className="absolute w-full pl-[6%] bottom-[20px] font-Poppins text-white">
        <img className='w-[90%] max-w-[420px] mb-[30px]' src={HeroTitle} alt="Hero Title" />
        <p className='max-w-[700px] text-[17px] mb-[20px]'>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
        {/* BUTTONS */}
        <div className='flex gap-[10px] mb-[50px]'>
          <button className='rounded-sm flex cursor-pointer items-center gap-[10px] text-[15px] py-[8px] bg-white font-[600] text-black px-[20px] border-none outline-none hover:bg-[#ffffffbf]'><img className='w-[25px]' src={PlayIcon} alt={PlayIcon} />Play</button>
          <button className='rounded-sm flex cursor-pointer items-center gap-[10px] text-[15px] py-[8px] bg-[#6d6d6eb3] font-[600] px-[20px] border-none outline-none hover:bg-[#6d6d6e66]'><img className='w-[25px]' src={InfoIcon} alt={InfoIcon} />More Info</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home;
