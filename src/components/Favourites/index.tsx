import Title from "./Title";
import { useAppSelector } from "../../redux/hooks";
import Container from "../Main/Container";
import styles from "../Main/style.module.css";

const Favourites = () => {
    const state = useAppSelector((state) => state.dogs);
    const filteredDogs = state.dogs.filter((dog) => dog.liked);

    return (
        <div>
            <Title />
            <div className={styles.container}>
                <Container dogs={filteredDogs} />
            </div>
        </div>
    );
};

export default Favourites;
