import React from "react";
import { HeartIcon } from "../../SVGs";
import styles from "./style.module.css";

type Props = {
    liked: boolean;
    image: string;
};

const Dog = ({ liked, image }: Props) => {
    return (
        <div
            className={styles.card}
            style={{ backgroundImage: `url(${image})` }}
        >
            <HeartIcon liked={liked} />
        </div>
    );
};

export default Dog;
