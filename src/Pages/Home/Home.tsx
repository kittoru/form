import { useContext } from 'react';
import { LogIn, SignUp } from '../../Widgets';
import { PageContext } from '../../app/context/Context';
import { AnimatePresence } from 'motion/react';

import styles from './Home.module.scss';


export const Home = () => {
  const page = useContext(PageContext);
  return ( 
    <AnimatePresence mode='wait'>
      {page.page === 'login'? <LogIn key={0} />: <SignUp key={1} />}
    </AnimatePresence>
  );
}