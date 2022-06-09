import { useQuery } from 'react-query';
import { fetchStatus } from 'api/health';
import { MyMoviesLogo } from 'components/Icons';

import styles from './MovieListContainer.module.css';

const MovieListContainer = (): JSX.Element => {
  const { data: healthy } = useQuery('status', fetchStatus);

  return (
    <>
      <MyMoviesLogo className={styles.icon} />
      <p>My movies</p>
      <p>API Status: {healthy ? 'Is running' : 'Something is wrong!'}</p>
    </>
  );
};

export default MovieListContainer;
