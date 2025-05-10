import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuestions } from "data/type";

export interface QuestionsState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  questionsList: IQuestions[];
}

const initialState: QuestionsState = {
  status: "idle",
  error: null,
  questionsList: [],
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    fetchQuestionsRequest: (state) => {
      state.status = "loading";
      state.error = null;
    },
    fetchQuestionsSuccess: (state, action: PayloadAction<{ questionsList: IQuestions[] }>) => {
      state.status = "succeeded";
      state.questionsList = action.payload.questionsList;
    },
    fetchQuestionsFailure: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  fetchQuestionsRequest,
  fetchQuestionsSuccess,
  fetchQuestionsFailure
} = questionsSlice.actions;

export default questionsSlice.reducer;
