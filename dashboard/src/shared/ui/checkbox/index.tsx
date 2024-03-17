import React, { FC } from "react";
import styles from "./Checkbox.module.scss";

interface Props {
  value: string | number | readonly string[] | undefined;
  onChange: (e: any) => void;
  [key: string]: any;
}

const Checkbox: FC<Props> = React.forwardRef(
  (
    { value, onChange, ...props },
    ref: React.LegacyRef<HTMLInputElement> | undefined,
  ) => {
    return (
      <label className={styles.root}>
        <input
          {...props}
          value={value}
          onChange={onChange}
          className={styles.originalCheckbox}
          type="checkbox"
        ></input>
        <span className={styles.customCheckbox}></span>
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
