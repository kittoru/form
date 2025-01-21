import { useForm, SubmitHandler } from 'react-hook-form';
import { Inputs } from '../../Shared/type/type';
import { Bottom, Email, Password, Submit, Top } from '../../Shared';
import { motion } from 'motion/react';

import styles from './LogIn.module.scss';

export const LogIn = () => {
  const { register, handleSubmit, watch, formState: { errors, isValid }, reset } = useForm<Inputs>({ mode: "onBlur" });
  const onSubmit: SubmitHandler<Inputs> = data => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <motion.section className={styles.login}
      initial={{ opacity: 0, y: -100}} 
      transition={{ duration: 1, type: 'ease' }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 100 }}>
        <div className="container">
          <div className={styles.content}>
            <Top title='Login' link='Create Now'>Don`t have an account?</Top>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Email label='Email' register={register} watch={watch} errors={errors}/>
            <Password label='Password' minlength={8} register={register} watch={watch} errors={errors}/>
            <Submit isValid={isValid}>Login</Submit>
            <a className={styles.forgot}>Forgot a password?</a>
          </form>
          <Bottom />
          </div>
          
        </div>
      
    </motion.section>
    
  );
}