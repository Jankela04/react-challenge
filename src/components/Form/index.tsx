import React from "react";
import Button from "../Button";
import styles from "./style.module.css";

type Props = {};

const Form = (props: Props) => {
    return (
        <form className={styles.form}>
            <input type="text" className={styles.input} />
            <Button />
        </form>
    );
};

export default Form;
