import { Continue } from '../Continue/Continue';

import styles from './Bottom.module.scss';
import facebook from '../assets/facebook.svg';
import google from '../assets/google.svg';

export const Bottom = () => {
  return ( 
      <div className={styles.bottom}>
        <span className={styles.top}>
          <span className={styles.line}></span>
            Or
          <span className={styles.line}></span>
        </span>
        <div className={styles.btn}>
          <Continue name='Facebook' icon={facebook} link="https://www.facebook.com" />
          <Continue name='Google' icon={google} link="https://www.google.com" /> 
        </div>
      </div>
  );
}