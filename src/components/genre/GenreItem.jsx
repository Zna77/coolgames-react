import styled from 'styled-components';
import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import axios from "../../api/axios";
import { apiURL} from "../../constants";
import { API_KEY } from "../../api/api_key";
import { BsStar } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { StarRating } from "../common";

const GenreItem = ({ gameItem }) => {
  const [gameData, setGameData] = useState({});

  useEffect(() => {
    const fetchData = async() => {
      const { data } = await axios.get(`${apiURL.gamesURL }/${gameItem.id}?${API_KEY}`);
      setGameData(data);
    }

    fetchData();
  }, []);

  return (
    <GenreItemWrapper className='flex flex-col bg-gradient-to-b from-transparent to-slate-900'>
      <div className='img-fit-cover cursor-pointer h-96 overflow-hidden relative
'>
        <img className='transition-transform duration-300 ease-in-out transform hover:scale-105' src = { gameData?.background_image} alt = { gameData?.name} />
        <StarRating rating = { gameData?.rating} />
        <div className='ratings-count flex flex-row justify-between items-center absolute left-3 bottom-3 font-extrabold text-xl text-center px-6 py-3 rounded-full bg-white z-10'>{ gameData?.ratings_count } <BsStar className='ms-2' size = { 12 } /></div>
      </div>
      <div className='flex-1 bg-violet-light py-5 px-4'>
        <h4 className='text-white text-uppercase text-uppercase text-18 font-extrabold font-poppins tracking-wide mb-4'>
          { gameData?.name }
        </h4>

        <div className='block-wrap'>
          <div className='details-group'>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>Release Date:&nbsp;</p>
              <p className='details-item-value'>{ gameData?.released}</p>
            </div>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>Updated:&nbsp;</p>
              <p className='details-item-value'>{ gameData?.updated}</p>
            </div>
          </div>
          <Link to = {`/games/${gameData?.id}`} className='text-uppercase h-14 text-center border border-green-normal px-6 min-w-28 text-white font-semibold tracking-wider inline-flex items-center mt-4 transition-all hover:bg-teal-500'>see more</Link>
        </div>
      </div>
    </GenreItemWrapper>
  )
}

export default GenreItem;

GenreItem.propTypes = {
  gameItem: PropTypes.object
}

const GenreItemWrapper = styled.div`

  .details-group{
    padding-top: 12px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }
`;