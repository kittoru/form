import { Path, UseFormRegister, UseFormWatch, FieldErrors } from 'react-hook-form';
import { Inputs } from '../../type/type';
import { Error } from '../Error/Error';

import styles from './Email.module.scss';

type Props = {
  label: Path<Inputs>;
  register: UseFormRegister<Inputs>;
  watch: UseFormWatch<Inputs>;
  errors: FieldErrors<Inputs>;
}
export const Email = ({label, register, watch, errors}: Props) => {
  return ( 
    <div className={styles.input}>
      <label className={styles.label}>{label}</label>
      <input className={`${errors[label]? styles.invalid: ''} ${watch(label)? styles.valid: ''}`} {...register(label, 
      { required: "The field is not filled in!", 
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address."
        } 
      })}/>
      <div className={styles.error}>
        {errors[label] && <Error text={errors[label]?.message || 'Error!'}/>}
      </div>
  </div>
  );
}