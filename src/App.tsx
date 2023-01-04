import Button from "./components/Button";
import Container from "./components/Dog Container";
import Favourites from "./components/Favourites";
import Form from "./components/Form";
import Header from "./components/Header";
import styles from "./components/Template/style.module.css";

function App() {
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
