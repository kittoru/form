import styles from './Error.module.scss';

type Props = {
  text: string | undefined;
}
export const Error = ({text}: Props) => {
  return ( 
    <span className={styles.error}>
      {text}
    </span>
  );
}