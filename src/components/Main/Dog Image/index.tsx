import { HeartIcon } from "../../SVGs";
import styles from "./style.module.css";
import { useAppDispatch } from "../../../redux/hooks";
import { toggleLiked } from "../../../redux/slices/dogsSlice";

type Props = {
    id: string;
    liked: boolean;
    image: string;
};

const Dog = ({ id, liked, image }: Props) => {
    const dispatch = useAppDispatch();

    return (
        <div
            onClick={() => {
                dispatch(toggleLiked(id));
            }}
            className={styles.card}
            style={{ backgroundImage: `url(${image})` }}
        >
            <HeartIcon liked={liked} />
        </div>
    );
};

export default Dog;
