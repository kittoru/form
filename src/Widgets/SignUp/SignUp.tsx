import { Bottom, Email, Input, Password, Submit, Top } from "../../Shared";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "../../Shared/type/type";

import styles from './SignUp.module.scss';

export const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors, isValid }, reset } = useForm<Inputs>({ mode: 'onBlur' });
  const onSubmit: SubmitHandler<Inputs> = data => {
    alert(data);
    reset();
  }

  return ( 
    <section className={styles.sing}>
      <Top title="Create Your Account" text="Already have an account?" link="Login" />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input label='First Name' register={register} watch={watch} errors={errors} />
        <Input label='Last Name' register={register} watch={watch} errors={errors} />
        <Email label="Email" register={register} watch={watch} errors={errors} />
        <Password label="Password" minlength={8} register={register} watch={watch} errors={errors} />
        <Password label="Confirm Password" minlength={8} register={register} watch={watch} errors={errors} confirm={true}/>
        <Submit isValid={isValid} >Register</Submit>
      </form>
      <Bottom />
    </section>
  );
}