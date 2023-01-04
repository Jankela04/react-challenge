import React from "react";
import Dog from "./Dog Image";
import styles from "./style.module.css";

type Props = {};

const dogs = [
    "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
    "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
    "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg",
    "https://images.dog.ceo/breeds/hound-afghan/n02088094_10715.jpg",
];
const Container = (props: Props) => {
    return (
        <div className={styles.container}>
            {dogs.map((dog) => {
                return <Dog liked={false} image={dog} />;
            })}
        </div>
    );
};

export default Container;
