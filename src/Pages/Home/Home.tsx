import { LogIn, SignUp } from '../../Widgets';

import styles from './Home.module.scss';

type Props = {
 
}
export const Home = ({}: Props) => {
  return ( 
    <div className='container'>
      {/* <LogIn/> */}
      <SignUp/>
    </div>
  );
}