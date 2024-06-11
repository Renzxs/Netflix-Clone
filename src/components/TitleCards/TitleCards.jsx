import React from 'react';
import CardsData from '../../assets/assets/cards/Cards_data'

const TitleCards = () => {
  return (
    <div className='mt-[10px] mb-[30px] w-[100%]'>
      <h2  className='mb-[8px] text-[20px]'>Popular on Netflix</h2>

      <div className='flex gap-[10px] w-full'>
        {
          CardsData.map((card, index) => {
            return (
              <div style={{ width: '240px' }} className='relative' key={index}>
                <img className='rounded-[4px] cursor-pointer' src={card.image} alt={card.img} />
                <p>{card.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TitleCards;
