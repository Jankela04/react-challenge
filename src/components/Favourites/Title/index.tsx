import React from "react";
import { HeartIcon } from "../../SVGs";
import styles from "./style.module.css";

type Props = {};

const Title = (props: Props) => {
    return (
        <div className={styles.title}>
            <HeartIcon liked={true} />
            <h3>Favourites</h3>
        </div>
    );
};

export default Title;
