import Dog from "../Dog Image";
import { Dog as Type } from "../../../redux/slices/dogsSlice";

type Props = {
    dogs: Type[];
};

const Container = ({ dogs }: Props) => {
    return (
        <>
            {dogs.map((dog) => {
                return (
                    <Dog
                        key={dog.id}
                        id={dog.id}
                        image={dog.img}
                        liked={dog.liked}
                    />
                );
            })}
        </>
    );
};

export default Container;
