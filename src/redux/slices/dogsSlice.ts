import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    loading: boolean;
    dogs: {
        img: string;
        liked: boolean;
    }[];
    error: string;
};
type Response = {
    message: string[];
    status: string;
};

const initialState = {
    loading: false,
    dogs: [{}],
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
    reducers: {},
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
                    return { img: link, liked: false };
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
export default dogsClice.reducer;
