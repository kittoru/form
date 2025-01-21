import { useContext } from 'react';
import { LogIn, SignUp } from '../../Widgets';
import { PageContext } from '../../app/context/Context';

import styles from './Home.module.scss';

export const Home = () => {
  const page = useContext(PageContext);
  return ( 
      <div className='container'>
        {page.page === 'login'? <LogIn/>: <SignUp/>}
      </div>
  );
}