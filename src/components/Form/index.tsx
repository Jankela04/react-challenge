import { FormEvent, useState } from "react";
import Button from "../Button";
import styles from "./style.module.css";
import { useAppDispatch } from "../../redux/hooks";
import { fetchDogs } from "../../redux/slices/dogsSlice";

type Props = {};

const Form = (props: Props) => {
    const dispatch = useAppDispatch();

    const [inputValue, setInputValue] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(fetchDogs(inputValue.toLowerCase()));
        setInputValue("");
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                placeholder="Breed of Dog"
                type="text"
                className={styles.input}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button />
        </form>
    );
};

export default Form;
