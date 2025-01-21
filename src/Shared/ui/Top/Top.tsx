import styles from './Top.module.scss';

type Props = {
  title: string;
  link: string;
  children: React.ReactNode;
}
export const Top = ({title, link, children}: Props) => {
  return ( 
    <div className={styles.top}>  
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.text}>
        {children} <a className={styles.link}>{link}</a>
      </div>
    </div>
  );
}