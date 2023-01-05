import styles from "./style.module.css";
import breeds from "../../../data/breeds.json";

type Props = {
    query: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: any;
};

const Suggestions = ({ query, setInputValue, handleSubmit }: Props) => {
    return (
        <div className={styles.suggestion_box}>
            {breeds
                .filter((breed) => {
                    return breed.includes(query);
                })
                .map((breed) => (
                    <div
                        className={styles.suggestion_row}
                        onClick={(e) => {
                            setInputValue("");
                            handleSubmit(e, breed);
                        }}
                    >
                        {breed}
                    </div>
                ))}
        </div>
    );
};

export default Suggestions;

// {breeds.filbreeds.map((breed) => (
//     <div
//         className={styles.suggestion_row}
//         onClick={() => {
//             setInputValue(breed);
//         }}
//     >
//         {breed}
//     </div>
// ))}
