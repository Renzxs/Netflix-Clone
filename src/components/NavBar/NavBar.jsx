import React from 'react'
import Logo from '../../assets/assets/logo.png';
import SearchIcon from '../../assets/assets/search_icon.svg'
import BellIcon from '../../assets/assets/bell_icon.svg'
import ProfileIcon from '../../assets/assets/profile_img.png'
import CaretIcon from '../../assets/assets/caret_icon.svg'

const NavBar = () => {
  return (
    <div className='w-full px-[6%] py-[20px] flex justify-between items-center fixed text-[#e5e5e5] bg-gradient-to-b from-[#191919] to-transparent z-[5]'>
      {/* NAVBAR LEFT */}
      <div className='flex items-center gap-[50px]'>
        <img className='w-[90px]' src={Logo} alt={Logo} />
        {/* NAVBAR LINKS */}
        <ul className='flex gap-[20px] cursor-pointer font-Poppins'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>     
          <li>Browser by Languages</li>  
        </ul>
      </div>

      {/* NAVBAR RIGHT */}
      <div className='flex items-center gap-[20px] font-Poppins'>
        <img className='w-[20px] cursor-pointer' src={SearchIcon} alt={SearchIcon} />
        <p>Children</p>
        <img className='w-[20px] cursor-pointer' src={BellIcon} alt={BellIcon} />
        {/* NAVBAR PROFILE */}
        <div className='flex relative items-center gap-[10px] cursor-pointer group'>
          <img className='rounded-[4px] w-[35px]' src={ProfileIcon} alt={ProfileIcon} />
          <img src={CaretIcon} alt={CaretIcon} />
          {/* DROPDOWN */}
          <div className='hidden absolute hover:block top-[100%] right-0 min-w-max bg-[#191919] px-[22px] group-hover:block py-[18px] rounded-[2px] underline z-[1]'>
            <p>Sign out of Netflix</p>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default NavBar;
