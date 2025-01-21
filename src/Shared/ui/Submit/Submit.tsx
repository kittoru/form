import styles from './Submit.module.scss';

type Props = {  
  isValid: boolean;
  children: React.ReactNode;
}

export const Submit = ({children, isValid}: Props) => {
  return ( 
    <button type='submit' disabled={!isValid} className={`${styles.submit} ${isValid? '': styles.disabled}`}>
      {children}
    </button>
  );
}