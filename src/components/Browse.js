import { NOW_PLAYING_MOVIES_URL, POPULAR_MOVIES, TOP_RATED_MOVIES, UPCOMING_MOVIES } from '../utils/apiUrls';
import { ADD_NOW_PLAYING_MOVIES, ADD_POPULAR_MOVIES, ADD_TOP_RATED_MOVIES, ADD_UPCOMING_MOVIES } from '../utils/constants';
import useFetchAndStore from '../utils/customHooks/useFetchAndStore';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useFetchAndStore(NOW_PLAYING_MOVIES_URL, ADD_NOW_PLAYING_MOVIES);
  useFetchAndStore(TOP_RATED_MOVIES, ADD_TOP_RATED_MOVIES);
  useFetchAndStore(UPCOMING_MOVIES, ADD_UPCOMING_MOVIES);
  useFetchAndStore(POPULAR_MOVIES, ADD_POPULAR_MOVIES);

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse