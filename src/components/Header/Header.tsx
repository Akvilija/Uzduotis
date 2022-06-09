import { useState, useEffect } from 'react';
import { MyMoviesLogo } from 'components/Icons';
import HamburgerButton from 'components/HamburgerButton/HamburgerButton';
import Sidebar from 'components/Sidebar';
import useMediaQuery from 'hooks/useMediaQuery';
import NavigationLink from 'components/NavigationLink';

import styles from './Header.module.css';

const Header = (): JSX.Element => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const { matches } = useMediaQuery({ matchQuery: '(min-width: 768px)' });

  useEffect(() => {
    if (matches) {
      setSidebarVisible(false);
    }
  }, [matches]);

  const handleButtonClick = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <header className={styles.headerElement}>
      <MyMoviesLogo className={styles.headerIcon} />
      <>
        {!matches ? <HamburgerButton isActive={sidebarVisible} onClick={handleButtonClick} /> : <NavigationLink name="Movies" to="/Movies" />}

        {sidebarVisible && (
          <Sidebar onBackDropClick={closeSidebar}>
            <NavigationLink name="Movies" to="/Movies" />
          </Sidebar>
        )}
      </>
    </header>
  );
};

export default Header;
