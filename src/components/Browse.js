import { NOW_PLAYING_MOVIES_URL } from '../utils/apiUrls';
import { ADD_NOW_PLAYING_MOVIES } from '../utils/constants';
import useFetchAndStore from '../utils/customHooks/useFetchAndStore';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useFetchAndStore(NOW_PLAYING_MOVIES_URL, ADD_NOW_PLAYING_MOVIES);

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse