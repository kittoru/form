import { useState } from 'react';
import styles from './Password.module.scss';

type Props = {
  id: string;
  name: string;
  label: string;
  minlength?: number;
}
export const Password = ({id, name, label, minlength}: Props) => {
  const [type, setType] = useState<string>('password');
  const changeType = () => {
    if (type === 'password') {
      setType('text');
      return;
    }
    setType('password');
  }
  return ( 
    <div className={styles.block}>
      <label htmlFor={id} className={styles.lable}>{label}</label>
      <input id={id} name={name} type={type} required={true} minLength={minlength} className={styles.input}/>
      <div className={styles.view} onClick={changeType}></div>
      <a href=""></a>
    </div>
  );
}