import { Routes, Route } from 'react-router-dom';
import MoviesListContainer from 'container/MovieListContainer';

import { RouteKey } from './routes';

const MainRouter = (): JSX.Element => (
  <Routes>
    <Route element={<MoviesListContainer />} path={RouteKey.Index} />
    <Route element={<MoviesListContainer />} path={RouteKey.Movies} />
  </Routes>
);

export default MainRouter;
