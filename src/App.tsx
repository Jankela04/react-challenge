import Button from "./components/Button";
import Container from "./components/Dog Container";
import Favourites from "./components/Favourites";
import Form from "./components/Form";
import Header from "./components/Header";
import styles from "./components/Template/style.module.css";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { fetchDogs } from "./redux/slices/dogsSlice";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchDogs("hound"));
    }, []);
    return (
        <div className={styles.default}>
            <Header />
            <Form />
            <Container />
            <div className={styles.divider} />
            <Favourites />
        </div>
    );
}

export default App;
