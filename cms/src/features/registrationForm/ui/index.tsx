import { useNavigate } from "react-router-dom";
import Button from "../../../shared/ui/button";
import PasswordInput from "../../../shared/ui/passwordInput";
import TextInput from "../../../shared/ui/textInput";
import { useGetUserQuery } from "../../../entities/user";
import { useRegistrationMutation } from "../api";
import styles from "./RegistrationForm.module.scss";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  email: string;
  password: string;
}

const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const [registration, result] = useRegistrationMutation();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    const res = await registration({ email, password, role: String("ADMIN") });
    if ("data" in res) {
      localStorage.setItem("jwt", res.data.accessToken);
      window.location.href = "/admin";
    }
    if ("error" in res) {
      console.log(res.error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
      <div className={styles.formItems}>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="email">
            Введите email
          </label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <TextInput {...field} id="email" />}
          />
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="password">
            Введите пароль
          </label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => <PasswordInput {...field} id="password" />}
          />
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="confirm_password">
            Повторите пароль
          </label>
          <Controller
            name="confirm_password"
            control={control}
            render={({ field }) => (
              <PasswordInput {...field} id="confirm_password" />
            )}
          />
        </div>
      </div>
      <div className={styles.button}>
        <Button type="submit">отправить</Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
