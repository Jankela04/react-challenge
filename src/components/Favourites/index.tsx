import React from "react";
import FavouritesContainer from "./Container";
import Title from "./Title";

type Props = {};

const Favourites = (props: Props) => {
    return (
        <div>
            <Title />
            <FavouritesContainer />
        </div>
    );
};

export default Favourites;
