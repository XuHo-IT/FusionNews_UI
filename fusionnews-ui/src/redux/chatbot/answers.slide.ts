import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAnswer } from "data/type";

export interface AnswersState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  answer: IAnswer | null;
}

const initialState: AnswersState = {
  status: "idle",
  error: null,
  answer: null,
};

const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    fetchAnswersRequest: (state, action: PayloadAction<{ question_id: number }>) => {
      state.status = "loading";
      state.error = null;
    },
    fetchAnswersSuccess: (state, action: PayloadAction<{ answer: IAnswer }>) => {
      state.status = "succeeded";
      state.answer = action.payload.answer;
    },
    fetchAnswersFailure: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  fetchAnswersRequest,
  fetchAnswersSuccess,
  fetchAnswersFailure
} = answersSlice.actions;

export default answersSlice.reducer;
