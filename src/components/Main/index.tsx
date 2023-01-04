import { useAppSelector } from "../../redux/hooks";
import Container from "./Container";
import styles from "./style.module.css";

type Props = {};

const Main = (props: Props) => {
    const dogs = useAppSelector((state) => state.dogs);

    return (
        <div className={styles.container}>
            {dogs.loading && <p>Loading...</p>}
            {dogs.error && <p>{dogs.error}</p>}

            {dogs.dogs.length > 0 && <Container dogs={dogs.dogs} />}
        </div>
    );
};

export default Main;
