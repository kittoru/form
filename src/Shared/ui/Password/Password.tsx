import { useState } from 'react';
import { Path, UseFormRegister, UseFormWatch, FieldErrors } from 'react-hook-form';
import { Error } from '../Error/Error';
import { Inputs } from '../../type/type';

import styles from './Password.module.scss';
import Visible from '../assets/visible.svg';
import Invisible from '../assets/invisible.svg';

type Props = {
  label: Path<Inputs>;
  minlength: number;
  confirm?: boolean;
  register: UseFormRegister<Inputs>;
  watch: UseFormWatch<Inputs>;
  errors: FieldErrors<Inputs>;
}

export const Password = ({label, minlength, register, watch, errors, confirm }: Props) => {
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
      <label className={styles.label}>{label}</label>
      <div className={styles.content}>
        <input type={type} className={`${errors[label]? styles.invalid: ''} ${watch(label)? styles.valid: ''}`} {...register(label, 
        { required: "The field is not filled in!", 
          minLength: { 
            value: minlength, 
            message: 'Minimum of 8 characters!'
          }, 
          pattern: {
            value: /^[A-Z0-9]/i,
            message: 'Password only eng and numbers'
          },
          validate: (val:string) => {
            if(confirm) {
              if (watch('Password') != val) {
                return "Your passwords do no match";
              }
            }
          }
        })}/>
        <div className={styles.view} onClick={changeType}>
          <img src={type==='text'? Invisible: Visible} alt="visible" />
        </div>
      </div>
      <div className={styles.error}>
        {errors[label] && <Error text={errors[label]?.message || 'Error!'}/>}         
      </div>
    </div>
  );
}