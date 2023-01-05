import { FormEvent, useState } from "react";
import Button from "./Button";
import styles from "./style.module.css";
import { useAppDispatch } from "../../redux/hooks";
import { fetchDogs } from "../../redux/slices/dogsSlice";
import Suggestions from "./Suggestions";

type Props = {};

const Form = (props: Props) => {
    const dispatch = useAppDispatch();

    const [inputValue, setInputValue] = useState<string>("");

    const handleSubmit = (e: FormEvent, params: string) => {
        e.preventDefault();
        if (!params.includes(" ")) {
            dispatch(fetchDogs({ breed: params }));
        } else {
            const breeds = params.split(" ");
            const obj = breeds.reduce(
                (acc: { breed: string; sub: string }, word, index) => {
                    if (index === 0) {
                        acc.breed = word;
                    } else {
                        acc.sub = word;
                    }
                    return acc;
                },
                { breed: "", sub: "" }
            );
            dispatch(fetchDogs({ breed: obj.breed, sub: obj.sub }));
        }

        setInputValue("");
    };
    return (
        <form
            className={styles.form}
            onSubmit={(e) => handleSubmit(e, inputValue)}
        >
            <input
                placeholder="Breed of Dog"
                type="text"
                className={styles.input}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            {inputValue.length > 0 && (
                <Suggestions
                    query={inputValue}
                    setInputValue={setInputValue}
                    handleSubmit={handleSubmit}
                />
            )}
            <Button />
        </form>
    );
};

export default Form;
