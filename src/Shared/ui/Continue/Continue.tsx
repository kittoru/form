import styles from './Continue.module.scss';


type Props = {
  name: string;
  link: string;
  icon: string;
}

export const Continue = ({name, link, icon}: Props) => {
  return ( 
    <a href={link} className={styles.link} target='blank'>
      <img src={icon} alt={name} className={styles.icon}/>
      <span className={styles.text}>Continue with {name}</span>
    </a>
  );
}