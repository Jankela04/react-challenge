import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export type Dog = {
    img: string;
    liked: boolean;
    id: string;
};

export type State = {
    loading?: boolean;
    dogs: Dog[];
    error?: string;
};
type Response = {
    message: string[];
    status: string;
};

const initialState: State = {
    loading: false,
    dogs: [],
    error: "",
};

export const fetchDogs = createAsyncThunk(
    "dogs/fetchDogsByBreed",
    async (breed: string) => {
        const response = await axios.get(
            `https://dog.ceo/api/breed/${breed}/images/random/10`
        );
        return response.data;
    }
);

const dogsClice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        toggleLiked: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.dogs.map((dog) => {
                if (dog.id === id) return (dog.liked = !dog.liked);

                return dog;
            });
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDogs.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            fetchDogs.fulfilled,
            (state, action: PayloadAction<Response>) => {
                state.loading = false;
                state.error = "";
                const object = action.payload.message.map((link) => {
                    return { img: link, liked: false, id: v4() };
                });
                state.dogs = object;
            }
        );
        builder.addCase(fetchDogs.rejected, (state, action) => {
            state.loading = false;
            state.dogs = [];
            state.error = action.error.message || "Something went wrong";
        });
    },
});
export const { toggleLiked } = dogsClice.actions;

export default dogsClice.reducer;
