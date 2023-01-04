import Favourites from "./components/Favourites";
import Form from "./components/Form";
import Header from "./components/Header";
import styles from "./components/Template/style.module.css";
import Main from "./components/Main";

function App() {
    return (
        <div className={styles.default}>
            <Header />
            <Form />
            <Main />
            <div className={styles.divider} />
            <Favourites />
        </div>
    );
}

export default App;
