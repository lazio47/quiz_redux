import { createSlice } from "@reduxjs/toolkit";

export const topicSlice = createSlice({
    name: 'topicsSlice',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = {
                ...action.payload,
                quizIds: []
            }
        },
        addQuizList: (state, action) => {
            const { topicId, id } = action.payload;
            state.topics[topicId].quizIds.push(id)
        }
    }
});

export const selectTopics = (state) => state.topics.topics;

export const {addTopic, addQuizList} = topicSlice.actions;

export default topicSlice.reducer;