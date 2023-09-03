import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsStar } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { StarRating } from '../common';

const GameItem = ({ gameItem }) => {
  return (
    <GameItemWrapper className='flex flex-col overflow-hidden bg-gradient-to-b from-transparent to-slate-900'>
      <div className='img-fit-cover cursor-pointer h-96 overflow-hidden relative 
}'>
        <img className='transition-transform duration-300 ease-in-out transform hover:scale-105' src = { gameItem?.background_image } alt={gameItem?.name} />
        <StarRating rating = { gameItem?.rating } />
        <div className='ratings-count flex flex-row justify-between items-center absolute left-3 bottom-3 font-extrabold text-xl text-center px-6 py-3 rounded-full bg-white z-10
'>
          { gameItem?.ratings_count } <BsStar className='ml-2' size = { 12 } />
        </div>
      </div>
      <div className='flex-1 bg-violet-light py-5 px-4
'>
        <h4 className='text-white text-uppercase text-18 font-extrabold font-poppins tracking-wide mb-4
'>
          { gameItem?.name }
        </h4>
        <div className='block-wrap'>
          <div className='details-group mb-4'>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>Release Date: &nbsp;</p>
              <p className='details-item-value'>{ gameItem?.released } </p>
            </div>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>Updated: &nbsp;</p>
              <p className='details-item-value'>{ gameItem?.updated } </p>
            </div>
          </div>
          <Link to = { `/games/${gameItem?.id }`} className='h-14 text-center border border-green-normal px-6 min-w-28 text-white font-semibold tracking-wider inline-flex items-center transition-all hover:bg-teal-500
 text-uppercase'>see more</Link>
        </div>
      </div>
    </GameItemWrapper>
  )
}

export default GameItem;

GameItem.propTypes = {
  gameItem: PropTypes.object
}

const GameItemWrapper = styled.div`



  .details-group{
    padding-top: 12px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }
`;
