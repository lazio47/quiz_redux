import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cardsSlice',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const {id} = action.payload;
            state.cards[id] = action.payload;
        }
    }
});


export const selectCards = (id) => (state) => state.cards.cards[id];

export const {addCard} = cardsSlice.actions;

export default cardsSlice.reducer;

