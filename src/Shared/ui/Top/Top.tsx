import { useContext } from 'react';
import styles from './Top.module.scss';
import { PageContext } from '../../../app/context/Context';

type Props = {
  title: string;
  link: string;
  children: React.ReactNode;
}
export const Top = ({title, link, children}: Props) => {
  const page = useContext(PageContext);
  return ( 
    <div className={styles.top}>  
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.text}>
        {children} <a className={styles.link} onClick={() => page.changePages(page.page)}>{link}</a>
      </div>
    </div>
  );
}