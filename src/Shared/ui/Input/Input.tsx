import { Inputs } from '../../type/type';
import { Error } from '../Error/Error';
import { Path, UseFormRegister, UseFormWatch, FieldErrors } from 'react-hook-form';

import styles from './Input.module.scss';

type Props = {
  label: Path<Inputs>;
  register: UseFormRegister<Inputs>;
  watch: UseFormWatch<Inputs>;
  errors: FieldErrors<Inputs>;
}

export const Input = ({label, register, errors, watch}: Props) => {
  return (
    <div className={styles.block}>
      <label className={styles.label}>{label}</label>
      <div className={styles.content}>
        <input className={`${errors[label]? styles.invalid: ''} ${watch(label)? styles.valid: ''}`} {...register(label, 
        { required: "The field is not filled in!", 
          minLength: { 
            value: 2, 
            message: `Minimum of 2 characters!`}, 
          })}/>
      </div>
      <div className={styles.error}>
        {errors[label] && <Error text={errors[label]?.message || 'Error!'}/>}         
      </div>
    </div>
  );
}