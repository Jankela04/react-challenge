import Button from "./components/Button";
import Form from "./components/Form";
import Header from "./components/Header";
import styles from "./components/Template/style.module.css";

function App() {
    return (
        <div className={styles.default}>
            <Header />
            <Form />
        </div>
    );
}

export default App;
