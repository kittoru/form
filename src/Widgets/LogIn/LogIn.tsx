import { useForm, SubmitHandler } from 'react-hook-form';
import { Inputs } from '../../Shared/type/type';
import { Bottom, Email, Password, Submit, Top } from '../../Shared';

import styles from './LogIn.module.scss';

export const LogIn = () => {
  const { register, handleSubmit, watch, formState: { errors, isValid }, reset } = useForm<Inputs>({ mode: "onBlur" });
  const onSubmit: SubmitHandler<Inputs> = data => {
    alert(data);
    reset();
  };

  return ( 
    <section className={styles.login}>
      <Top title='Login' text='Don`t have an account?' link='Create Now' />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Email label='Email' register={register} watch={watch} errors={errors}/>
        <Password label='Password' minlength={8} register={register} watch={watch} errors={errors}/>
        <Submit isValid={isValid}>Login</Submit>
        <a className={styles.forgot}>Forgot a password?</a>
      </form>
      <Bottom />
    </section>
    
  );
}