import React from "react";
import { HeartIcon } from "../SVGs";
import style from "./style.module.css";

const Header = () => {
    return (
        <div className={style.header}>
            <h3>Dog Breeds</h3>
            <HeartIcon liked={true} />
        </div>
    );
};

export default Header;
