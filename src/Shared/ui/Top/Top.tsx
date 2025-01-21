import styles from './Top.module.scss';

type Props = {
  title: string;
  text: string;
  link: string;
}
export const Top = ({title, text, link}: Props) => {
  return ( 
    <div className={styles.top}>  
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.text}>
        {text} <a className={styles.link}>{link}</a>
      </div>
    </div>
  );
}