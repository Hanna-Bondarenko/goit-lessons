import clsx from "clsx";
import styles from "./Button.module.css";

const Button = ({ type = "button", success, outline, children }) => {
  //   const classname = success ? `${styles.btn} ${styles.success}` : styles.btn;
  const classname = clsx(
    styles.btn,
    success && styles.success,
    outline && styles.outline
  );
  // класичне значення вгорі функція const classname = clsx
  // тепер внизу напишемо через обєкт
  // const classname = clsx(styles.btn, {
  //     [styles.success]: success,
  //     [styles.outline]: outline,
  //   })
  return (
    <button className={classname} type={type}>
      {children}
    </button>
  );
};

export default Button;
