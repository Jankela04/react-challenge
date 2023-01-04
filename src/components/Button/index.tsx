import React from "react";
import { SearchIcon } from "../SVGs";
import style from "./style.module.css";

type Props = {};

const Button = (props: Props) => {
    return (
        <button className={style.btn} type="submit">
            <SearchIcon /> Search
        </button>
    );
};

export default Button;
