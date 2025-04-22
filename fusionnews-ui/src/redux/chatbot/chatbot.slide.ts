import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuestions } from "data/type";

export interface QuestionsState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  questionsList: IQuestions[];
  question: IQuestions;
  filterOn?: string;
  filterRequest?: string;
  pageNumber?: number;
  pageSize?: number;
}

const initialState: QuestionsState = {
  status: "idle",
  error: null,
  questionsList: [],
  question: {
    questionId: "",
    question: "",
  },
};

const QuestionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    fetchQuestionsRequest: (
      state,
      action: PayloadAction<{
        filterOn?: string;
        filterRequest?: string;
        pageNumber?: number;
        pageSize?: number;
      }>
    ) => {
      state.status = "loading";
      state.error = null;
      state.filterOn = action.payload?.filterOn;
      state.filterRequest = action.payload?.filterRequest;
      state.pageNumber = action.payload?.pageNumber;
      state.pageSize = action.payload?.pageSize;
    },
    fetchQuestionsSuccess: (
      state,
      action: PayloadAction<{ questionsList: IQuestions[] }>
    ) => {
      state.status = "succeeded";
      state.questionsList = action.payload.questionsList;
    },
    fetchQuestionsFailure: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
    fetchSingleQuestionsSuccess: (state, action: PayloadAction<IQuestions>) => {
      state.status = "succeeded";
      state.question = action.payload;
    },
  },
});
export const fetchAnswerRequest = createAction<{ id: number }>('chatbot/fetchAnswerRequest');
export const fetchAnswerSuccess = createAction<string>('chatbot/fetchAnswerSuccess');
export const {
  fetchQuestionsRequest,
  fetchQuestionsSuccess,
  fetchQuestionsFailure,
  fetchSingleQuestionsSuccess,
} = QuestionsSlice.actions;

export default QuestionsSlice.reducer;
