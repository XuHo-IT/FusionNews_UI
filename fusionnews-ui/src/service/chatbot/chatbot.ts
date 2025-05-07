import axios from 'service/axios.customize';
import { IAnswer, IQuestions } from 'data/type';

export const getQuestions = async (): Promise<IQuestions[]> => {
  const questionEndpoint = import.meta.env.VITE_QUESTION_URL; 
  const response = await axios.get(questionEndpoint);
  const baseQuestion = response.data;

  const formattedQuestions: IQuestions[] = baseQuestion.result.map((q: any) => ({
    questionId: q.question_id,
    question: q.question
  }));
  return formattedQuestions;
};

export const getAnswers = async (question_id: number): Promise<IAnswer> => {
  const answerEndpoint = import.meta.env.VITE_ANSWER_URL;
  const response = await axios.post(answerEndpoint, {
    question_id: question_id
  });
  const q = response.data.result;
  const formattedAnswer: IAnswer = {
    questionId: q.question_id,
    answer: q.answer
  };
  console.log('result', formattedAnswer);
  return formattedAnswer;
};






